import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import "./home.css";
import playstore from "../../images/playstoreicon.png"
import appstore from "../../images/appstoreicon.png";
import topfoood from "../../images/topfood.webp";
import review from "../../images/review.png";
import star from "../../images/star.png";
import guy from "../../images/maletop.png";
import call from "../../images/call.png";
import stars from "../../images/stars.png";
import cream from "../../images/cream.png";
import order from "../../images/order.png";
import delivery from "../../images/delivery.png";
import hat from "../../images/slidehat.webp";
import hood from "../../images/slidehood.webp";
import girl from "../../images/slidegirl.webp";
import hoodMobile from "../../images/hoodprt.png";
import girlMobile from "../../images/girlprt.png";
import hatMobile from "../../images/hatprt.png";
import rev from "../../images/sliderev.webp";
import profile3 from "../../images/profile3.png";
import profile2 from "../../images/profile2.png";
import profile1 from "../../images/profile1.png";
import iphone from "../../images/iphone.webp";
import down from "../../images/arrowdown.png";
import map from "../../images/map.webp";
import logo from "../../images/LOGO.png";
import x from "../../images/twitter.png";
import gram from "../../images/instagram.png";
import face from "../../images/facebook.png";
import linked from "../../images/linkedin.png";
import iphoneprt from "../../images/iphoneprt.webp";
import topfoodprt from "../../images/topfoodprt.webp";
import diverse from "../../images/diverse.png";
import baking1 from "../../images/baking1.webp";
import baking2 from "../../images/baking2.webp";
import bakingbar from "../../images/bakingbar.png";
import bake1 from "../../images/bake1.webp";
import bake2 from "../../images/bake2.webp";
import bakebar from "../../images/bakebar.png";
import meat1 from "../../images/meat1.webp";
import meat2 from "../../images/meat2.webp";
import meatbar from "../../images/meatbar.png";
import freshbar from "../../images/freshbar.png";
import fresh1 from "../../images/fresh1.webp";
import fresh2 from "../../images/fresh2.webp";
import cleanbar from "../../images/cleanbar.png";
import cleaning1 from "../../images/cleaning1.webp";
import cleaning2 from "../../images/cleaning2.webp";


 



const Home = () => {

    const courses1 = [
      { course: "What is Supermart?", content: ['Supermart is a technology-driven platform that connects consumers with a wide variety of restaurants and supermarkets in Ekpoma. It offers seamless ordering and fast delivery services, making it easy to enjoy your favorite meals or get your home supplies from the comfort of your home.'] }, 
      { course: "How do I place an order on Supermart?", content: ['To place an order, simply download the Supermart app on google playstore or the appstore, sign up or log in, browse through the restaurant or supermarket listings, select your preferred meals/ supermarket items, add them to your cart, and proceed to checkout. Once your order is confirmed, it will be prepared and delivered to your location.'] },
      { course: " Is there a delivery fee?", content: ['Yes, a delivery fee is applied to each order, which varies based on your location and the item you are ordering. The delivery fee will be displayed at checkout before you confirm your order.'] },
      { course: "Can I track my order?", content: ["Absolutely! Once your order is placed, you can track its progress in real-time through the Pending orders section of the app. You'll receive updates on the  status of your order, so you know exactly when to expect your meal/items."] },
      { course: "Can I schedule a delivery for later?", content: ['No, However the delivery agent carrying your order would be in constant communication with you, knowing when and where best to deliver the order to you in case of extenuating circumstances.'] },
      { course: " What if I need to change or cancel my order?", content: ["You can change or cancel your order as long as the restaurant hasn't started preparing it for food orders. To do this, go to your order history in the app and select the option to modify or cancel the order. If the restaurant has already started preparing your order, cancellations or changes may not be possible.",] },
    ];

    const [openCourse, setOpenCourse] = useState(null);

    const toggleCourse = (course) => {
      setOpenCourse(openCourse === course ? null : course);
    };

    const [isMobile1, setIsMobile1] = useState(window.innerWidth < 768);

    const handleResize1 = () => {
        setIsMobile1(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize1);
        return () => window.removeEventListener('resize', handleResize1);
    }, []);

    const reviews = [
        {
            imgSrc: profile3,
            name: "Samuel Osaigbovo",
            role: "Food Enthusiast",
            review: "“Supermart is the best. Besides the many and delicious meals offered by vendors, the service is also very good, especially in the very fast delivery. I highly recommend Supermart!”",
            rating: 4.5,
            hatSrc: isMobile1 ? hatMobile : hat,
            revSrc: rev,
            starsSrc: stars,
        },
        {
            imgSrc: profile2,
            name: "Bright Endowese",
            role: "Chef",
            review: "“Beyond the wide selection of delicious meals from various vendors, they also offer a great range of supermarket and home care items. The service is top-notch, with incredibly fast delivery.”",
            rating: 4.8,
            hatSrc: isMobile1 ? hoodMobile : hood,
            revSrc: rev,
            starsSrc: stars,
        },
        {
            imgSrc: profile1,
            name: "Eloho Emmanuella",
            role: "Entrepreneur",
            review: "“Supermart has become my go-to for all my personal care and home essentials. I never have to leave the house or worry about running out of supplies. The convenience is next to none.”",
            rating: 4.6,
            hatSrc: isMobile1 ? girlMobile : girl,
            revSrc: rev,
            starsSrc: stars,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatic slideshow change every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    const [activeIndex, setActiveIndex] = useState(0); // State for active list item

    const content = [
      {
        title: 'Baking supplies',
        titleImage: bakingbar,
        images: [ baking1, baking2 ],
        imageDimensions: { width: '2.117vw', height: '1.823vw' },
      },
      {
        title: 'Bakery',
        titleImage: bakebar,
        images: [ bake1, bake2 ],
        imageDimensions: { width: '1.563vw', height: '1.563vw' },
      },
      {
        title: 'Cleaning Essentials',
        titleImage: cleanbar,
        images: [ cleaning1, cleaning2 ],
        imageDimensions: { width: '1.563vw', height: '1.563vw' },
      },
      {
        title: 'Fresh Produce',
        titleImage: freshbar,
        images: [ fresh1, fresh2 ],
        imageDimensions: { width: '2.135vw', height: '2.135vw' },
      },
      {
        title: 'Meat & Sea food',
        titleImage: meatbar,
        images: [ meat1, meat2 ],
        imageDimensions: { width: '1.979vw', height: '2.021vw' },
      }
    ];

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);


  return (
    <div className='home-main'>
        <div className='home-header'>
            <div className='home-top'>
                <div className='home-top-text'>
                    <h1>Order Delicious {" "}
                        <span> Meals </span>& <span> Supermarket</span> {" "}
                        items
                    </h1>
                    <p>
                        Order Delicious Meals and Supermarket items from the 
                        comfort of your home and have them swiftly delivered 
                        to your doorstep
                    </p>
                    <div className='home-top-dld1'>
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
                        src={isMobile ? topfoodprt : topfoood} 
                        width="auto"
                        height="auto"
                        alt="Responsive" 
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
            <div className='home-top-cream'>
                <img
                    src={cream}
                    width="auto"
                    height="auto"
                    alt='icon'
                />
                <div className='home-cream-text'>
                    <p>Cocoa Cream</p>
                    <img
                        src={stars}
                        width="auto"
                        height="auto"
                        alt='icon'
                    />
                    <p><span>₦</span>7.49</p>
                </div>
            </div>
        </div>
        </div>
        <div className='home-offer-main'>
            <p>WHAT WE OFFER</p>
            <h1>Swift Food & Groceries <br /> Home Delivery</h1>
            <div className='offer-ctn-parent'>
                <div className='offer-ctn'>
                    <img
                        src={order}
                        width="auto"
                        height="auto"
                        alt='icon'
                    />
                    <h1>Easy To Order</h1>
                    <p>You only need a few steps to order food or supermarket items</p>
                </div>
                <div className='offer-ctn1'>
                    <img
                        src={delivery}
                        width="auto"
                        height="auto"
                        alt='icon'
                    />
                    <h1>Swift Delivery</h1>
                    <p>We offer just in time delivery. Saving you road trips & long queues</p>
                </div>
                <div className='offer-ctn'>
                    <img
                        src={diverse}
                        width="auto"
                        height="auto"
                        alt='icon'
                    />
                    <h1>Diverse Menu</h1>
                    <p>We have a variety of kitchens and supermarkets to cater for your needs</p>
                </div>
            </div>
        </div>
        <div className='home-shop-parent'>
            <p>OUR CATEGORIES</p>
            <h1>From Tasty meals to <br /> <span>Personal care</span>  products</h1>
            <div className="home-shop-container">
                <div className="shop-sidebar">
                    <ul>
                    {content.map((item, index) => (
                        <li
                            key={index}
                            className={activeIndex === index ? 'active' : ''}
                            onClick={() => setActiveIndex(index)}
                        >
                        <img 
                            src={item.titleImage} 
                            alt='icon' 
                            className="shop-title-image"
                            // style={{ width: item.imageDimensions.width, height: item.imageDimensions.height }}
                        />
                        {item.title}
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="shop-content">
                <div className='home-top-dld2'>
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
                    <h2>{content[activeIndex].description}</h2>
                    <div className="shop-images">
                        <img 
                            src={content[activeIndex].images[0]} 
                            alt="icon" 
                            loading="lazy" 
                            // style={{ width: content[activeIndex].imageDimensions.width, height: content[activeIndex].imageDimensions.height }}
                        />
                        <img 
                            src={content[activeIndex].images[1]} 
                            alt="icon" 
                            loading="lazy" 
                            // style={{ width: content[activeIndex].imageDimensions.width, height: content[activeIndex].imageDimensions.height }}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className='home-slideshow'>
            <h2>WHAT THEY SAY</h2>
            <h1>What Our Customers Say About Us</h1>
            <div className='slideshow'>
                <div className='slide-img'>
                    <img
                        src={reviews[currentIndex].hatSrc}
                        width="auto"
                        height="auto"
                        alt='icon'
                    />
                    <div className='slide-rev-img'>
                        <img
                            src={reviews[currentIndex].revSrc}
                            width="auto"
                            height="auto"
                            alt='icon'
                        />
                    </div>
                </div>
                <div className='slide-content'>
                    <h2>WHAT THEY SAY</h2>
                    <h1>What Our Customers Say About Us</h1>
                    <p>{reviews[currentIndex].review}</p>
                    <div className='slide-profile'>
                        <img
                            src={reviews[currentIndex].imgSrc}
                            width="auto"
                            height="auto"
                            alt='icon'
                        />
                        <div className='slide-name'>
                            <h1>{reviews[currentIndex].name}</h1>
                            {/* <p>{reviews[currentIndex].role}</p>/ */}
                        </div>
                    </div>
                    <div className='slide-rating'>
                        <img
                            src={reviews[currentIndex].starsSrc}
                            width="auto"
                            height="auto"
                            alt='icon'
                        />
                        <p>{reviews[currentIndex].rating}</p>
                    </div>
                    <div className="indicator">
                        {reviews.map((_, idx) => (
                            <div
                                key={idx}
                                className={currentIndex === idx ? "active" : ""}
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    background: currentIndex === idx ? 'rgba(244, 85, 112, 1)' : 'grey',
                                    borderRadius: '50%',
                                    margin: '5px',
                                    transition: 'background 0.3s ease',
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className='home-mart'>
            <div className='mart-text'>
                <h2>DOWNLOAD SUPERMART APP</h2>
                <h1>Get Started With Supermart Today!</h1>
                <p>Discover food and Supermarket items wherever and whenever, delivered quickly.</p>
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
            <div className='mart-img'>
                <img 
                    src={isMobile ? iphoneprt : iphone} 
                    width="auto"
                    height="auto"
                    alt="Responsive" 
                />
            </div>
        </div>
        <div id='frequently-asked-questions'>
            <div className='faqs'>
                <h1>Frequently Asked Questions (FAQs)</h1>
                {courses1.map((course) => (
                    <div key={course.course} className="course-week">
                        <div className="course-header" onClick={() => toggleCourse(course.course)}>
                            <span>{course.course}</span>
                            <img
                                src={down}
                                alt="Toggle"
                                className={`arrow-icon ${openCourse === course.course ? 'rotate-up' : 'rotate-down'}`}
                            />
                        </div>
                        {openCourse === course.course && (
                            <div className="course-content-detail">
                                {course.content.map((item, index) => (
                                    <div key={index} className="course-item">{item}</div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
        <div id='contact-us'>
            <div className='contact'>
                <h1>Contact Us</h1>
                <div className='contact-ctn'>
                    <div className='contact-img'>
                        <img
                            src={map}
                            width="auto"
                            height="auto"
                            alt='icon'
                        />
                    </div>
                    <div className='contact-details'>
                        <form className="contact-form">
                            <div className="row">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="number"
                                    name="number"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Message"
                                ></textarea>
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className='home-btm'>
            <div className='footer-title'>
                <img
                    src={logo}
                    width="auto"
                    height="auto"
                    alt='logo'
                />
                <h1>SuperMart</h1>
            </div>
            <h1>Swift Food and Grocery Delivery</h1>
            <div className='home-btm-dld'>
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
            <div className='footer-ctn'>
                <a href='/' className='footer-links'>
                    <img
                        src={x}
                        width="auto"
                        height="auto"
                        alt='icon'
                    />
                    <p>Twitter</p>
                </a>
                <a href='https://www.instagram.com/supermartapp/' className='footer-links'>
                    <img
                        src={gram}
                        width="auto"
                        height="auto"
                        alt='icon'
                    />
                    <p>Instagram</p>
                </a>
                <a href='/' className='footer-links'>
                    <img
                        src={face}
                        width="auto"
                        height="auto"
                        alt='icon'
                    />
                    <p>Facebook</p>
                </a>
                <a href='/' className='footer-links'>
                    <img
                        src={linked}
                        width="auto"
                        height="auto"
                        alt='icon'
                    />
                    <p>Linkedin</p>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Home