import React from 'react'
import "./home.css";
import playstore from "../../images/playstoreicon.png"
import appstore from "../../images/appstoreicon.png";
import topfoood from "../../images/topfood.png";
import review from "../../images/review.png";
import star from "../../images/star.png";
import guy from "../../images/maletop.png";
import call from "../../images/call.png";



const Home = () => {
  return (
    <div className='home-main'>
        <div className='home-top'>
            <div className='home-top-text'>
                <h1>Order Delicious </h1>
                <h1><span>Meals</span> & <span>Supermarket</span></h1>
                <h1>items</h1>
                <p>
                    Order Delicious Meals and Supermarket items from the 
                    comfort of your home and have them swiftly delivered 
                    to your doorstep
                </p>
                <div className='home-top-dld'>
                    <img
                        src={playstore}
                        width="auto"
                        height="auto"
                        alt='icon'
                    />
                    <img
                        src={appstore}
                        width="auto"
                        height="auto"
                        alt='icon'
                    />
                </div>
            </div>
            <div className='home-top-img'>
                <img
                    src={topfoood}
                    width="auto"
                    height="auto"
                    alt='icon'
                />
            </div>
        </div>
            <div className='home-top-random'>
                <div className='home-top-review'>
                    <img
                        src={review}
                        width="auto"
                        height="auto"
                        alt='icon'
                    />
                    <div className='home-happy-csm'>
                    <p>Our Happy Customers</p>
                        <div className='home-review-text'>
                            <img
                                src={star}
                                width="auto"
                                height="auto"
                                alt='icon'
                            />
                            <p>4.5 <span>(12.5k Review)</span></p>
                        </div>
                    </div>
                </div>
                <div className='home-top-agent'>
                    <img
                        src={guy}
                        width="auto"
                        height="auto"
                        alt='icon'
                    />
                    <div className='home-agent-text'>
                        <h1>Solomon Osahon</h1>
                        <p>Delivery Agent</p>
                    </div>
                    <img
                        src={call}
                        width="auto"
                        height="auto"
                        alt='icon'
                    />
                </div>
            </div>
    </div>
  )
}

export default Home