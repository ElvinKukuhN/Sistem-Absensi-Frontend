"use client"

import React, { ChangeEvent, use, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import FullLogo from "@/app/layout/shared/logo/FullLogo";
import AuthLogin from "../authforms/AuthLogin";
import { login } from "@/handlers/auth";
import AlertNotification from "@/app/components/AlertNotification";
import { useNotification } from "@/context/NotificationContext";
import { useAuthRedirect } from "@/app/utils/authRedirect";

const gradientStyle = {
  background: "linear-gradient(45deg, rgb(238, 119, 82,0.2), rgb(231, 60, 126,0.2), rgb(35, 166, 213,0.2), rgb(35, 213, 171,0.2))",
  backgroundSize: "400% 400%",
  animation: "gradient 15s ease infinite",
  height: "100vh",
};

const BoxedLogin = () => {
  useAuthRedirect()
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { setNotification } = useNotification();
  const router = useRouter(); // Use the router from Next.js for navigation

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await login(formData.email, formData.password);
      if (response.success) {
        setNotification({ message: response.message || "Login berhasil.", type: "success" });
        setFormData({ email: "", password: "" }); // Reset form data after successful login
        router.push('/users/dashboard'); // Redirect to dashboard after successful login
      } else {
        // Handle login error message
        setNotification({ message: response.message || "Login gagal. Silakan coba lagi.", type: "error" });
      }
    } catch (error: any) {
      setNotification({ message: error.message || "Login failed. Please try again.", type: "error" });
    }
  };

  return (
    <div style={gradientStyle} className="relative overflow-hidden h-screen">
      <div className="flex h-full justify-center items-center px-4">
        <div className="rounded-xl shadow-md bg-white dark:bg-darkgray p-6 w-full md:w-96 border-none">
          <div className="flex flex-col gap-2 p-0 w-full">
            <div className="mx-auto">
              <FullLogo />
            </div>
            <p className="text-sm text-center text-dark my-3">Sign In on Absensi</p>
            <AuthLogin
              formData={formData}
              onChange={handleChange}
              onSubmit={handleLogin}
            />
            <div className="flex gap-2 text-base text-ld font-medium mt-6 items-center justify-center">
              <p>New to Absensi?</p>
              <Link href="/auth/register" className="text-primary text-sm font-medium">
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default BoxedLogin;
