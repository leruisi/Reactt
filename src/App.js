import React from 'react';
import {Simps} from "./components/Simpsons/Simps";

const App = () => {
    const fiveSimp = [
        {id:1, name:'Gomer' , age:40, img: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png' },
        {id:2, name:'Mer' , age:34, img:'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'},
        {id:3, name:'Barth' , age:14, img:'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'},
        {id:4, name:'Lisa' , age:12, img:'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'},
        {id:5, name:'Meggy ' , age:1, img:'https://upload.wikimedia.org/wikipedia/ru/thumb/9/9d/Maggie_Simpson.png/200px-Maggie_Simpson.png'}
    ]




    return (
        <div>
            {fiveSimp.map(user=><Simps key={user.id} user={user}/>)}
        </div>
    );
};


export {App};