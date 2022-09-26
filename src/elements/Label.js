
function Label(props){

    const { text, css, style } = props

    return(
        <label className={css} style={style}>{text}</label>
    )
}

export default Label;