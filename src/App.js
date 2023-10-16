import React from 'react';
import {Simpson} from "./components/Simpsons/Simpson";

const App = () => {
    return (
        <div>
            <Simp name={'Homer'} surname={"Simpson"} age={40}
                  photo={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>

            <Simp name={'Mardz'} surname={"Simpson"} age={38}
                  photo={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>

            <Simp name={'Barth'} surname={"Simpson"} age={14}
                  photo={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}/>

            <Simp name={'Lisa'} surname={"Simpson"} age={12}
                  photo={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}/>

            <Simp name={'Meggy'} surname={"Simpson"} age={1}
                  photo={'https://upload.wikimedia.org/wikipedia/ru/thumb/9/9d/Maggie_Simpson.png/200px-Maggie_Simpson.png'}/>


        </div>
    );
};


export {App};