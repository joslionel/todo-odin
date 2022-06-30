import { project, projects } from "./projects.js";
import { updateMainPane } from "./mainPanelActions";
import { showModal } from "./renderPage";


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

    const eachproject = document.querySelectorAll('.project')

    
    eachproject.forEach(project => {
        project.addEventListener('click', function (e) {
            
            const focusProject = projects.filter(project => project.projectName == e.target.textContent);
            
            updateMainPane(focusProject[0])
        })
    });

    

    
}

const addNewProjectField = () => {
    const addNewField = document.getElementById('newProjectInput')

    addNewField.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            projects.push(project(`${e.target.value}`, [['Step 1', new Date(), 'A few notes on how to complete this subtask']], 1, '', 0))
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

const deleteProject =  () => {
    const deleteProjectButton = document.getElementById('deleteProjectButton');
    deleteProjectButton.addEventListener('click', function () {
        showModal('removeProject')
    })
}

const leftPanelActions = () => {

    searchBar()

    addNewProjectField()
    
    populateProjectList(projects)

    deleteProject()
    
}

export {leftPanelActions, listOfProjects, populateProjectList}