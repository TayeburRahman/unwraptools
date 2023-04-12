import React from "react";
import "./DarkMode.css";
import { ReactComponent as Moon } from "./Moon.svg";
import { ReactComponent as Sun } from "./Sun.svg";

const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
    }

    const toggleTheme = (e) =>{
        if(e.target.checked) setDarkMode();
        else setLightMode();
    };
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='dark-mode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' for='dark-mode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
