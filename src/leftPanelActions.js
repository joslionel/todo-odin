import { project, projects } from "./projects.js";



const searchBar = () => {
    const searchBar = document.getElementById('navSearchBar')

    searchBar.addEventListener('keypress', e => {
        if (e.key == 'Enter') {
            const result = projects.filter(result => result.projectName.toLowerCase().includes(e.target.value.toLowerCase()));
            
            populateProjectList(result)
        }
    })
}

const listOfProjects = () => {

    // todo: possibly bring in the main pane update function here??

    const eachproject = document.querySelectorAll('.project')

    
    eachproject.forEach(project => {
        project.addEventListener('click', function (e) {
            console.log(e.target.textContent)
        })
    });

    

    
}

const addNewProjectField = () => {
    const addNewField = document.getElementById('newProjectInput')

    addNewField.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            projects.push(project(`${e.target.value}`, [], 1, ''))
            e.target.value = '';
        }


        populateProjectList(projects)
        
    })

}

const populateProjectList = (projectList) => {
    const leftPanelProjectList = document.getElementById('projectList')

    while (leftPanelProjectList.firstChild) {
        leftPanelProjectList.removeChild(leftPanelProjectList.firstChild)
    }

    //  TO DO: 
    // put this into a project listing module/function/object as a method??
    
    projectList.forEach(project => {
        const projectToList = document.createElement('li')
        projectToList.textContent = `${project.projectName}`
        projectToList.classList.add('project')
        leftPanelProjectList.appendChild(projectToList)
    });

    listOfProjects()

}

const leftPanelActions = () => {

    searchBar()

    addNewProjectField()
    
    populateProjectList(projects)
    
}

export {leftPanelActions, listOfProjects}