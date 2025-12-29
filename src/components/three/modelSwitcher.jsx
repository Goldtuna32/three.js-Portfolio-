import React, {useRef} from 'react'
import {PresentationControls} from "@react-three/drei";
import Macbook16 from "../models/Macbook-16.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import MacBook14Model from "../models/MacBook14Model.jsx";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 6;

const fadeMeshes = (group, opacity) => {
    if (!group) return;

    group.traverse((child) => {
        if (child.isMesh) {
            child.material.transparent = true;
            gsap.to(child.material, {opacity, duration: ANIMATION_DURATION})
        }
    })
}

const moveGroup = (group, x) => {
    if (!group) return;

    gsap.to(group.position, { x, duration: ANIMATION_DURATION});
}

const ModelSwitcher = ({scale, isMobile}) => {
    const smallMacbookRef = useRef();
    const largeMacBookRef = useRef();

    const showLargeMacBook = scale === 0.08 || scale === 0.05;

    useGSAP(() => {
        if (showLargeMacBook) {
        moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
        moveGroup(largeMacBookRef.current, 0);

        fadeMeshes(smallMacbookRef.current, 0);
        fadeMeshes(largeMacBookRef.current, 1);
        } else {
            moveGroup(smallMacbookRef.current, 0);
            moveGroup(largeMacBookRef.current, OFFSET_DISTANCE);

            fadeMeshes(smallMacbookRef.current, 1);
            fadeMeshes(largeMacBookRef.current, 0);
        }
    }, [scale])

    const controlsConfig = {
        snap : true,
        speed: 1,
        zoom: 1,
        polar: [-Math.PI, Math.PI],
        azimuth: [-Infinity, Infinity],
        config: {mass: 1, tension: 0, friction: 10},
    }

    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={largeMacBookRef}>
                    <Macbook16 scale={isMobile ? 0.05 : 0.08} />
                </group>
            </PresentationControls>

            <PresentationControls {...controlsConfig}>
                <group ref={smallMacbookRef}>
                    <MacBook14Model scale={isMobile ? 0.03 : 0.06} />
                </group>
            </PresentationControls>
        </>
    )
}
export default ModelSwitcher
