// app/api/register/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { hashPassword } from '@/app/lib/auth';
import { prisma } from '@/app/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming request body
    const { name, email, password } = await req.json();

    // Hash the password before saving
    const hashedPassword = hashPassword(password);

    // Save the user to the database
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: 'User created successfully', user });
  } catch {
    return NextResponse.json({ message: 'Error creating user', error: error.message }, { status: 500 });
  }
}
