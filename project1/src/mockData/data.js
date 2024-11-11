import dumbbell from '../assets/3d-render-dumbbells-set-realistic-detailed-close-up-view-isolated-sport-element-fitness-dumbbell-design (1).jpg';
import bench from '../assets/3d-gym-equipment.jpg';
import tradeMill from '../assets/full-shot-fit-woman-treadmill.jpg';
import rope from '../assets/pexels-cesar-galeao-1673528-3253501.jpg';
import upLift from '../assets/pexels-markofit-19549140.jpg';
import cycling from '../assets/pexels-tima-miroshnichenko-6388972.jpg';
import backWrap from '../assets/pexels-totalshape-5769128.jpg';
import { delay } from 'framer-motion';

//TEST IMAGE SET-UP:-
import testg1 from '../Test-image/testg-4.jpg';
import testg2 from '../Test-image/testg-5.jpg';
import testb1 from '../Test-image/test-1.jpg';
import testb2 from '../Test-image/test-2.jpg';

//Here's all about the navbar elements data:-
export const NavbarMenu = [

    //Here's all data as about:-
    {
        id: 1,
        title: "Home",
        link: "/"
    },
    {
        id: 2,
        title: "Trainer",
        link: "/trainer"
    },
    {
        id: 3,
        title: "Program",
        link: "/program"
    },
    {
        id: 4,
        title: "Blogs",
        link: "/blogs"
    },
    {
        id: 5,
        title: "Pricing",
        link: "/pricing"
    }
];

//OTHER CATAGORIES DATA FOR ADD AFTER THE BANNER SECTION:-(It's a property!)
export const ProductData = [
    {
        id: 1,
        catagory: "Yoga",
        image: bench,
        info: "Yoga Mats",
        price: "$40.00",
    },
    {
        id: 2,
        catagory: "Fitness",
        image: dumbbell,
        info: "Yoga Mats",
        price: "$39.29",
    },
    {
        id: 3,
        catagory: "Yoga",
        image: tradeMill,
        info: "Yoga Mats",
        price: "$39.29",
    },
    {
        id: 4,
        catagory: "Fitness",
        image: rope,
        info: "Yoga Mats",
        price: "$39.29",
    },
    {
        id: 5,
        catagory: "Muscles",
        image: upLift,
        info: "Yoga Mats",
        price: "$39.29",
    },
    {
        id: 6,
        catagory: "Muscles",
        image: cycling,
        info: "Yoga Mats",
        price: "$39.29",
    },
    {
        id: 7,
        catagory: "Yoga",
        image: backWrap,
        info: "Yoga Mats",
        price: "$39.29",
    },
];

//Here's for the testimonial section data's:-
export const TestimonialDatas = [
    {
        id: 1,
        name: "Selena Gomez",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem non, suscipit consequatur, deserunt ipsam est quasi corrupti, ut veniam et nobis quidem praesentium molestias molestiae ea eveniet! In, amet eos",
        resident: "USA",
        image: testg1,
        delay: 0.2,
    },

    {
        id: 2,
        name: "Tom Cruise",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem non, suscipit consequatur, deserunt ipsam est quasi corrupti, ut veniam et nobis quidem praesentium molestias molestiae ea eveniet! In, amet eos",
        resident: "USA",
        image: testb1,
        delay: 0.5,
    },

    {
        id: 3,
        name: "Henery Cavil",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem non, suscipit consequatur, deserunt ipsam est quasi corrupti, ut veniam et nobis quidem praesentium molestias molestiae ea eveniet! In, amet eos",
        resident: "USA",
        image: testb2,
        delay: 0.8,
    },

    {
        id: 4,
        name: "Ema Stone",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem non, suscipit consequatur, deserunt ipsam est quasi corrupti, ut veniam et nobis quidem praesentium molestias molestiae ea eveniet! In, amet eos",
        resident: "USA",
        image: testg2,
        delay: 1.1,
    },

];