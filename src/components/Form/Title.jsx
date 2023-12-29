import React from "react";



const Title = ({title, children}) => {
    return (
        <div><h2>{title}</h2>
        {children}
        </div>
    )
}

export default Title;