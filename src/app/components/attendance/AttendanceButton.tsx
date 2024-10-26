"use client";
import React from "react";
import { Button } from "flowbite-react";
import { Icon } from '@iconify/react';

const AttendanceButton: React.FC = () => {
    const buttonStyles = {
        primary: "bg-primary text-white text-sm ", // Tambahkan text-sm, py-2, px-4
        secondary: "bg-red-500 text-white text-sm",
    };

    const attendanceButtons = [
        { label: "Absen Masuk", style: buttonStyles.primary },
        { label: "Absen Pulang", style: buttonStyles.secondary },
    ];

    return (
        <div className="bg-white rounded-xl shadow-md p-0">
            <header className="flex items-center mb-6 p-2 border-b-2 border-gray-200">
                <h2 className="text-xl text-dark font-semibold">Absen Disini !!!</h2>
            </header>
            <div className="flex flex-col gap-2">
                {attendanceButtons.map((button, index) => (
                    <Button key={index} className={button.style}>
                        {button.label}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default AttendanceButton;