import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img
                className='home__image'
                src='https://m.media-amazon.com/images/I/617pSVtbf3L._SX3000_.jpg'
                alt=''
            />  

            <div className='home__row'>
                <Product
                    title="Nike Jordan Max Aura 3"
                    price={9995}
                    image="https://m.media-amazon.com/images/I/31X7ykmKZcL._AC_UL480_FMwebp_QL65_.jpg"
                    rating={5}
                />
                
                <Product
                    title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder 5 lbs, 2.27 kg (Double Rich Chocolate), for Muscle Support & Recovery, Vegetarian - Primary Source Whey Isolate"
                    price={6544}
                    image='https://m.media-amazon.com/images/I/616cI2pfTOL._AC_UL480_FMwebp_QL65_.jpg'
                    rating={4}
                />
            </div>

            <div className='home__row'>
                <Product
                    title="Bose Noise Cancellation Bluetooth Wireless On Ear Headphones with Mic (Black)"
                    price={34500}
                    image="https://m.media-amazon.com/images/I/61UzY7vPUIL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={5}
                />
                <Product
                    title="G-Shock Digital Black Dial Men's Watch-GMW-B5000GD-9DR (G902)"
                    price={39597}
                    image="https://m.media-amazon.com/images/I/61lgZKx1D9L._AC_UL480_FMwebp_QL65_.jpg"
                    rating={5}
                />
                <Product
                    title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 512GB SSD) - Space Grey"
                    price={131990}
                    image='https://i0.wp.com/maplestore.in/wp-content/uploads/2020/09/shopping.png?fit=2560%2C2560&ssl=1'
                    rating={5}
                />
            </div>

            <div className='home__row'>
                <Product
                    title="Sony Bravia 195 cm (77 inches) XR series 4K Ultra HD Smart OLED Google TV XR-77A80J (Black) (2021 Model) | with Alexa Compatibility"
                    price={522490}
                    image="https://m.media-amazon.com/images/I/71yH8vMwlDL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={5}
                />  
            </div>

        </div>
    </div>
  )
}

export default Home