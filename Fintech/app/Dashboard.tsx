import { StyleSheet } from "react-native";

export default function Dashboard() {
    return <h1 style={style.editThis}>Dashboard</h1>;
}

const style = StyleSheet.create({
    editThis: {
        color: "green",
    },
});
