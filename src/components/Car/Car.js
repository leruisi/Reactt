import React from 'react';
import {carService} from "../../services/CarService";

const Car = ({car,setCarForUpdate, trigger}) => {
    const {id,brand,price,year}=car

    const del=async ()=>{
        await carService.deleteById(id)
        trigger()
    }
    return (
        <div>
            ID:{id}
            Brand :{brand}
            <br/>
            Price:{price}
            <br/>
            Year:{year}
            <hr/>
            <button onClick={del }>Delete</button>
            <button onClick={()=>setCarForUpdate(car)} >Update</button>
        </div>
    );
};

export {Car};