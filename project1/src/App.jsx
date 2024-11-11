//It's a virtual data center:-
import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero.jsx';
import Bgimages from './assets/ambitious-studio-rick-barrett-0tQLfwcr5-M-unsplash.jpg';
import Equipment from './Components/Equipments/Equipment';
import Banner from './Components/BannerSec/Banner.jsx';
import img1 from './assets/posing-fitness-sexy-woman-isolated-white-background.png';
import img2 from './assets/beautiful-woman-showing-her-bicep.png';
import TabComp from './Components/Tab/TabComp.jsx';
import img3 from './assets/adult-athlete-aerobics-athletic-active.png';
import Testimonial from './Components/Testimonial Sec/Testimonial.jsx';
import LastBanner from './Components/BannerSec/LastBanner.jsx';
import Footer from './Components/FooterSec/Footer.jsx';

//For backgroundImage management:-
const bgStyle = {
  backgroundImage: `url(${Bgimages})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
}

//Prop. for the banner container image with title & desc. section:-
const BannerData1 = {
  image: img1,
  title: "The Importants To Take Care Of Yourself",
  subtitle: "Taking care of yourself is essential for a balanced life. It boosts mental and physical health, enhances resilience, and helps you better manage stress, ultimately allowing you to thrive and grow.",
  link: "#",
}

//Second banner image, title, sub-title & desc. also:-
const BannerData2 = {
  image: img2,
  title: "I'm not going to lie, I was intimidated by the gym",
  subtitle: "I’m not going to lie, I was intimidated by the gym at first. The machines looked complex, everyone seemed so experienced, and I felt out of place. But over time, I realized everyone started somewhere.",
  link: "#",
}

//Third banner image :-
const BannerData3 = {
  image: img3,
  title: "I've never felt better!",
  subtitle: "I've never felt better! Embracing healthier habits and a positive mindset has transformed my energy and outlook. I feel stronger, happier, and more confident, ready to tackle life with enthusiasm.",
  link: "#",
}

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
      <Equipment />
      <Banner {...BannerData1} />
      <Banner {...BannerData2} />
      <TabComp />
      <Banner {...BannerData3} />
      <Testimonial />
      <LastBanner />
      <Footer/>
    </div>
  )
}

export default App