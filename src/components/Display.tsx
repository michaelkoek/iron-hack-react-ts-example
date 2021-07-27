import React, { useContext } from 'react'
import { NumberContext } from '../App';


export default function Display() {
    const mynumber = useContext(NumberContext)
    return (
        <div>
            my number is {mynumber}
        </div>
    )
}
