import React from "react";

export default function Education() {
    return(
        <section className="bg-white py-20" id="education">
            <div className="max-w-6xl mx-auto px-4">
                <h3 className="sectionTitle">Education History</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    <ol>
                        <li className="school">Mountainland Technical College (MTECH)
                            <ul>
                                <li className="">
                                    Software Quality Assurance Certificate January 2025 - May 2025
                                </li>
                            </ul>
                        </li>
                        <li className="school">Utah Valley University
                            <ul>
                                <li className="">
                                    Bachelor of Science: Software Engineering. January 2020 - May 2024
                                    <ul>
                                        <li>Minor in Computer Science</li>
                                    </ul>
                                </li>
                                <li className="">
                                    Certificate of Completion: Programmer. January 2020 - May 2022
                                </li>
                                <li className="">
                                    Associate of Science: University Studies. January 2020 - May 2022
                                </li>
                            </ul>
                        </li>
                        <li className="school">Lehi High School
                            <ul>
                                <li className="">
                                    High School Diploma. August 2015 - May 2017
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
        </section>

    );
}