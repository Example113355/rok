import Landing from "../components/landing"
import Package from "../components/package"
import packages from "../utils/data"

const Home = () => (
    <>
        <Landing />

        <div className="package-header">
            <h2>Các gói hiện có</h2>
        </div>

        <div className="home-packages">
            <div className="package-best-seller">
                <h2 className="best-seller-header">Được mua nhiều nhất</h2>
                <div className="best-seller-list home-price">
                    {
                        packages.filter(p => p.is_popular).map((p, i) => (
                            <Package key={i} {...p} />
                        ))
                    }
                </div>
            </div>

            <div className="package-best-seller">
                <h2 className="best-seller-header">Các gói khác</h2>
                <div className="best-seller-list">
                    {
                        packages.filter(p => !p.is_popular).map((p, i) => (
                            <Package key={i} {...p} />
                        ))
                    }
                </div>
            </div>
        </div>
    </>
)

export default Home
