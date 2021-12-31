/* COMPONENTS */

/* Navbar */

export const navTopAnime = {
    initial: { y: -40, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1, ease: 'easeInOut' }}
}
export const navBottomAnime = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1, ease: 'easeInOut' }} 
}
export const navLeftAnime = {
    initial: { x: -40, opacity: 0, rotate: '270deg' },
    animate: { x: 0, opacity: 1, rotate: '270deg', transition: { duration: 2.5, ease: 'easeInOut' }} 
}
export const navRightAnime = {
    initial: { x: 40, opacity: 0, rotate: '90deg' },
    animate: { x: 0, opacity: 1, rotate: '90deg', transition: { duration: 2.5, ease: 'easeInOut' }} 
}

// SocialLinks 

export const sLinksLineAnime = {
    initial: { height: 0 },
    animate: { height: '8rem', transition: {  duration: 4, type:'spring', delay: 0.8 }}
}

// SoundBar

export const soundBarAnime = {
    initial: { y: -100, },
    animate: { y: 0, transition: {  duration: 4, type:'spring', delay:0.8 }}
}

/* PAGES */

/* Intro */

export const introH1Anime = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 3, ease: 'easeInOut' }}
}
export const introPAnime = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 1, delay: 2 }}
}

/* About */

export const aboutTextAnime = {
    initial: { y: 200, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: {  duration: 4, type:'spring', delay:0.4 }}
}
export const aboutImgAnime = {
    initial: { y: -400, opacity: 0},
    animate: { y: 0, opacity: 1, transition: {  duration: 4, type:'spring', delay:0.1 }}
}

/* Portfolio */

export const portImg1Anime = {
    initial: { y: -30, opacity: 0, scale: 0.1 },
    animate: { y: 0, opacity: 1, scale: 1, transition: {duration: 1, delay: 0.3  }}
}
export const portImg2Anime = {
    initial: { y: -30, opacity: 0, scale: 0.1 },
    animate: { y: 0, opacity: 1, scale: 1, transition: { duration: 1, delay: 0.6 }}
}
export const portImg3Anime = {
    initial: { y: -30, opacity: 0, scale: 0.1 },
    animate: { y: 0, opacity: 1, scale: 1, transition:{ duration: 1, delay: 0.9  }}
}

/* Skills */

export const skillsB1Anime = {
    initial: { y: 100 , opacity: 0, scale: 0.1, rotate: -90 },
    animate: { y: 0, opacity: 1, scale: 1, rotate: 0, transition: {duration: 2, delay: 0.5, type:'spring', ease: 'easeInOut'}}
}
export const skillsB2Anime = {
    initial: { x: 100 , opacity: 0, scale: 0.1, rotate: 180 },
    animate: { x: 0, opacity: 1, scale: 1, rotate: 0, transition: {duration: 3, delay: 0.8, type:'spring', ease: 'easeInOut'}}
}
export const skillsB3Anime = {
    initial: { y: 100 , opacity: 0, scale: 0.1, rotate: 360 },
    animate: { y: 0, opacity: 1, scale: 1, rotate: 0, transition: {duration: 2, delay: 1.1, type:'spring', ease: 'easeInOut'}}
}

/* Contact */

export const contactAnime = {
    initial: { opacity: 0, scale: 0 },
    animate:{
        opacity: 1,
        scale: [1, 0.5, 1, 0.5, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["10%", "50%", "10%", "50%", "10%"], 
        transition: { duration: 1.5, ease: 'backInOut' }}
}
export const contactTAnime = {
    initial: { x: -100, opacity: 0, },
    animate: { x: 0, opacity: 1, transition: {  duration: 4, type:'spring', stiffness: 1000, delay:0.4 }}
}

