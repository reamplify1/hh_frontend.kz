'use client'
import {useState} from 'react'
export default function Test(){
    const name = 'Ilon Mask'
    const [counter, setCounter] = useState(10);
    console.log('component was rerendered')
    const plusFunc = () => {
        console.log('plus', counter);
        setCounter(counter + 1)    }
    const minusFunc = () => {
        console.log('minus', counter);
        setCounter(counter - 1)
    }

    return <div>
        <h1>My test Component {name}</h1>
        <p>My test paragraph</p>
        <a>test link</a>

        <p>Counter: {counter}</p>

        <button onClick={minusFunc}>Minus</button>
        <button onClick={plusFunc}>Plus</button>
    </div>
}