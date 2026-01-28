// Inline-styling för footer
const myStyle = {
    backgroundColor: "red",
    color: "white",
    padding: "2rem",
}

function Footer() {
    return(
        <footer style={myStyle}>
            <p style={{ textAlign: "center" }}>DT210G - Laboration 1 | anju2402, Ängla Juliusson | 2026</p>
        </footer>
    )
}

export default Footer;