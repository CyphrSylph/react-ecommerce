import React from 'react';
import css from './hero.module.css';
import HeroImg from '../../assets/hero.png';
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
                <motion.div initial={{bottom: "2rem"}} whileInView={{bottom: "0rem"}} transition={transition} className={css.coloredCircle}></motion.div>
                <motion.img initial={{bottom: "-2rem"}} whileInView={{bottom: "0rem"}} transition={transition} src={HeroImg} alt="header" width={600} />
                <motion.div initial={{right: "4%"}} whileInView={{right: "2%"}} transition={transition} className={css.cart2}>
                    <HiShoppingBag />
                    <div className={css.signup}>
                        <span>Best Offers</span>
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