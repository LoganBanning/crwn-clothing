import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';

// import CartIcon from '../../components/cart-icon/cart-icon.component';
import { BsBag } from 'react-icons/bs';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../store/user/user.selector';

import { signOutUser } from '../../utils/firebase/firebase.utils.js';
import { RiVipCrownLine } from 'react-icons/ri';

import { NavigationContainer, NavLink, NavLinks, LogoContainer } from "./navigation.styles";

import './navigation.styles.scss';

import { selectIsCartOpen } from '../../store/cart/cart.selector';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <RiVipCrownLine
            alt="Crown-Logo"
            className="logo"
          />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutUser} >SIGN OUT</NavLink>
            ) : (
                <NavLink to="/auth">
                  SIGN IN
                </NavLink>
            )
          }
          <BsBag />
        </NavLinks>
        {isCartOpen && <CartDropdown /> }
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
