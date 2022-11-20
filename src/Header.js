import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import CartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnOutlinedIcon  from '@material-ui/icons/LocationOnOutlined';
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{cart, user}, dispatch] =  useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

  return (
    <div className='header'>
    <Link to='/'>
      <img
        className='header__logo'
        src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
     />
    </Link>
    <div className='header_option'>
        <LocationOnOutlinedIcon/>
    </div>
    <div className='header_option'>
            <span className='header_optionLineOne'>Hello</span>
            <span className='header_optionLineTwo'>Select Your Address</span>
    </div>
        <div className='header__search'>
            <select>
                <option>All</option>
            </select>
            <input type='text' className='header__searchInput' placeholder='Search for products'/>
            <SearchIcon className='header__searchIcon'/>    
        </div>  

        <div className='header__nav'>
            <Link to={!user && '/login'}> 
            <div onClick={handleAuthentication} className='header_option'>
                <span className='header_optionLineOne'>Hello {user?.email}</span>
                <span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
            </Link>
            
            <div className='header_option'>
                <span className='header_optionLineOne'>Returns</span>
                <span className='header_optionLineTwo'>& Orders</span>
            </div>

            <div className='header_option'>
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>
            </div>
        <Link to="/checkout">
            <div className='header__optionBasket'>
                <CartIcon />
                <span className='header_optionLineTwo header_basketCount'>{cart?.length}</span>
            </div>
        </Link>
        </div>
    </div>
  );
}

export default Header;