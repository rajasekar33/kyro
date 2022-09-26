
function Image(props) {

    const { src, alt, width, height, style, css } = props

    return (
        <img className={css} style={style} src={src} alt={alt} width={width} height={height} />
    )
}

export default Image;