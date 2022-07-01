import { format, formatDistanceToNow } from "../node_modules/date-fns";
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
            console.log(projectsArray.filter(project => project.projectName != projectName))
        } else {
            console.log('no match')
        }
        
    }

    return {projectsArray, addProject, removeProject}
}

const project = (projectName, projectTasks, projectPriority, dueDate) => {
    
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

    let tasksCompleted = []

    return {
        projectName,
        projectTasks,
        tasksCompleted,
        projectPriority,
        due,
        tasksCompleted,
        toggleCompleted,
        getCompleted,
    }
}

const saveLocal = (project) => {
    window.localStorage.setItem(project.projectName, JSON.stringify(project))
}

const retrieveLocal = () => {
    
}

const todayDate = new Date()
let defaultDate = todayDate.setDate(todayDate.getDate() + 7)

projects.push(project(
    'Default Prawbect',
    [
        ['Step 1', defaultDate, 'Notes about step 1'],
        ['Step 2', defaultDate, 'Notes about step 1'],
        ['Step 3', defaultDate, 'Notes about step 1'],
    ],
    1,
    '',
))
projects.push(project(
    'Project 2', 
    [
        ['Task 1', defaultDate, 'Notes about step 1'],
        ['Task 2', defaultDate, 'Notes about step 1'], 
        ['Task 3', defaultDate, 'Notes about step 1']
    ], 
    0, 
    ''
))
projects[1].toggleCompleted()

export {projects, project, projectList, saveLocal}