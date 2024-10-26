"use client"
import FullLogo from "@/app/layout/shared/logo/FullLogo";
import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import AuthRegister from "../authforms/AuthRegister";
import { register } from "@/handlers/auth";
import AlertNotification from "@/app/components/AlertNotification";

const gradientStyle = {
  background: "linear-gradient(45deg, rgb(238, 119, 82,0.2), rgb(231, 60, 126,0.2), rgb(35, 166, 213,0.2), rgb(35, 213, 171,0.2))",
  backgroundSize: "400% 400%",
  animation: "gradient 15s ease infinite",
  height: "100vh",
  overflow: "hidden",
};

const BoxedRegister = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await register(formData.name, formData.email, formData.password);
      if (response.success) {
        setNotification({ message: response.message || "Registrasi berhasil. Silakan login.", type: "success" });
        setFormData({ name: "", email: "", password: "" }); // Reset form data after successful registration
      } else {
        // Jika API mengembalikan sukses false, ambil pesan kesalahan
        setNotification({ message: response.message || "Registrasi gagal. Silakan coba lagi.", type: "error" });
      }
    } catch (error: any) {
      setNotification({ message: error.message || "Registration failed. Please try again.", type: "error" });
    }
  };

  return (
    <div style={gradientStyle} className="relative overflow-hidden h-screen">
      <div className="flex h-full justify-center items-center px-4">
        <div className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative break-words md:w-96 w-full border-none">
          <div className="flex h-full flex-col justify-center gap-2 p-0 w-full">
            <div className="mx-auto">
              <FullLogo />
            </div>
            <p className="text-sm text-center text-dark my-3">
              Sign Up on Absensi
            </p>
            {notification && (
              <AlertNotification
                message={notification.message}
                type={notification.type}
                onClose={() => setNotification(null)} // Call setNotification to close
              />
            )}
            <AuthRegister
              formData={formData}
              onChange={handleChange}
              onSubmit={handleRegister}
            />
            <div className="flex gap-2 text-base text-ld font-medium mt-6 items-center justify-center">
              <p>Already have an Account?</p>
              <Link href="/auth/login" className="text-primary text-sm font-medium">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`00000000
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

export default BoxedRegister;
