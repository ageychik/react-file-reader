import React from 'react';
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/athoms";
import Hero from "./components/templates/Hero";

function App() {
    return (
        <ThemeProvider theme={ lightTheme }>
            <Hero />
        </ThemeProvider>
    );
}

export default App;
