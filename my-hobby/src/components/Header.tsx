// Importera bilder från assets-mappen
import bannerAvif from "../assets/images/banner.avif"
import bannerWebp from "../assets/images/banner.webp"
import bannerJpg from "../assets/images/banner.jpg"

// Typdefinition för props till Header-komponenten
// Titeln ska skickas från App-komponenten
type HeaderProps = {
    title: string
  }

// Inline-styling för header (komponentspecifik CSS)
const myStyle = {
    backgroundColor: "red",
    color: "white",
    padding: "2rem",
}

// Inline-styling för bannerbilden
const imgStyle = {
    borderRadius: "10px",
    width: "100%",
}

// Header-komponenten tar emot title som prop
function Header({title}: HeaderProps) {
    return (
        <header style={myStyle}>
            <h1 style={{ marginBottom: "1em", textAlign: "center" }}>{title}</h1>
            <picture>
                <source srcSet={bannerAvif} type="image/avif" />
                <source srcSet={bannerWebp} type="image/webp" />
                <img style={imgStyle} src={bannerJpg} alt="Bannerbild - Kent konsert" className="banner_img" />
            </picture>
        </header>
    )
}

export default Header;