"use client"
import { ThemeModeScript, Flowbite } from 'flowbite-react';
import React from 'react';
import AlertNotification from './components/AlertNotification';
import { useNotification, NotificationProvider } from '../context/NotificationContext';
import customTheme from './utils/theme/custom-theme';
import { AuthProvider } from '../context/AuthContext';


const LayoutWithNotifications: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { notification, setNotification } = useNotification();

  return (
    <>
      {children}
      {notification && (
        <AlertNotification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </>
  );
};

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <ThemeModeScript />
      <AuthProvider>
        <NotificationProvider>
          <Flowbite theme={{ theme: customTheme }}>
            <LayoutWithNotifications>{children}</LayoutWithNotifications>
          </Flowbite>
        </NotificationProvider>
      </AuthProvider>
    </>
  );
};

export default ClientLayout;