import React from 'react';
import { useNavigate} from "react-router-dom";
import style from './Episode.module.css'
import {UseChapter} from "../../hooks/useChapter";

const Episode = ({episode}) => {
   const {id,name,episode: episodeName, characters}=episode

    const navigate= useNavigate()
    const {setChapter} =UseChapter()
    const toCharacters =()=> {
        const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',');
        setChapter(characters)
        navigate(`/characters/${ids}`)
    }


    return (
        <div className={style.Episode} onClick={toCharacters}>
            <div> ID {id}</div>
            <div> NAME {name}</div>
            <div>{episodeName}</div>


        </div>
    );
};

export {Episode};