import React from "react";
import styles from './form.module.css'


const Button = ({text, type, onClickSubmit}) => {
    return (
        <><button className={styles.btn} onSubmit={onClickSubmit} type={type}>{text}</button></>
    )
}



export default Button;