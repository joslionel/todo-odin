const projects = []

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

    let tasksCompleted = []

    return {
        projectName,
        projectTasks,
        tasksCompleted,
        projectPriority,
        dueDate,
        tasksCompleted,
        toggleCompleted,
        getCompleted,
    }
}

projects.push(project(
    'Default Prawbect',
    [
        ['Step 1', '29-06-2022', 'Notes about step 1'],
        ['Step 2', '29-06-2022', 'Notes about step 1'],
        ['Step 3', '29-06-2022', 'Notes about step 1'],
    ],
    1,
    '',
))
projects.push(project('Project 2', [['Task 1', '29-06-2022', 'Notes about step 1'], ['Task 2', '29-06-2022', 'Notes about step 1'], ['Task 3', '29-06-2022', 'Notes about step 1']], 0, ''))
projects[1].toggleCompleted()

export {projects, project}