import React, { useEffect, useRef, useState } from 'react'
import './testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonial = () => {

    const slider = useRef();
    const [tx, setTx] = useState(0);

    const forward = () => {
        if(tx > -50){
            setTx(tx - 25);
        }
    }

    const backward = () => {
        if(tx < 0){
            setTx(tx + 25);
        }
    }

    useEffect(() => {
        slider.current.style.transform = `translateX(${tx}%)`;
    }, [tx])

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={forward} />
            <img src={back_icon} alt="" className='back-btn' onClick={backward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Lana Roy</h3>
                                    <span>University xyz</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis ducimus illum tempora doloribus. Quas corrupti expedita aliquid impedit sint, vel odit officiis mollitia quis beatae fugit quidem, obcaecati incidunt.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Ram Kumar</h3>
                                    <span>University xyz</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis ducimus illum tempora doloribus. Quas corrupti expedita aliquid impedit sint, vel odit officiis mollitia quis beatae fugit quidem, obcaecati incidunt.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Rose Jack</h3>
                                    <span>University xyz</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis ducimus illum tempora doloribus. Quas corrupti expedita aliquid impedit sint, vel odit officiis mollitia quis beatae fugit quidem, obcaecati incidunt.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>University xyz</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis ducimus illum tempora doloribus. Quas corrupti expedita aliquid impedit sint, vel odit officiis mollitia quis beatae fugit quidem, obcaecati incidunt.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonial
