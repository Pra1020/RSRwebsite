import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/app/lib/prisma';
import { sign } from 'jsonwebtoken';

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming request body
    const { email, password } = await req.json();

    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // Create JWT token
    const token = sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET!, // Ensure JWT_SECRET is set in your .env file
      { expiresIn: '1h' }
    );

    // Return the token and user information
    return NextResponse.json({
      message: 'Login successful',
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    // Handle the error object with proper typing
    if (error instanceof Error) {
      return NextResponse.json(
        { message: 'Error logging in', error: error.message },
        { status: 500 }
      );
    }

    // Fallback for unknown error types
    return NextResponse.json({ message: 'Unexpected error occurred' }, { status: 500 });
  }
}
