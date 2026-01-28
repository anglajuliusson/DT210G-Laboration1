import bannerAvif from "../assets/images/banner.avif"
import bannerWebp from "../assets/images/banner.webp"
import bannerJpg from "../assets/images/banner.jpg"

const myStyle = {
    backgroundColor: "red",
    color: "white",
    padding: "2rem",
}
const imgStyle = {
    borderRadius: "10px",
    width: "100%",
}

function Header() {
    return (
        <header style={myStyle}>
            <h1 style={{ marginBottom: "1em", textAlign: "center" }}>Mitt fritidsintresse</h1>
            <picture>
                <source srcSet={bannerAvif} type="image/avif" />
                <source srcSet={bannerWebp} type="image/webp" />
                <img style={imgStyle} src={bannerJpg} alt="Bannerbild - Kent konsert" className="banner_img" />
            </picture>
        </header>
    )
}

export default Header;