import { useState } from "react";
import Image from "./Image";

function TextField(props) {

    const { elementConfig, label, changed, cssLabel, value, id } = props

    const [input, setInput] = useState(value);

    return (
        <div className="textFieldWrapper">
            <label css={cssLabel}>{label}</label>
            {elementConfig?.icon && <div className="icon"><Image src={elementConfig?.icon} alt="" width="20px"/></div>}
            <div className="inputField"><input id={id} defaultValue={value} onInput={e => setInput(e.target.value)}/></div>
        </div>
    )
}

export default TextField;