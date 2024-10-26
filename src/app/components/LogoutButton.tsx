// src/app/components/LogoutButton.tsx
"use client";
import { useAuth } from "@/context/AuthContext";
import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";

const LogoutButton: React.FC = () => {
    const { logout } = useAuth();

    return (
        <Button
            onClick={logout}
            size={"sm"}
            className="mt-2 border border-primary text-primary bg-transparent hover:bg-lightprimary outline-none focus:outline-none"
        >
            Logout
        </Button>
    );
};

export default LogoutButton;
