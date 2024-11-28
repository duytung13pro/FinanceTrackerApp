/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

// Nếu Jay thấy file này thì cứ add thêm màu theo ý muốn nhé
// File này để đặt màu cho đồng nhất cho tất cả các file.
// muốn dùng thì import vào file cần dùng: import { Colors } from "@/constants/Colors";
// sau đó gọi màu cần dùng: Colors.dark.text

const indigoBlue = "#0E1F3C";
const grayBlue = "#3A3E4A";
const stoneBlue = "#59687B";
const sand = "#C6BDB4";
const linen = "#EDE9E2";
const white = "#FFFFFF";
const black = "#000000";

export const Colors = {
  light: {

  },
  dark: {
    text: linen,
    accentedText: sand,
    background: stoneBlue,
    highlight: grayBlue,
    icon: grayBlue,
  },
};
