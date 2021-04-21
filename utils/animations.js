const easing = [0.6, -0.05, 0.01, 0.99];

export const fadeInUp = {
    inital: {
        y: 20,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing,
        },
    },
    exit: {
        y: -20,
        opacity: 0,
        transition: {
            duration: 0.6,
            ease: easing,
        },
    },
};
