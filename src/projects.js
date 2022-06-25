const projects = [
    {
        'projectName': 'Default Prawbect',
        'projectTasks': [
            'Step 1',
            'Step 2',
            'Step 3',
        ],
        'projectPriority': 1,
        'dueDate': '',
        'isCompleted': 0,
    },

    {
        'projectName': 'Project 2',
        'projectTasks': [
            'Step 1',
            'Step 2',
            'Step 3',
        ],
        'projectPriority': 1,
        'dueDate': '',
        'isCompleted': 0,
    },
]

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

    return {
        projectName,
        projectTasks,
        projectPriority,
        dueDate,
        toggleCompleted,
        getCompleted,
    }
}

export {projects, project}