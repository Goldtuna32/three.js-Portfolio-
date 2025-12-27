import React, {useEffect, useRef} from 'react'

const Hero = () => {
    const videRef = useRef();

    useEffect(() => {
        if(videRef.current) videRef.current.playbackRate = 2;
    }, []);

    return (
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="MacBook Pro Title"/>
            </div>

            <video ref={videRef} src="/videos/hero.mp4" autoPlay muted playsInline />
            <button>Buy</button>
            <p1>From $1599 or $133.25/mo. for 12 months</p1>
        </section>
    )
}
export default Hero
