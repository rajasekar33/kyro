
function Paragraph(props){

    const { text, css, style } = props

    return(
        <p className={css} style={style}>{text}</p>
    )
}

export default Paragraph;