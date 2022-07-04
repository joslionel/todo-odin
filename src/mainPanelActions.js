import { projectList, saveLocal } from "./projects.js";
import { showModal } from "./renderPage";
import { format, formatDistance } from "../node_modules/date-fns";
import { compareAsc } from "date-fns";
import { populateProjectList } from "./leftPanelActions.js";

const projects = projectList().projectsArray


const updateMainPane = (content) => {

    console.log(projects)
    
    const projectNameHeading = document.getElementById('projectName')
    const tasksRemaining = document.getElementById('tasksRemaining')
    const mainPane = document.querySelector('.mainTaskList')
    const heading = document.getElementById('projectName');
    const headingBox = document.querySelector('.mainPanel');
    

    mainPane.textContent = ''

    if (content == 'default') {
        heading.textContent = 'Start a new project or open an existing project to add tasks';
        
        tasksRemaining.classList.add('displayNone')
        headingBox.firstChild.classList.remove('spaceBetween');
        headingBox.firstChild.classList.add('center')

        headingBox.childNodes[2].classList.remove('spaceBetween');
        headingBox.childNodes[2].classList.add('displayNone')

    } else {
        tasksRemaining.classList.remove('displayNone');
        headingBox.firstChild.classList.add('spaceBetween');
        headingBox.firstChild.classList.remove('center')

        headingBox.childNodes[2].classList.add('spaceBetween');
        headingBox.childNodes[2].classList.remove('displayNone')

        const project = projects.filter(project => project.projectName == content.projectName)[0]
        let isTaskComplete = ''
        if (project.getCompleted() == 1) {
            isTaskComplete = 'Task Complete'
        } else {
            isTaskComplete = 'Incomplete'
        }

        let noOfTasks = project.projectTasks.length
        let tasksCompleted = project.tasksCompleted.length
        tasksRemaining.textContent = `${tasksCompleted} of ${noOfTasks} tasks completed`;


        const mainPaneTitle = document.createElement('h3');
        const mainPaneSubTasks = document.createElement('div');
        const mainPaneComplete = document.createElement('h3');
        mainPaneComplete.setAttribute('id', 'completionStatus')
        const mainPaneDueDate = document.createElement('p');

        projectNameHeading.textContent = content.projectName;

        mainPaneTitle.textContent = content.projectName + ' - Subtasks';
        
        mainPaneComplete.textContent = isTaskComplete;
        mainPaneDueDate.textContent = content.dueDate;

        if (project.projectTasks) {
            project.projectTasks.forEach(task => {
                const isTaskOverDue = () => {
                    if (compareAsc(new Date(), new Date(task[1])) == 1) {
                        return true
                    } else {
                        return false
                    }
                }

                const stepContainer = document.createElement('div')
                
                const stepHeadContainer = document.createElement('div');
                stepHeadContainer.classList.add('spaceBetween')
                
                const stepTitle = document.createElement('h3');
                stepTitle.textContent = task[0];
                
                const stepDueDate = document.createElement('p');
                
                if (isTaskOverDue()) {
                    stepDueDate.textContent = `Task overdue by ${formatDistance(new Date(), new Date(task[1]))}`
                } else {
                    stepDueDate.textContent = `Task due in ${formatDistance(new Date(), new Date(task[1]))} on ${format(new Date(task[1]), 'EEE dd MMMM')}`;
                }
                
                
                stepHeadContainer.append(stepTitle, stepDueDate)

                const stepNotes = document.createElement('p');
                stepNotes.textContent = task[2];

                stepContainer.append(stepHeadContainer, stepNotes)

                stepContainer.setAttribute('data-index', `${project.projectTasks.indexOf(task, 0)}`)
                stepNotes.setAttribute('data-index', `${project.projectTasks.indexOf(task, 0)}`)
                stepHeadContainer.setAttribute('data-index', `${project.projectTasks.indexOf(task, 0)}`)

                stepContainer.addEventListener('click', function (e) {
                    completeSubTask(project, e)
                    
                })

                mainPaneSubTasks.append(stepContainer)
            });
        }

        mainPane.append(mainPaneTitle, mainPaneDueDate, mainPaneSubTasks, mainPaneComplete)

        updateCompletionStatus(project)
        saveLocal(project)
    }

    
}

const completeSubTask = (project, e) => {
    // search the tasksCompleted array for the index of the task that is clicked
    // if it is not in the array, add it. if it is in the array, remove it.
    if (project.tasksCompleted.indexOf(e.target.dataset.index) == -1) {
        project.tasksCompleted.push(e.target.dataset.index)
        
    } else {
        project.tasksCompleted = project.tasksCompleted.filter(tasks => tasks != e.target.dataset.index)
    }
    saveLocal(project)
    updateMainPane(project)
    
}

const updateCompletionStatus = (project) => {
    if (document.getElementById('completionStatus')) {

        const completionStatus = document.getElementById('completionStatus')

        completionStatus.addEventListener('click', function (e) {
            project.toggleCompleted()

            updateMainPane(project)
    })
}
}



const addTask = () => {
    if (document.getElementById('addTaskButton')){
        const addTaskButton = document.getElementById('addTaskButton')
        addTaskButton.addEventListener('click', function () {
        showModal('addTask')
    })
    }
}

const removeTask = () => {
    if (document.getElementById('removeTaskButton')) {
        const removeTaskButton = document.getElementById('removeTaskButton')
        removeTaskButton.addEventListener('click', function () {
        showModal('removeTask')
    });
    }
}

const mainPaneActions = () => {
    
    addTask()
    removeTask()
}



export { updateCompletionStatus, updateMainPane, mainPaneActions }