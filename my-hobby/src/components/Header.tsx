import bannerAvif from "../assets/images/banner.avif"
import bannerWebp from "../assets/images/banner.webp"
import bannerJpg from "../assets/images/banner.jpg"

function Header() {
    return (
        <header>
            <h1>Mitt fritidsintresse</h1>
            <picture>
                <source srcSet={bannerAvif} type="image/avif" />
                <source srcSet={bannerWebp} type="image/webp" />
                <img src={bannerJpg} alt="Bannerbild - Kent konsert" className="banner_img" />
            </picture>
        </header>
    )
}

export default Header;