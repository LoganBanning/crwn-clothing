import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navigation.styles.scss";
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils.js';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img
            src="https://i.fbcd.co/products/original/609238945a7a5d2de91475b56f37ad5123f42540bc0d2c7368594f77a3dba53a.jpg"
            alt="Crown-Logo"
            className="logo"
          />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {
            currentUser ? (
              <span className='nav-link' onClick={signOutUser} >SIGN OUT</span>
            ) : (
                <Link className="nav-link" to="/auth">
                  SIGN IN
                </Link>
            )
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
