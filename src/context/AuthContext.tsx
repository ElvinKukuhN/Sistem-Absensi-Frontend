// src/app/utils/AuthContext.tsx
"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface AuthContextType {
    isAuthenticated: boolean;
    setAuthenticated: (status: boolean) => void;
    logout: () => void; // Tambahkan logout di sini
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("authToken"); // Cek apakah token ada di localStorage
        setIsAuthenticated(!!token); // Jika ada, set isAuthenticated menjadi true
    }, []);

    // Fungsi logout
    const logout = () => {
        localStorage.removeItem("authToken"); // Hapus token dari localStorage
        localStorage.removeItem("role"); // Hapus role dari localStorage jika ada
        setIsAuthenticated(false); // Set isAuthenticated menjadi false
        router.push("/auth/login"); // Arahkan pengguna ke halaman login
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, setAuthenticated: setIsAuthenticated , logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
};
