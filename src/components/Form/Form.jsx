import React from "react";
import Button from "./Button";
import styles from './form.module.css'

const Form = ({name,  onChangeInput,   onClickSubmit}) => {
    return (
        <form className={styles.form} onSubmit={onClickSubmit}><input className={styles.input} onChange={onChangeInput} type="text" name={name} required placeholder="Please, enter data of contact"/>
            <Button type="submit" text="Add contact"  />
        </form>
    )
}


export default Form;
