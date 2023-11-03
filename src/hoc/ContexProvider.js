import React, {createContext, useState} from 'react';


const Contex = createContext(null)
const ContexProvider = ({children}) => {
const state= useState(null)
    return (
        <div>
<ContexProvider value ={state}>
    {children}
</ContexProvider>
        </div>
    );
};

export {ContexProvider,Contex};