import React from "react"


export default function Projects(){
    return(
        <section className="projects" id="projects">
            <div className="max-w-6xl mx-auto px-4">
                <h3 className="sectionTitle">Projects</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    <ol className="md:grid-cols-3 gap-8">
                        <li> Home Depot automation in WebdriverIO
                            <ul className="projectOne">
                                <li>
                                    I choose and fully automated four components on the Home Depot website.
                                    The four I choose were:
                                    <ul>
                                        <li>The "our brands" on the home page</li>
                                        <li>The different applications drop down</li>
                                        <li>The Social Media ribbon</li>
                                        <li>The microwave side ribbon menu for filtering brands</li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="https://github.com/DevC213/capstone">Repository</a>
                                </li>


                            </ul>
                        </li>
                        <li>Top down Adventure Game & Game Engine (Ongoing)
                            <ul className="projectOne">
                                <li>
                                    Adventure Game made in Java, without any outside programs. I used the JavaFX framework for the GUI.
                                    As I expanded the game it grow from just a simple game, to a basic game engine in which the game ran due to the need of tools that JavaFX did not have
                                    The engine uses JSON to store its information.
                                </li>
                                <li>
                                    Game & Engine were built entirely by me.
                                </li>
                                <li>
                                    <a href="https://github.com/DevC213/IslandAdventure">Repository</a>
                                </li>
                            </ul>
                        </li>
                        <li>3D puzzle horror game
                            <ul className="projectOne">
                                <li>
                                    3D game made in Unity, were you are trying to escape the mall where you are trapped.
                                </li>
                                <li>
                                    Parts I worked on: Levels, graphics and scripts.
                                </li>
                            </ul>
                        </li>
                        <li>Point and click
                            <ul className="projectOne">
                                <li>
                                    Point and click game with inspiration from the game Reign.
                                    In the game instead of running a kingdom, you are running your father's business.
                                    The game was made in Unity.
                                </li>
                                <li>
                                    Parts I worked on: GUI front end and design.
                                </li>
                            </ul>
                        </li>
                        <li>Ice cream parlor website
                            <ul className="projectOne">
                                <li>
                                    Website for an Imaginary online ice cream parlor with shipping services.
                                </li>
                                <li>
                                    <a href="https://hopeful-ritchie-af55e9.netlify.app/">Website</a>
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}