
function Heading(props) {

    const { style, css, text, level } = props
    const Element = `h${level}`

    return (
       <Element className={css}>{text}</Element>
    )
}

export default Heading;