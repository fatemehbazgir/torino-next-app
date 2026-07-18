'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Slider.module.css';
import { e2p } from '../../utils/numbers';

const images = ['/images/photo1.png', '/images/photo2.png', '/images/photo3.png', '/images/photo4.png'];

export default function StackedSlider() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className={styles.sliderContainer}>
            <div style={{ position: 'relative', height: '350px' }}>
                <AnimatePresence initial={false} mode="popLayout">
                    {images.map((img, i) => {
                        let offset = i - index;
                        
                        if (offset > images.length / 2) {
                            offset -= images.length;
                        } else if (offset < -images.length / 2) {
                            offset += images.length;
                        }

                        const isCurrentImage = offset === 0;

                        let xPosition = 0;
                        let currentScale = 1;
                        let currentOpacity = 1;
                        let currentZIndex = 0;

                        if (isCurrentImage) {
                            xPosition = 0;
                            currentScale = 1;
                            currentOpacity = 1;
                            currentZIndex = 10;
                        } else {
                            if (offset > 0) {
                                xPosition = -(offset * 45); 
                                currentScale = 1 - (offset * 0.05); 
                                currentOpacity = 1 - (offset * 0.15);
                                currentZIndex = 10 - offset;
                            } else {
                                xPosition = -(Math.abs(offset) * 45); 
                                currentScale = 1 - (Math.abs(offset) * 0.05);
                                currentOpacity = 1 - (Math.abs(offset) * 0.15); 
                                currentZIndex = 10 - Math.abs(offset);
                            }
                        }

                        return (
                            <motion.img
                                key={img} 
                                src={img}
                                className={styles.imageWrapper}
                                custom={offset} 
                                initial={{
                                    x: 500,
                                    opacity: 0,
                                    scale: 0.5
                                }}
                                animate={{
                                    x: xPosition,
                                    opacity: Math.max(0.4, currentOpacity), 
                                    scale: Math.max(0.7, currentScale), 
                                    zIndex: currentZIndex
                                }}
                                exit={{
                                    x: -500,
                                    opacity: 0,
                                    scale: 0.5
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 25
                                }}
                            />
                        );
                    })}
                </AnimatePresence>
            </div>

            <div className={styles.controls}>
                <button onClick={prevSlide} className={styles.navButton}>
                    <img src="/images/arrow-right.png" alt="Previous" />
                </button>

                <span>{e2p(index + 1)}/{e2p(images.length)}</span>

                <button onClick={nextSlide} className={styles.navButton}>
                    <img src="/images/arrow-leftt.png" alt="Next" />
                </button>
            </div>
        </div>
    );
}
