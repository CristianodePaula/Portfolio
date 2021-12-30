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