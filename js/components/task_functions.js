const createTask = async () => {
  let taskName = $("form #taskName").val();
  if (taskName === "" || taskName === undefined) {
    alert("Task Name is required");
    $("form #taskName")
      .focus()
      .css("border-color", "red");
    return;
  }

  let description = $("form #taskDescription").val();
  let status = "Closed";
  let githubLink = $("form #taskLink").val();

  if (description === "" || description === undefined) {
    alert("Description is required");
    $("form #taskDescription")
      .focus()
      .css("border-color", "red");
    return;
  }

  await POST_TO_API(
    {
      taskName: taskName,
      description: description,
      status: status,
      githubLink: githubLink
    },
    "create"
  );

  $("#formModal").modal("hide");
  await pageLoadTasks();
};

const deleteTask = async e => {
  let taskId = $(e)
    .closest("li")
    .data("id");

  let confirm = window.confirm("Are you sure you want to delete this task?");

  if (confirm) {
    console.log("deleteTask " + taskId);
    await POST_TO_API(taskId, "delete");
    $(`[data-id='${taskId}']`).remove();
  }
};

const editTask = () => {
  createFormModal({
    modalTitle: "Edit Task",
    submitButtonText: "Save",
    statusRequired: true
  });
  $("#formModal").modal("show");
};

const completeTask = () => {};
