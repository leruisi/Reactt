import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/CarService";
import {carValidator} from "../../validators/carValidator";
import {joiResolver} from "@hookform/resolvers/joi";



const CarForm = ({trigger,carForUpdate,setCarForUpdate}) => {



    const {handleSubmit,reset,register,formState:{errors,isValid},setValue}=useForm({
        mode:"all",
        resolver:joiResolver(carValidator)})

    useEffect(() => { //будем проверять есть ли карфорап
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue])

    const save= async(car) =>{  // тут ми отримаємо наши кари які можем зберегти


        // const {data} = await carService.create(car); //  у відповідь я отримаю свою машинку з айди
         await carService.create(car)  //по скольку база данних общая мы будем делать заново запит на кары для акутальной инфы чтоб никто не удалил нашу машинку

        // asin away -  мы специально ждем пока она выполниться чтобы вызвалась функции


        trigger()
        reset()
    }

    // нужна функция которая будет обновлять НАШ АПДЕЙТ
    const update= async (car)=>{
        await carService.updateById(carForUpdate.id,car)
        trigger()
        reset()
        setCarForUpdate(null)
    }

    return (


        // handleSubmit - ві=итягає наші инпути
        <>
            <form onSubmit={handleSubmit(carForUpdate?update:save)}>
                <input type={"text"} placeholder={"brand"} {...register("brand")}/>
                <input type={"number"} placeholder={"price"} {...register("price", {valueAsNumber: true})}/>
                <input type={"number"} placeholder={"year"} {...register("year", {valueAsNumber: true})}/>
                <button disabled={!isValid}>{carForUpdate?"update":"save"}</button>

            </form>

            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}

        </>


    );
};

export {CarForm};