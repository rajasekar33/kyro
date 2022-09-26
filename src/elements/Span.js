
function Span(props){

    const { text, css, style } = props

    return(
        <span className={css} style={style}>{text}</span>
    )
}

export default Span;