module.exports = {
    darkMode: false,
    theme: {
        colors: {
            current: "currentColor",
            transparent: "transparent",
            "black-alpha": "rgba(0, 0, 0,.25)",
            black: "#000000",

            "base-1": "#FFFFFF",
            "base-2": "#F8F8F9",
            "base-3": "#E8E9EB",
            "base-4": "#DCDDE1",

            "inverted-1": "#371E56",
            "inverted-2": "#607081",
            "inverted-3": "#E8E9EB",
            "inverted-4": "#F8F8F9",

            "on-primary": "#FFFFFF",
            "on-sucess": "#FFFFFF",
            "on-danger": "#FFFFFF",
            "on-warning": "#FFFFFF",

            "on-inverted": "#FFFFFF",
            "on-base": "#463758",
            "on-base-2": "#607081",
            "on-base-3": "#A0A8B6",

            "primary-light": "#E4F3F3",
            primary: "#2BC4C3",
            "primary-dark": "#0C9898",
            "primary-bold": "#004852",

            "tertiary-light": "#607081",
            tertiary: "#607081",
            "tertiary-dark": "#636970",
            "tertiary-bold": "#474B50",

            "success-light": "#E8F6DF",
            success: "#72CB3B",
            "success-dark": "#58A12B",
            "success-bold": "#3E711E",

            "danger-light": "#FFD6DB",
            danger: "#E50019",
            "danger-dark": "#B80015",
            "danger-bold": "#7A000E",

            "warning-light": "#FFF5D6",
            warning: "#FFC20E",
            "warning-dark": "#E0A800",
            "warning-bold": "#A37A00",

            "secondary-light": "#F4FAFD",
            secondary: "#F0FAFA",
            "secondary-dark": "#DBEBEB",
            "secondary-bold": "#5BA2C4",

            "orange-promax": "#FF4007",

            google: "#EA4335",
            "google-dark": "#D0382C",
            "google-bold": "#B42E23",
            "google-red": "#FF4C4C",
            "google-blue": "#368DF7",
            "google-purple": "#8914CC",
            "google-green": "#8BC34A",
            "google-yellow": "#F4B400",

            "card-stroke": "#CED4D8",
            "card-stroke-2": "#A3AAB5",
            "card-shadow": "#E1E4E7",

            focus: "#5690F7",
        },
        variants: {
            extend: {
                ringWidth: ["hover"],
                backgroundColor: ["active"],
                overflow: ["hover", "group-hover"],
                borderRadius: ["first", "last"],
            },
        },
        fontWeight: {
            hairline: false,
            thin: false,
            light: false,
            normal: 400,
            medium: false,
            semibold: 600,
            bold: 700,
            extrabold: false,
            black: false,
        },
    },
    variants: {
        extend: {
            ringWidth: ["hover"],
            backgroundColor: ["active"],
            overflow: ["hover", "group-hover"],
            borderRadius: ["first", "last"],
        },
    },
    plugins: [require("tailwindcss-padding-safe")()],
};