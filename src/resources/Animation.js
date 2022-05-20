export const navTopAnime = {
    initial: {
        y: -40,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2,
            ease: 'easeInOut'
        }
    }
}
export const navBottomAnime = {
    initial: {
        y: 40,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2,
            ease: 'easeInOut'
        }
    }
}
export const navLeftAnime = {
    initial: {
        x: -40,
        opacity: 0,
        rotate: '270deg'
    },
    animate: {
        x: 0,
        opacity: 1,
        rotate: '270deg',
        transition: {
            duration: 3,
            ease: 'easeInOut'
        }
    }
}
export const navRightAnime = {
    initial: {
        x: 40,
        opacity: 0,
        rotate: '90deg'
    },
    animate: {
        x: 0,
        opacity: 1,
        rotate: '90deg',
        transition: {
            duration: 3,
            ease: 'easeInOut'
        }
    }
}


export const sLinksLineAnime = {
    initial: { height: 0 },
    animate: {
        height: '8rem',
        transition: {
            duration: 4,
            type: 'spring',
            delay: 0.8
        }
    }
}


export const soundBarAnime = {
    initial: { y: -100, },
    animate: {
        y: 0,
        transition: {
            duration: 4,
            type: 'spring',
            delay: 0.8
        }
    }
}


export const introH1Anime = {
    initial: {
        y: -100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 3,
            ease: 'easeInOut'
        }
    }
}
export const introPAnime = {
    initial: {
        scale: 0,
        opacity: 0
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1,
            delay: 2
        }
    }
}

export const aboutTextAnime = {
    initial: {
        y: 200,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2,
            type: 'spring',
            delay: 1.5
        }
    }
}
export const aboutImgAnime = {
    initial: {
        y: -400,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 4,
            type: 'spring', delay: 1.5
        }
    }
}



export const advertsGAnimation = {
    initial: {},
    animate: {
        transition: {
            delay: 2,
            when: 'beforeChildren',
            staggerChildren: 0.5
        }
    }
}
export const advertsIAnimation = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 1.5 }
    }
}



export const skillsB1Anime = {
    initial: {
        y: 100,
        opacity: 0,
        scale: 0.1,
        rotate: -90
    },
    animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 1,
            delay: 1,
            type: 'spring',
            ease: 'easeInOut'
        }
    }
}
export const skillsB2Anime = {
    initial: {
        x: 100,
        opacity: 0,
        scale: 0.1,
        rotate: 180
    },
    animate: {
        x: 0,
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 2,
            delay: 1,
            type: 'spring',
            ease: 'easeInOut'
        }
    }
}
export const skillsB3Anime = {
    initial: {
        y: 100,
        opacity: 0,
        scale: 0.1,
        rotate: 360
    },
    animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 3,
            delay: 1,
            type: 'spring',
            ease: 'easeInOut'
        }
    }
}


export const contactInfoAnime = {
    initial: {
        x: -100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 5,
            delay: 1.5,
            type: 'spring',
            stiffness: 5000
        }
    }
}
export const contactFormAnime = {
    initial: {
        opacity: 0,
        scale: 0
    },
    animate: {
        opacity: 1,
        scale: [1, 0.5, 1, 0.5, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["10%", "50%", "10%", "50%", "10%"],
        transition: {
            duration: 1.5,
            delay: 1,
            ease: 'backInOut'
        }
    }
}


export const pageAnime = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { duration: 2 }
    }
}
