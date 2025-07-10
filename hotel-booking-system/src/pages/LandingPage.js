import React, { useState } from 'react'
import '../App.css';

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='main-container'>
      <nav>
        <h1>La Prima de Caza</h1>
        <div 
          className={`hamburger${menuOpen ? ' open' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? 'open' : ''}>
          <li><a href="#home">Book now</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a className="log-in" href="#services">Login</a></li>
        </ul>
      </nav>

      <div className='image-container'>
        <div className="hero-content">
          <h3 className="hero-text">
            Experience the charm of La Prima de Caza<br />
            where comfort, elegance, and heartfelt hospitality
            come together to create the perfect escape.
          </h3>
          <button className="hero-btn">Book Now</button>
        </div>
      </div>
      
      <div className="about-container">
          <div className="comfort">
            <h2 className='comfort-header'>Comfortability</h2>
              <p className='comfort-text'>
                At La Prima de Caza, every room is thoughtfully arranged to give you a calm, cozy atmosphere where
                you can relax, recharge, or stay productive. From soft lighting to spacious layouts, we make sure your 
                comfort comes first, whether you're staying for a night or a week.
              </p>
          </div>

           <div className="cleanliness">
            <h2 className='clean-header'>Cleanliness & Safety</h2>
              <p className='clean-text'>
                We follow strict cleaning protocols to ensure that every space is sanitized and spotless. 
                Our commitment to hygiene and safety gives you the peace of mind to fully enjoy your stay, 
                knowing that your well-being is our priority.
              </p>
          </div>

           <div className="services">
            <h2 className='service-header'>Service</h2>
              <p className='service-text'>
                Our friendly and professional staff is always ready to help  from the moment you check in to the 
                time you leave. Whether you need assistance, recommendations, or just a warm greeting, 
                we’re here to make your experience smooth and welcoming.
              </p>
          </div>
          
      </div>

      <h2 className='rooms-header'>Best rated rooms </h2>


      <div className='rooms-container'>
        <div className='room1'>
          <img className='image1'  src='https://img2.chinadaily.com.cn/images/201811/20/5bf3d584a310eff369073ea9.jpeg' alt="Room1" />
        </div>

         <div className='room2'>
          <img className='image2'  src='https://c4.wallpaperflare.com/wallpaper/844/53/319/miami-florida-hotel-room-wallpaper-preview.jpg' alt="Room2" />
        </div>

        <div className='room2'>  
          <img className='image3' src='https://www.zinus.com.sg/cdn/shop/articles/5-bedroom-design-ideas-to-transform-it-into-a-luxury-hotel-suite.jpg?v=1669103710' alt="Room3" />
        </div>  

        <div className='room4'>
          <img className='image4'  src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/108004161.webp?k=14ae4d5b99a42d189c699c5bea0e2f41409bf3675f0bf52e63d12c3a6709b3d9&o=' alt="Room4" />
        </div> 

        <div className='room5'>
          <img className='image5'  src='https://nomadicchick.com/wp-content/uploads/2024/01/65045f093c166fdddb4a94a5_x-65045f0266217.webp' alt="Room5" />
         </div>    

        <div className='room6'>
          <img className='image6'  src='https://st.hzcdn.com/simgs/pictures/bedrooms/5-star-hotel-project-sara-ho-design-llc-img~a79172fa09234dda_4-1446-1-deba2d1.jpg' alt="Room6" />
         </div>    

      </div>

      <div className='contact-info'>
        <div className='div1'>
          <h2 className='contact-header'>Contact & Location</h2>

        </div>

        <div className="v-line"></div>

        <div className='div2'>
          <h3>Hotel's Location</h3>
          

        </div>
        


      </div>

    </div>
  )
}

export default LandingPage
