import './cart-icon.styles.scss';
import { BsBag } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartIcon = () => {

  const dispatch = useDispatch();

  const cartCount = dispatch(useSelector(selectCartCount));
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <BsBag className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon;