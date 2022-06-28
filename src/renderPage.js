import { updateMainPane } from "./mainPanelActions";
import { projects } from "./projects";

const getProject = () => {
    const projectName = document.getElementById('projectName');
    const project = projects.filter(project => project.projectName == projectName.textContent)
    return project[0]
}

const createMainFrame = () => {
    const mainFrame = document.createElement('div');
    mainFrame.classList.add('main');

    return mainFrame
}

const createLeftPanel = () => {
    const leftPanel = document.createElement('div');
    leftPanel.classList.add('navPanel');

    const navSearchBar = document.createElement('input');
    navSearchBar.setAttribute('id', 'navSearchBar')
    navSearchBar.setAttribute('type', 'text');
    navSearchBar.setAttribute('placeholder', 'Search for a project');

    const navHeading = document.createElement('h2');
    navHeading.textContent = 'My Projects';

    const projectList = document.createElement('ul');
    projectList.setAttribute('id', 'projectList')
    const demoProject = document.createElement('li');
    demoProject.textContent = 'Demo Project';
    projectList.append(demoProject);

    const createNewProject = document.createElement('input');
    createNewProject.setAttribute('type', 'text');
    createNewProject.setAttribute('id', 'newProjectInput');
    createNewProject.setAttribute('placeholder', 'Create a new project');

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.setAttribute('id', 'deleteProjectButton')
    deleteProjectButton.textContent = 'Delete selected project';

    leftPanel.append(navSearchBar, navHeading, projectList, createNewProject, deleteProjectButton);

    return leftPanel
}

const createRightPanel = () => {
    const mainPanel = document.createElement('div');
    mainPanel.classList.add('mainPanel');

    const mainPanelHeading = document.createElement('div');

    const mainHeading = document.createElement('h2');
    mainHeading.textContent = "Project Name";
    mainHeading.setAttribute('id', 'projectName')
    mainPanelHeading.classList.add('spaceBetween');

    const mainTaskRemaining = document.createElement('h3');
    mainTaskRemaining.setAttribute('id', 'tasksRemaining')
    mainTaskRemaining.textContent = 'x/y tasks completed'

    const mainTaskList = document.createElement('div');
    mainTaskList.classList.add('mainTaskList');
    mainTaskList.textContent = 'List of tasks associated with selected project';

    const mainAddTask = document.createElement('div');
    mainAddTask.classList.add('spaceBetween');

    const addTaskButton = document.createElement('button')
    addTaskButton.textContent = 'Add task'
    addTaskButton.setAttribute('id', 'addTaskButton')

    const removeTaskButton = document.createElement('button')
    removeTaskButton.textContent = 'Remove task'
    removeTaskButton.setAttribute('id', 'removeTaskButton')

    mainAddTask.append(addTaskButton, removeTaskButton)

    mainPanelHeading.append(mainHeading, mainTaskRemaining);

    mainPanel.append(mainPanelHeading, mainTaskList, mainAddTask);
    
    return mainPanel
}

const createModalWindow = () => {
    const modalParent = document.createElement('div')
    modalParent.classList.add('modalParent')
    modalParent.classList.add('hide')

    const modal = document.createElement('div')
    modal.classList.add('modalWindow')

    const modalContent = document.createElement('div');
    modalContent.setAttribute('id', 'modalContent')

    modal.append(modalContent)
    
    modalParent.addEventListener('click', function (e) {
        if (e.target == modalParent) {hideModal()}
    })

    
    
    modalParent.append(modal)

    return modalParent
}

// these modal variations should have content & structure inside the functions
// then thse functions are passed into showModal as switch statement based on parameter
// that is passed from button click (in the other modules)
// this will allow the relevant stuff to the applied to the modal window when a button is pressed

const addTaskContent = () => {
    const contentBox = document.getElementById('modalContent')

    contentBox.innerHTML = ''

    const heading = document.createElement('h3');
    heading.textContent = 'Add task(s)';

    const taskInput = document.createElement('input');
    taskInput.setAttribute('type', 'text');
    taskInput.setAttribute('id', 'newTaskInput')
    const taskInputLabel = document.createElement('label');
    taskInputLabel.setAttribute('for', 'newTaskInput')
    taskInputLabel.textContent = 'Task name'

    const taskDueDate = document.createElement('input');
    taskDueDate.setAttribute('type', 'date');
    taskDueDate.setAttribute('id', 'newTaskDueDate');
    const taskDueDateLabel = document.createElement('label');
    taskDueDateLabel.setAttribute('for', 'newTaskInput');
    taskDueDateLabel.textContent = 'Task due';

    const taskDescription = document.createElement('textarea');
    taskDescription.setAttribute('type', 'text');
    taskDescription.setAttribute('id', 'newTaskDescription')
    const taskDescriptionLabel = document.createElement('label');
    taskDescriptionLabel.setAttribute('for', 'newTaskDescription')
    taskDescriptionLabel.textContent = 'Notes'

    const buttonsContainer = document.createElement('div')
    buttonsContainer.setAttribute('id', 'addTaskButtonsContainer')
    buttonsContainer.classList.add('justifyContentEnd')

    const closeButton = document.createElement('button');
    closeButton.setAttribute('id', 'closeModal');
    closeButton.textContent = 'Close'
    closeButton.addEventListener('click', function (e) {
        hideModal()
    })
    
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Add task'

    submitButton.addEventListener('click', function (e) {
        submitNewTask(taskInput.value, taskDueDate.value, taskDescription.value)
    })
    
    buttonsContainer.append(submitButton, closeButton)

    contentBox.append(heading, taskInputLabel, 
        taskInput, taskDueDateLabel, 
        taskDueDate, taskDescriptionLabel, 
        taskDescription, buttonsContainer)

    return contentBox
}

const submitNewTask = (task, duedate, notes) => {
    getProject().projectTasks.push([task, duedate, notes])
    hideModal();
    updateMainPane(getProject());
}

const removeProjectContent = () => {
    const contentBox = document.getElementById('modalContent')

    contentBox.innerHTML = ''

    const heading = document.createElement('h3');
    heading.textContent = 'Remove project(s)';

    contentBox.append(heading)

    return contentBox
}

const removeTask = (taskTitle) => {
    getProject().projectTasks = getProject().projectTasks.filter(project => project[0] != taskTitle.textContent)
    updateMainPane(getProject())
    showModal('removeTask')    
}

const removeTaskContent= () => {
    const contentBox = document.getElementById('modalContent')

    contentBox.innerHTML = ''

    const heading = document.createElement('h3');
    heading.textContent = 'Remove task(s)';

    const taskContainer = document.createElement('div');
    const taskList = document.createElement('ul')
     getProject().projectTasks.forEach(project => {
        const taskTitle = document.createElement('li')
        taskTitle.textContent = project[0]

        taskTitle.setAttribute('data-index', getProject().projectTasks.indexOf(project, 0))
        taskList.append(taskTitle)

        

        taskTitle.addEventListener('click', function (e) {removeTask(taskTitle)})
     });

    const buttonsContainer = document.createElement('div')
    buttonsContainer.setAttribute('id', 'addTaskButtonsContainer')
    buttonsContainer.classList.add('justifyContentEnd')

    const closeButton = document.createElement('button');
    closeButton.setAttribute('id', 'closeModal');
    closeButton.textContent = 'Close'
    closeButton.addEventListener('click', function (e) {
        hideModal()
    })

    buttonsContainer.append(closeButton)

    taskContainer.append(taskList, buttonsContainer)

    contentBox.append(heading, taskContainer)

    

    return contentBox
}

const showModal = (content) => {

    const modalParent = document.querySelector('.modalParent')
    const modal = document.querySelector('.modalWindow')

    modalParent.classList.remove('hide')

    
    document.addEventListener('keydown', function (e) {
        if (e.key == 'Escape') {
            hideModal()
        }
    }, {once: true})

    switch (content) {
        case 'addTask':
            modal.append(addTaskContent());
            break;
        
        case 'removeTask':
            modal.append(removeTaskContent());
            break;

        case 'removeProject':
            modal.append(removeProjectContent());
            break;
    
        default:
            modal.innerHTML = '';
            break;
    }

    
        
}

const hideModal = () => {
    const modalWindow = document.querySelector('.modalParent')
    modalWindow.classList.add('hide')

}

const renderPage = () => {
    const mainFrame = createMainFrame()    

    const leftPanel = createLeftPanel()

    const rightPanel = createRightPanel()

    const modalWindow = createModalWindow()

    mainFrame.append(leftPanel, rightPanel, modalWindow);

    document.body.append(mainFrame);

    return {mainFrame}
}

export {renderPage, showModal};