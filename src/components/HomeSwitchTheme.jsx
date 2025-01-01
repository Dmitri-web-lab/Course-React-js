import React from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';

const HomeSwitchTheme = () => {
    const theme = useSelector(state => state);
    const dispatch = useDispatch();

    const switches = () => {
        if  (theme === "white") {
            dispatch({ type: 'DARK' });
        } else {
            dispatch({ type: 'LIGHT' });
        }
    };
    document.querySelector('body').style.background = `${theme}`;

    return (
        <div className="marginElement">
            <Button variant="contained" onClick={switches}>Переключить на {theme === 'white' ? 'темную' : 'светлую'} тему</Button>
            {/*  */}
        </div>
    );
};

export default HomeSwitchTheme;