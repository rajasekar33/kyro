
function Button(props) {

    const { width, height, style, css, text, onClick, disabled } = props

    return (
        <button disabled={disabled} className={css} style={style} onClick={onClick}>{text}</button>
    )
}

export default Button;