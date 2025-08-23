import React from "react"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from "./components/Skills.js";
import References from "./components/References";
import Projects from "./components/Projects";
import Education from "./components/Education";
import JobHistory from "./components/JobHistory";
import ImageCarousel from "./components/ImageCarousel";

export default function App() {
    return (
        <div className="rootContainer">
            {/* Header */}
            <header className="header">
                <div>
                        <ul className="NavBar">
                            <li><a href="#about" className="hover:text-blue-600">About </a></li>
                            <li><a href="#projects" className="hover:text-blue-600">Projects </a></li>
                            <li><a href="#contact" className="hover:text-blue-600">Contact </a></li>
                        </ul>
                    <h1 className="name">Devin Coombs</h1>
                    <h2 className="jobTitle">Bilingual Software Engineer, Software QA, and Game Developer</h2>
                </div>
            </header>
            <section className="about" id="about">
                <p className="bio">
                    Recent college graduate and aspiring software engineer with an emphasis in quality assurance and game development.
                    With a unique background in public education and bilingual (Spanish) instruction, is adaptable and learn quickly.
                    Skilled in problem-solving and collaboration. Eager to find opportunities to add to a skilled team and continue to
                    learn and develop his skills.
                </p>
            </section>
            <Skills/>
            <Projects/>
            <ImageCarousel/>
            <Education/>
            <JobHistory/>
            <References/>
            {/* Footer */}
            <footer className="footer">
                © {new Date().getFullYear()} Devin Coombs. All rights reserved.
            </footer>
        </div>
    );
};