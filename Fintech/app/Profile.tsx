import { StyleSheet } from "react-native";

export default function Profile() {
    return <h1 style={style.editThis}>Profile</h1>;
}

const style = StyleSheet.create({
    editThis: {
        color: "red",
    },
});
