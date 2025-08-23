import React from "react"


export default function JobHistory() {
    return (
        <section className="bg-white py-20" id="Job History">
            <div className="max-w-6xl mx-auto px-4">
                <h3 className="sectionTitle">Job History</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    <ol>
                        <li className="employeer">
                            Alpine School District
                            <ul>
                                <li className="">Paraprofessional: April 2025 - current</li>
                                <li className="">Spanish Duel Language Immersion Paraprofessional: October 2019 - May 2024</li>
                            </ul>
                        </li>
                        <li className="employeer">
                            ESS
                            <ul>
                                <li className="">Substitute Teacher: September 2024 - March 2025</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    )
}