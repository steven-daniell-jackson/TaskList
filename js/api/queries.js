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
