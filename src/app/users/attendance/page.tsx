import AttendanceButton from "@/app/components/attendance/AttendanceButton";
import React from "react";

const AttendancePage = () => {
    return (
        <div className="flex items-stretch w-full mx-auto">
            <div className="rounded-xl shadow-md bg-white dark:bg-darkgray p-6 break-words dark:shadow-dark-md w-3/4 mr-4 flex flex-col">
                <h5 className="card-title mb-3">Absensi</h5>
                <p className="card-subtitle">
                    Sebelum melakukan absensi online, ada beberapa informasi yang harus diperhatikan dibawah ini:
                </p>
                <ul className="list-disc pl-5">
                    <li className="card-subtitle">Absen Masuk hanya bisa dilakukan setiap hari jam 07:00 - 11:30</li>
                    <li className="card-subtitle">Absen Pulang hanya bisa dilakukan setiap hari jam 17:00 - 23:30</li>
                </ul>
            </div>
            <div className="rounded-xl shadow-md bg-white dark:bg-darkgray p-6 dark:shadow-dark-md w-1/4 flex items-center justify-center">
                <AttendanceButton />
            </div>
        </div>
    );
};
export default AttendancePage;
