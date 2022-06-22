import './style.css';

const mainFrame = document.createElement('div');
mainFrame.classList.add('main');

const leftPanel = document.createElement('div');
leftPanel.classList.add('navPanel');

const navSearchBar = document.createElement('input');
navSearchBar.setAttribute('type', 'text');
navSearchBar.setAttribute('placeholder', 'Search for a project');

const navHeading = document.createElement('h2');
navHeading.textContent = 'My Projects';

const projectList = document.createElement('ul');
const demoProject = document.createElement('li');
demoProject.textContent = 'Demo Project';
projectList.append(demoProject);

const createNewProject = document.createElement('input');
createNewProject.setAttribute('type', 'text');
createNewProject.setAttribute('placeholder', 'Create a new project');

const deleteProjectButton = document.createElement('button');
deleteProjectButton.textContent = 'Delete selected project';

const mainPanel = document.createElement('div');
mainPanel.classList.add('mainPanel');
mainPanel.textContent = 'Right Panel';

leftPanel.append(navSearchBar, navHeading, projectList, createNewProject, deleteProjectButton);

mainFrame.append(leftPanel, mainPanel);

document.body.append(mainFrame);