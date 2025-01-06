import React from "react";
import Header from "./Header";
import { Slot } from "expo-router";
import { ToastContainer } from "react-toastify";
import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <>
            <Header />
            <Slot />
            <ToastContainer position="top-right" autoClose={5000} />
        </>
    );
}
