'use client';
import styles from "../Home/styles.module.scss";
import fundo from '../../assets/image.png';
import fundo2 from "../../assets/fundo2.png";
import clouds from "../../assets/clouds back.png";
import arrow from "../../assets/arrow.webp";
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from "react";

export default function Home(){
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
               
                <div className={styles.el}>
                    <motion.div style={{ scale: scale4 }} className={styles.imageContainer}>
                        <div className={styles.imageWrapper}>
                            <img src={fundo2} alt="borda" className={styles.fundo} />
                            <img src={clouds} alt="imagem principal" className={styles.image} />
                        </div>
                        <motion.h1 style={{ opacity: titleOpacity }} className={styles.title}>
                            CÓDIGO LIMPO, PROPÓSITO CLARO - IMPACTO REAL
                        </motion.h1>
                         <div className={styles.arrow}>
                    <motion.img
                        src={arrow}
                        alt=""
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                    <span className={styles.scrollText}>Role para baixo</span>
                </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}