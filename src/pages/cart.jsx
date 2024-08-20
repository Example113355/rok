import Breadcrumb from "../components/Breadcrumb"
import CartTable from "../components/cart-table";
import React, {useState} from 'react'
import CheckoutItem from "../components/checkout-item";

const Cart = () => {
    const [total, setTotal] = useState(0);

    return (
        <div className="cart">
            <div className="rok-header">
                <Breadcrumb />
                <h1 className="rok-heading">
                    Giỏ hàng
                </h1>
            </div>

            <div className="cart-contain">
                <div className="cart-packages">
                    <h2 className="cart-header">Thông tin giỏ hàng</h2>
                    <CartTable setTotal={setTotal} />
                </div>

                <div className="cart-checkout">
                    <h2 className="cart-header">
                        Thanh toán
                    </h2>
                    <div className="checkout-list">
                        <CheckoutItem type='momo' total={total} />
                        <CheckoutItem type='paypal' total={total} />
                        <CheckoutItem type='bank' total={total} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
