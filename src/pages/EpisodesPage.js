import {Episodes} from "../components";
import {UseChapter} from "../hooks/useChapter";
import {useEffect} from "react";

const EpisodesPage = () => {
    const {setChapter} = UseChapter();

    useEffect(() => {
        setChapter(null)
    }, [setChapter])

    return (
        <div>
            <Episodes/>
        </div>
    );
};

export {EpisodesPage};