// src/components/About/About.js

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import './About.css'; // Custom styles

const About = () => {
    const slides = [
        {
            image: '/images/bg3.jpg',
            content: 'Welcome to our application!',
        },
        {
            image: '/images/bg2.jpg',
            content: 'We are passionate about technology.',
        },
        {
            image: '/images/bg1.jpg',
            content: 'Explore the world of space and innovation.',
        },
    ];

    const [counts, setCounts] = useState({ count1: 0, count2: 0, count3: 0 });

    useEffect(() => {
        const target1 = 100; // Target number for the first counter
        const target2 = 200; // Target number for the second counter
        const target3 = 300; // Target number for the third counter

        const countUp = (target, setState, stateValue) => {
            const stepTime = Math.abs(Math.floor(2000 / target)); // Adjust the speed
            const timer = setInterval(() => {
                if (stateValue < target) {
                    setState((prev) => prev + 1);
                } else {
                    clearInterval(timer);
                }
            }, stepTime);
        };

        countUp(target1, (value) => setCounts((prev) => ({ ...prev, count1: value })), counts.count1);
        countUp(target2, (value) => setCounts((prev) => ({ ...prev, count2: value })), counts.count2);
        countUp(target3, (value) => setCounts((prev) => ({ ...prev, count3: value })), counts.count3);
    }, [counts.count1, counts.count2, counts.count3]);

    return (
        <div className="slideshow-container">
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide">
                            <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-image" />
                            <div className="overlay">
                                <div className="slide-content">
                                    <h1>{slide.content}</h1>

                                    {/* Counter Section inside the slide */}
                                    <div className="number-section">
                                        <div className="number-item">
                                            <h2>{counts.count1}</h2>
                                            <p>Projects Completed</p>
                                        </div>
                                        <div className="number-item">
                                            <h2>{counts.count2}</h2>
                                            <p>Clients Served</p>
                                        </div>
                                        <div className="number-item">
                                            <h2>{counts.count3}</h2>
                                            <p>Years in Operation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default About;
