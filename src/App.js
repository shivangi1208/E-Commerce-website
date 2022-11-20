
import './App.css';
import  Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Order from './Order';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51KWZwbSJijpPHBaHfqeFlil8eMIPkDiEo1S32vyewaKv55GaB2y9I6gqPcyqIIhUEqaR3kycyIh2HPvVUPNgUnV500Ur6eq765");

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log('authUser', authUser);

      if(authUser) {
        // the user just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user just logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  } , []);

  return (
    
    //BEM Convention
    <Router>
      <div className="App">
        <Routes>
          <Route path="/orders" element={[<Header />,<Order />]} />
          <Route path="/" element={[<Header />,<Home />]} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={[<Header />,<Elements stripe={promise}><Payment /></Elements>]} />
          <Route path="/checkout" element={[<Header />, <Checkout/>]} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
