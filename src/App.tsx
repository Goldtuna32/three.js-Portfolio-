
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/showcase";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <ProductViewer />
            <Showcase />
        </main>
    )
}
export default App
