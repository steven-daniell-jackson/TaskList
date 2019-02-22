const createFormModal = params => {
  let config;

  switch (params) {
    case "createTask":
      modalConfig = {
        modalTitle: "Create New Task",
        submitButtonText: "Create Task",
        statusRequired: false,
        formSubmit: "createTask()"
      };
      break;
    case "editTask":
      modalConfig = {
        modalTitle: "Edit Task",
        submitButtonText: "Save",
        statusRequired: true,
        formSubmit: "editTask()"
      };
      break;
    default:
      break;
  }

  clearModal();
  console.log(params);
  $("#formModal")
    .append(
      modalHeader(modalConfig.modalTitle) +
        modalForm() +
        modalFormStatusOptions(modalConfig.statusRequired) +
        modalFooter(modalConfig.submitButtonText, modalConfig.formSubmit)
    )
    .modal("show");
};

const clearModal = () => $("#formModal").empty();

const modalHeader = modalTitle => {
  return `
 <div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">${modalTitle}</h5>
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
    `;
};

const modalFormStatusOptions = statusRequired => {
  if (statusRequired) {
    return `<fieldset class="form-group">
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
</fieldset></div>`;
  }
  return "";
};

const modalForm = () => {
  return `<form >
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
  />
  </div>
  </div>
  <div class="form-group row">
  <label for="taskDescription" class="col-sm-2 col-form-label"
  >Task Description*</label
  >
  <div class="col-sm-10">
  <textarea
  type="text"
  class="form-control"
  id="taskDescription"
  placeholder="Task Description*"
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
  />
  </div></div>`;
};

const modalFooter = (submitButtonText, formSubmit) => {
  return `<div class="modal-footer">
    <button
    type="button"
    class="btn btn-secondary"
    data-dismiss="modal"
    >
    Close
    </button>
    <button type="button" onClick="${formSubmit}" class="btn btn-primary">
    ${submitButtonText}
    </button>
    </div>

    </form>
    </div>
    </div>`;
};
