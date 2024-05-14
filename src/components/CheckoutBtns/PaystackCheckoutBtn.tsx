import "../../Styles/CheckoutBtns/checkoutbtns.scss";
import { useSelector } from "react-redux";
import { State } from "../../redux/reducers";
import { CurrentUser } from "../../model";
import { Link } from "react-router-dom";

const PaystackCheckoutBtn = () => {
  const User: CurrentUser | null = useSelector(
    (state: State) => state.user.currentUser
  );
  return (
    <>
      {User ? (
        <Link to="/pay-with-paystack">
          <button className="paystack-btn">Checkout With Paystack</button>
        </Link>
      ) : (
        <Link to="/login">
          <button className="paystack-btn">Checkout With Paystack</button>
        </Link>
      )}
    </>
  );
};

export default PaystackCheckoutBtn;
