import React from "react";
import Header from "./Header";
import { Slot } from "expo-router";

export default function Layout() {
    return (
        <>
            <Header />
            <Slot />
        </>
    );
}
