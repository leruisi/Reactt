import React, {useContext} from 'react';
import {Contex} from "../hoc/ContexProvider";

const UseChapter = () => {
 const [chapter, setChapter]  =useContext(Contex)
    return {
     chapter,
      setChapter
    }
};

export {UseChapter};






