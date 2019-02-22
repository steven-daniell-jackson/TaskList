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

  switch (taskMethod) {
    case "delete":
      API_QUERY = JSON.stringify(deleteTaskQuery(PARAMS));
      break;
    case "create":
      API_QUERY = JSON.stringify(createTaskQuery(PARAMS));
      break;
    default:
      throw error;
  }

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
      .then(data => console.log(data));
  } catch (error) {
    throw error;
  }
};
