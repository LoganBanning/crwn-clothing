import './cart-icon.styles.scss';
import { BsBag } from 'react-icons/bs';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div class='cart-icon-container' onClick={toggleIsCartOpen}>
      <BsBag className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon;