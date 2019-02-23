const clearModal = () => $("#formModal").empty();
const closeModal = () => {
  // $("#formModal").modal("toggle");
  // $("#formModal").remove();
  // $("body").removeClass("modal-open");
  // $(".modal-backdrop").remove();
};

const setModalConfig = async (params, taskId) => {
  switch (params) {
    case "createTask":
      modalConfig = {
        modalTitle: "Create New Task",
        submitButtonText: "Create Task",
        statusRequired: false,
        formSubmit: "createTask()",
        taskName: "",
        taskDescription: "",
        taskLink: "",
        taskStatus: ""
      };
      break;
    case "editTask":
      const result = await POST_TO_API(taskId, "getOneTask");
      const task = result.data.getTask;
      console.log(result.data.getTask);
      modalConfig = {
        modalTitle: "Edit Task",
        submitButtonText: "Save",
        statusRequired: false,
        formSubmit: `updateTask('${taskId}')`,
        taskName: task.taskName,
        taskDescription: task.description,
        taskLink: task.githubLink,
        taskStatus: ""
      };
      break;
    default:
      break;
  }

  console.log(modalConfig);
  createFormModal(modalConfig);
};

const createFormModal = modalConfig => {
  clearModal();
  $("#formModal")
    .append(modal(modalConfig))
    .modal("show");
};

const modal = modalConfig => {
  return `
 <div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">${
      modalConfig.modalTitle
    }</h5>
    <button
    type="button"
    class="close"
    data-dismiss="modal"
    aria-label="Close"
    >
    <span aria-hidden="true">&times;</span>
    </button>
    </div>
    <div class="modal-body">
    <form >
  <div class="form-group row">
  <label for="taskName" class="col-sm-2 col-form-label"
  >Task Name*</label
  >
  <div class="col-sm-10">
  <input
  type="text"
  class="form-control"
  id="taskName"
  placeholder="Task Name*"
  value="${modalConfig.taskName}" />
  </div>
  </div>
  <div class="form-group row">
  <label for="taskDescription" class="col-sm-2 col-form-label"
  >Task Description*</label
  >
  <div class="col-sm-10">
  <input
  type="text"
  class="form-control"
  id="taskDescription"
  placeholder="Task Description*"
  value="${modalConfig.taskDescription}"
  />
  </div>
  </div><div class="form-group row">
  <label for="taskLink" class="col-sm-2 col-form-label"
  >Task Link</label
  >
  <div class="col-sm-10">
  <input
  type="text"
  class="form-control"
  id="taskLink"
  placeholder="Github/Bitbucket Link"
  value= "${modalConfig.taskLink}"
  />
  </div></div><fieldset class="form-group">
  <div class="row">
  <legend class="col-form-label col-sm-2 pt-0">Task Status</legend>
  <div class="col-sm-10">
  <div class="form-check">
  <input
  class="form-check-input"
  type="radio"
  name="taskStatus"
  id="statusOpen"
  value="option1"
  checked
  />
  <label class="form-check-label" for="statusOpen">
  Open
  </label>
  </div>
  <div class="form-check">
  <input
  class="form-check-input"
  type="radio"
  name="taskStatus"
  id="statusClosed"
  value="option2"
  />
  <label class="form-check-label" for="gridRadios2">
  Closed
  </label>
  </div>
  </div>
  </div>
  </fieldset></div><div class="modal-footer">
  <button
  type="button"
  class="btn btn-secondary"
  data-dismiss="modal"
  >
  Close
  </button>
  <button type="button" onClick="${
    modalConfig.formSubmit
  }" class="btn btn-primary">
  ${modalConfig.submitButtonText}
  </button>
  </div>

  </form>
  </div>
  </div>`;
};
