import React from "react";

export default function Skills(){

    return(
    <section className="skills" id="skills">
        <div className="max-w-6xl mx-auto px-4">
            <h3 className="sectionTitle">Skills</h3>
            <ul className="skills-list">
                <li>I am fluent in both English and Spanish</li>
                <li>Programing languages I am familiar with or used:
                    <ol className="languages">
                        <li className="">Java</li>
                        <li className="">C#</li>
                        <li className="">Python 3.x</li>
                        <li className="">C++</li>
                        <li className="">JavaScript</li>
                        <li className="">C</li>
                        <li className="">Rust</li>
                        <li className="">LC-3 assembly language</li>
                    </ol>
                </li>
                <li >Other Tools, Libraries and Frameworks I am familiar with or used:
                    <ul className="tools">
                        <li className="">JavaFX</li>
                        <li className="">Github</li>
                        <li className="">Git</li>
                        <li className="">Unity</li>
                        <li className="">Gadot 4.x</li>
                        <li className="">React</li>
                        <li className="">Jira</li>
                        <li className="">Postman</li>
                        <li className="">JQuery</li>
                    </ul>
                </li>
            </ul>
        </div>
    </section>
    );
}

