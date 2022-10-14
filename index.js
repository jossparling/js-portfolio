import React from 'react'

const Project = () => {
    const projects = [
        {
            name: 'Syntax Poetry',
            githubUrl: 'https://github.com/jossparling/mern-full-stack',
            deployedUrl: 'https://secure-stream-79386.herokuapp.com/',
            description: 'An online community for poets to share poems and start a conversation on the meaning of the poem or what the poem means to them.',
            technologies: ['React', 'GraphQL', 'MongoDB', 'MongooseODM','JavaScript','ExpressJS','HTML', 'MaterialUI', 'CSS', 'NodeJS' ],
            imgName: 'SynaxPoetry.png'
        }
    ]

    return (
        <section>
                <img alt="screenshot of project" />
                <div>
                <h2>{projects[0].name}</h2>
                <p>{projects[0].description}</p>
                <div>
                    <a href={projects[0].githubUrl} target="_blank" rel="noreferrer">GitHub</a>
                    <a href={projects[0].deployedUrl} target="_blank" rel="noreferrer">Deployed</a>
                </div>
                </div>
        </section>
    )
}

export default Project