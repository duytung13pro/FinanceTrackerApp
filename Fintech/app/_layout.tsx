import React from "react";
import Header from "./Header";
import { Slot } from "expo-router";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from './AuthContext';

export default function Layout() {
    return (
        <AuthProvider>
            <Header />
            <Slot />
            <ToastContainer position="top-right" autoClose={5000} />
        </AuthProvider>
    );
}
