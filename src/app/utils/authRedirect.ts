// src/app/utils/authRedirect.ts
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useAuthRedirect = () => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    const role = localStorage.getItem("role")

    useEffect(() => {
        if (isAuthenticated) {
            if (role === "admin") {
                router.replace("/admin/dashboard");
            } else if (role === "employee") {
                router.replace("/users/dashboard");
            }
        }
    }, [isAuthenticated, router]);
};
