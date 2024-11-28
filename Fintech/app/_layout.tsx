import { Stack, Slot } from "expo-router";
import Header from "./Header";

export default function Layout() {
    return (
        <>
            <Header />
            <Slot />
        </>
    );
}
