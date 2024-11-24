"use client"
import { useState } from "react"
import Link from "next/link";
// pages/index.tsx
import React from "react";
import Layout from "../layout";



const Home: React.FC = () => {
  return (
    <Layout>
      
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Welcome to LearnTek!</h1>
    </Layout>
  );
};

export default Home;
