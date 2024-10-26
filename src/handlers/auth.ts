import axios from "axios";
import { DataResponse } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL


export const register = async (
    name: string,
    email: string,
    password: string,
    role: 'employee' = 'employee'
): Promise<DataResponse> => {
    try {
        const response = await axios.post<DataResponse>(`${API_URL}auth/signUp`, {
            name,
            email,
            password,
            role
        });
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            // Handle Axios error
            const errorMessage = error.response?.data?.message || 'An error occurred during registration.';
            throw new Error(errorMessage);
        } else {
            // Handle non-Axios errors (if necessary)
            throw new Error('An unexpected error occurred.');
        }
    }
}

export const login = async (
    email: string,
    password: string,
): Promise<DataResponse> => {
    try {
        const response = await axios.post<DataResponse>(`${API_URL}auth/signIn`, {
            email,
            password,
        });

        // Check if login was successful
        if (response.data.success) {
            const token = response.data.data.token;
            const role = response.data.data.role
            // Store the token in local storage
            localStorage.setItem('authToken', token);
            localStorage.setItem('role', role);
        }


        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            // Handle Axios error
            const errorMessage = error.response?.data?.message || 'An error occurred during registration.';
            throw new Error(errorMessage);
        } else {
            // Handle non-Axios errors (if necessary)
            throw new Error('An unexpected error occurred.');
        }
    }
}

export const logout = async () => {
    try {
        const response = await axios.post(`${API_URL}/logout`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

