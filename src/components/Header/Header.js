import React from 'react';

import style from './Header.module.css'
import {UseChapter} from "../../hooks/useChapter";
const Header = () => {
    const {chapter} = UseChapter();
    return (
        <div className={style.Header}>
            {
                chapter ?
                    <h1>{chapter}</h1>
                    :
                    <h1>Rick & Morty</h1>
            }
        </div>
    );
};

export {Header};