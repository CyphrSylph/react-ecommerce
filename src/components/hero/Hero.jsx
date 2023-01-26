import React from 'react';
import css from './hero.module.css';
import HeroImg from '../../assets/hero.png';
import HeroSwirl from '../../assets/heroSwirl.png';
import { HiShoppingBag, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Hero = () => {
    const transition = {duration: 3, type: "spring"}

    return (
        <div className={css.container}>
            {/* LEFT */}
            <div className={css.h_sides}>
                <span className={css.text1}>skin protection cream</span>
                <div className={css.text2}>
                    <span>Trendy Collection</span>
                    <span>{" "}Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                </div>
            </div>
            {/* MIDDLE */}
            <div className={css.wrapper}>
                <motion.div initial={{top: "-8rem"}} whileInView={{top: "-5rem"}} transition={transition} className={css.coloredCircle}></motion.div>
                <motion.img initial={{top: "2rem"}} whileInView={{top: "-1rem"}} transition={transition} src={HeroImg} className={css.heroImg} alt="header" width={600} />
                <motion.img initial={{opacity:0, scale:1.5}} animate={{opacity:1, scale:1}} transition={{duration:3, ease:[0, 0.71, 0.2, 1.01]}} src={HeroSwirl} className={css.heroSwirlImg} alt="headerSwirl" width={1000} />
                <motion.div initial={{right: "-7%"}} whileInView={{right: "10%"}} transition={transition} className={css.cart2}>
                    <HiShoppingBag />
                    <div className={css.signup}>
                        <span>Best Deals</span>
                        <div>
                            <HiOutlineArrowNarrowRight />
                        </div>
                    </div>
                </motion.div>
            </div>
            {/* RIGHT */}
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.3m</span>
                    <span>Monthly Visitors</span>
                </div>
                <div className={css.customers}>
                    <span>300k</span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
    );
}

export default Hero;