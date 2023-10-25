import React, {useEffect, useState} from 'react';
import {CarForm} from "./CarFom/CarForm";
import {Cars} from "./Cars/Cars";
import {carService} from "../services/CarService";

const CarsContainer = () => {

    const [cars, setCars] = useState([]);
    const [flag,setFlag]=useState(null); // для того чтобы у нас заново запустилась инфа после удаление и обновление машин(null- по умолчанию)
    // для апдейта
    const [carForUpdate,setCarForUpdate]= useState(null)


    const trigger=()=>{
        setFlag(prev=>!prev) // викликаємо сетфлаг, берем его попередне значення и змінемо его на протилежне(нам главное чтоб оно менялось)
        // если наши кари меняются то он заново запускает колбек функцию
    }


    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data)) // вот єту кол бек функцию для получение свежих данніх

    }, [flag]); //по скольку значение меняется , теперь мі можем за ним следить





    return (
        <div>
            <CarForm  trigger={trigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {CarsContainer};