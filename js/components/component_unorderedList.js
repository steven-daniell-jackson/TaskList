const createUnorderedList = e => {
  console.log(e.data);
  $("ul").empty();
  // Loop through each object
  $.each(e.data.tasks, function(key, value) {
    console.log(value);

    $("ul").append(createTaskList(value));
  });
  //   console.log(e.data.users);
};

const createTaskList = data => {
  return `
      <li data-id=${data._id}>
      <div class="task-checkbox">
      <input type="checkbox" class="list-child" value="">
      </div>
      <div class="task-title">
      <span class="task-title-sp">${data.taskName}</span>
      <span class="badge badge-sm ${data.status}">${data.status}</span>
      <div class="pull-right hidden-phone">
      <button class="btn btn-success btn-xs" onClick="completeTask()"><i class=" fa fa-check"></i></button>
      <button class="btn btn-primary btn-xs" onClick="createFormModal('editTask')()"><i class="fa fa-pencil"></i></button>
      <button class="btn btn-danger btn-xs" onClick="deleteTask(this)"><i class="fa fa-trash-o "></i></button>
      </div>
      </div>
      </li>`;
};
