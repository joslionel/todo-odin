import { format, formatDistanceToNow } from "../node_modules/date-fns";
import { populateProjectList } from "./leftPanelActions";
const projects = []


const projectList = () => {
    let projectsArray = projects;

    const addProject = (project) => {
        projectsArray.push(project)
    }

    const removeProject = (projectName) => {
        if (projectsArray.filter(project => project.projectName == projectName)) {
            let newArray = []
            newArray = projectsArray.filter(project => project.projectName != projectName)
            
        } else {
            
        }
        
    }

    return {projectsArray, addProject, removeProject}
}

const project = (projectName, projectTasks, projectPriority, tasksCompleted, dueDate) => {
    
    let isCompleted = 0;

    const toggleCompleted = () => {
        isCompleted = !isCompleted;
        
    }

    const getCompleted = () => {
        if (isCompleted == 0) {
            return 0;
        } else {
            return 1;
        }
    }

    const due = (dueDate) => {
        return format(dueDate, 'dd MM yyyy')
    }

    if (!tasksCompleted) {
        tasksCompleted = []
    }

    return {
        projectName,
        projectTasks,
        tasksCompleted,
        projectPriority,
        due,
        toggleCompleted,
        getCompleted,
    }
}

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

const saveLocal = (project) => {
    
    if (storageAvailable('localStorage')) {
        if (project.getCompleted() == 0) {
            project.isItFinished = 0 
        } else {project.isItFinished = 1}
        project.dateDue = ''
        window.localStorage.setItem(project.projectName, JSON.stringify(project), project.tasksCompleted, project.isItFinished, project.dateDue)
    }
    
    
}

const retrieveLocal = () => {

    // localStorage.clear();   
    
    
    
    if (localStorage.length > 0) {
        Object.entries(localStorage).forEach(entry => {
            const storedProject = JSON.parse(entry[1])
            projects.unshift(project(storedProject.projectName, storedProject.projectTasks, storedProject.projectPriority, storedProject.tasksCompleted, storedProject.dateDue))
            if (storedProject.isItFinished == 1) {
                projects[0].toggleCompleted()
            }
        });
        
    } else {
        projects.push(project(
            'Default Prawbect',
            [
                ['Step 1', defaultDate, 'Notes about step 1'],
                ['Step 2', defaultDate, 'Notes about step 1'],
                ['Step 3', defaultDate, 'Notes about step 1'],
            ],
            1,
            [],
            defaultDate,
        ))
        projects.push(project(
            'Project 2', 
            [
                ['Task 1', defaultDate, 'Notes about step 1'],
                ['Task 2', defaultDate, 'Notes about step 1'], 
                ['Task 3', defaultDate, 'Notes about step 1']
            ], 
            0,
            [], 
            defaultDate
        ))
        projects[1].toggleCompleted()

    }

}


const todayDate = new Date()
let defaultDate = todayDate.setDate(todayDate.getDate() + 7)



export {projects, project, projectList, saveLocal, retrieveLocal}