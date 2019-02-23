const API_URL = "https://sj-public-api.herokuapp.com/api";

function json(response) {
  return response.json();
}

const pageLoadTasks = async () => {
  try {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(getAllTasksQuery())
    })
      .then(json)
      .then(data => createUnorderedList(data));
  } catch (error) {
    throw error;
  }
};

const POST_TO_API = async (PARAMS, taskMethod) => {
  let API_QUERY;

  console.log("POST_TO_API Params" + PARAMS);
  switch (taskMethod) {
    case "delete":
      API_QUERY = JSON.stringify(deleteTaskQuery(PARAMS));
      break;
    case "create":
      API_QUERY = JSON.stringify(createTaskQuery(PARAMS));
      break;
    case "getOneTask":
      API_QUERY = JSON.stringify(getOneTasksQuery(PARAMS));
      break;
    case "update":
      API_QUERY = JSON.stringify(updateTaskQuery(PARAMS));
      console.log(API_QUERY);
      break;
    default:
      throw error;
  }

  console.log(API_QUERY);
  let result;
  try {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: API_QUERY
    })
      .then(json)
      .then(data => {
        console.log(data);
        result = data;
      });
  } catch (error) {
    throw error;
  }
  return result;
};
