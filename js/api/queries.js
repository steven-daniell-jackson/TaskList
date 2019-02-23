const getAllTasksQuery = () => {
  return {
    query: `query	{
    tasks {
      _id
      taskName
      description
      status
      githubLink
      _createdAt
    }
  }`
  };
};

const getOneTasksQuery = params => {
  console.log("getOneTasksQuery" + params);
  return {
    query: `mutation {
      getTask (taskOne: {_id: "${params}"}) {
        _id
        taskName
        description
        status
        githubLink
      }
    }`
  };
};

const createTaskQuery = params => {
  console.log(params);
  return {
    query: `mutation{
      createTask(taskInput: {taskName: "${params.taskName}",
      description: "${params.description}", 
      status:"Open", 
      githubLink: "${params.githubLink}"}) 
      {
        taskName
        description
        status
        githubLink
        _createdAt
        _id
      }
    }`
  };
};

const updateTaskQuery = params => {
  console.log("update task");
  console.log(params);
  return {
    query: `mutation {
      updateTask (taskUpdate: {_id: "${params._id}"
      , taskName: "${params.taskName}", 
      description: "${params.description}", 
      status:"Open", githubLink: "${params.githubLink}"}) {
       _id
       taskName
       description
       status
       githubLink
    
     }
   }`
  };
};

const deleteTaskQuery = params => {
  console.log("createDeleteTaskQuery" + params);
  return {
    query: `mutation {
      deleteTask(taskDelete: {_id: "${params}"}) {
        status
      }
    }`
  };
};
