import { useState } from "react"
import styles from './Input.module.css'

export default function Input({placeholder, type = "text"}) {
    const [value, setValue] = useState('')

    function handleChange(event) {
        setValue(event.target.value)
    }

    return (
        <input type={type} placeholder={placeholder} value={value} onChange={handleChange} className={styles.input}/>
    )
}