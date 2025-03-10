import { create } from "@storybook/theming";

export const Themes = {
    manager: create({
        base: "light",
        brandTitle: "ShareGate Orbiter",
        brandUrl: "https://sharegate.com",
        brandImage: "https://raw.githubusercontent.com/workleap/wl-orbiter/master/assets/orbiter-full.svg?sanitize=true"
    }),
    docs: create({
        base: "light",
        fontBase: "Inter, Arial, Helvetica, sans-serif",
        textColor: "#04091A"
    })
};
