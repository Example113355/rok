import home_data from "../utils/data/home_page_data"
import HomeItem from "../components/home-item"

const Home = () => (
    <div className="home">
        <h1 className="package-name">ROKBOT INFINITY</h1>
        <p className="package-description">
            Rise Of Kingdom Bot - Rise of Kingdom Service - Rok bot mobile - Auto farm phone - Auto on mobile device - Auto farm gem safe 99% - Fam marauder pre KvK, Barbarian KvK - Farm Gem 24/7- Farm RSS 24/7 - Auto captcha - Support multi-instance: Bluestacks, MEmu, Mumu, LDPlayer - Free trial
        </p>

        <div className="best-seller-list">
            {
                home_data.map((item) => (
                    <HomeItem
                        key={item.id}
                        name={item.name}
                        thumbnail_img={item.thumbnail_img}
                        description={item.description}
                        link={item.link}
                    />
                ))
            }
        </div>
    </div>
)

export default Home
