//ANIMATION FOR COMPONENTS USE:-

import { delay } from "framer-motion";

export const SlideUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y:100,
        },
        visible: {
            opacity: 1,
            y:0,
            transition: {
                duration: 1,
                delay: delay,
            }
        },
    };
};

//FOR SLIDE-LEFT ANIMATION-:
export const SlideLeft = (delay) => {
    return {
        hidden: {
            opacity: 0,
            x:100,
        },
        visible: {
            opacity: 1,
            x:0,
            transition: {
                duration: 1,
                delay: delay,
            }
        },
    };
};

//FOR SLIDE-RIGHT ANIMATION:-
export const SlideRight = (delay) => {
    return {
        hidden: {
            opacity: 0,
            x:-100,
        },
        visible: {
            opacity: 1,
            x:0,
            transition: {
                duration: 1,
                delay: delay,
            }
        },
    };
};
