import React, { useEffect } from 'react';
import invisible from '../images/u/png.png';
import { useInView } from 'react-intersection-observer'
import { useSpring, animated, config } from 'react-spring'

function Project({
    image = {},
}) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-80px 0px',
    });
    const props = useSpring({ opacity: inView ? 1 : 0, delay: 250, config: config.slow })

    useEffect(() => {
        console.log('teset')
    }, [inView])

    return (
        <>
            <animated.div ref={ref} style={props}>
                <img className="absolute w-full h-full inset-0" src={invisible} alt="" aria-hidden="true" />
                <img className="absolute w-full h-full inset-0" src={image.src} alt={image.name} ref={ref} data-name={image.id} />
            </animated.div>

        </>
    );
}
export default Project