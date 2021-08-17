import { DefaultTheme } from "styled-components";


declare module "styled-components" {
    export interface DefaultTheme {
        color_primary: string,
        color_primary_light: string,
        color_primary_ultra: string,
        color_primary_dark: string,

        color_error: string,

        color_base: string,
        color_black: string,
        color_gray_100: string,
        color_gray_200: string,
        color_gray_300: string,
        color_gray_400: string,
        color_gray_500: string,
        color_gray_600: string,
        color_gray_700: string,
        color_gray_800: string,
        color_gray_900: string,
    }
}

export const lightTheme: DefaultTheme = {
    color_primary_light: '#a9d3ab',
    color_primary: "#65b168",
    color_primary_dark: '#37833b',
    color_primary_ultra: '#1f4921',

    color_error: '#A40000',

    color_base: '#fff',
    color_black: '#333',
    color_gray_100: "#f0f0f1",
    color_gray_200: "#e1e1e3",
    color_gray_300: '#d2d2d6',
    color_gray_400: '#b4b4bb',
    color_gray_500: '#9696a0',
    color_gray_600: '#5a5b6a',
    color_gray_700: '#4a4b57',
    color_gray_800: '#3a3a44',
    color_gray_900: '#292a31',
};