import { useSelector } from "react-redux";
import { AcademicCap, CartIcon } from "../icons"

const Navbar = () => {
    const { amount } = useSelector(state => state.cart)
    // console.log(amount);

    return <nav>
        <div className="nav-center">
            <h3>Phone Store</h3>
            <div className="nav-container">
                <AcademicCap />
                <CartIcon />
                <div className="amount-container">
                    <p className="total-amount">{amount}</p>
                </div>

            </div>
        </div>
    </nav>;
};

export default Navbar;
