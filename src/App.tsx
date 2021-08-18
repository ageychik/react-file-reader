import React from 'react';
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/athoms";
import Hero from "./components/templates/Hero";
import { StylesGeneral } from './components/_settings';

function App() {
    return (
        <ThemeProvider theme={ lightTheme }>
            <StylesGeneral />
            <Hero />
        </ThemeProvider>
    );
}

export default App;
