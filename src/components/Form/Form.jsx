import React from "react";

const Form = ({name,  onChangeInput}) => {
    return (
        <form><input onChange={onChangeInput} type="text" name={name} required /></form>
    )
}


export default Form;
