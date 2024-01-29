const serverHost = 'http://localhost:3000'

async function main(){
    setProjects((await getProjects()).projects);
}

async function getProjects(){
    return await (await fetch(`${serverHost}/projects`)).json();
}

function setProjects(projects){
    const cardContainer = 'card-container'
    const cardText = '';
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    for(const project of projects){
        const projectContainer = document.createElement('a');
        projectContainer.className = 'card';
        projectContainer.href = project.link;
        projectContainer.style.backgroundImage =`url("${project.image}")`.toString();

        const projectHeader = document.createElement('h3');
        projectHeader.innerHTML = project.name;
        projectHeader.className += ' card-header__custom';

        const projectDescription = document.createElement('h4');
        projectDescription.innerHTML = project.description;
        projectDescription.className += ' card-text__custom';

        projectContainer.appendChild(projectHeader);
        projectContainer.appendChild(projectDescription);
        container.appendChild(projectContainer);
    }
}

main();