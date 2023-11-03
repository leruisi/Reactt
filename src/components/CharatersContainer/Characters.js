import React, {useEffect, useState} from 'react';
import {charatersService as characterService, charatersService} from "../../services";
import {Character} from "./Character";
import {useParams} from "react-router-dom";

const Characters = () => {
    const {ids} = useParams();
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        characterService.getByIds(ids).then(({data}) => setCharacters(data))
    }, [ids])

    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};