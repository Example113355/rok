const Package = ({name, price, thumbnail_img, is_reduce, reduced_price}) => (
    <div className="package-item">
        <div className="package-img">
            <img src={thumbnail_img} alt={name} />
        </div>
        <div className="package-info">
            <h3>{name}</h3>
            {
                is_reduce ? (
                    <div className="package-price reduced">
                        <span className="original-price">{price}</span>
                        <span className="reduced-price">{reduced_price}</span>
                    </div>
                ) : (
                    <div className="package-price">
                        <span className="reduced-price">{price}</span>
                    </div>
                )
            }
        </div>
    </div>
)

export default Package
