import React from 'react';

const Car = ({car,setCarForUpdate}) => {
    const {id,brand,price,year}=car
    return (
        <div>
            ID:{id}
            Brand :{brand}
            <br/>
            Price:{price}
            <br/>
            Year:{year}
            <hr/>
            <button >Delete</button>
            <button onClick={()=>setCarForUpdate(car)} >Update</button>
        </div>
    );
};

export {Car};