// Lấy thông tin user
function getUsers() {
  return axios.get("/users").then(function (response) {
    return response.data;
  });
}

function deleteUserById(id) {
  return axios.delete("/users/" + id);
}

function removeTableRowByUserId(id) {
  $(`[data-id="${id}"]`).remove();
}

function handleDelete(id) {
  if (confirm("Xóa nhé?")) {
    deleteUserById(id).then(function () {
      removeTableRowByUserId(id);
    });
  }
}

// Hiển thị danh sách user
function renderUserList(users) {
  users.forEach(function (user) {
    $(`
      <tr data-id="${user.id}">
        <td>${user.name}</td>
        <td>${user.birthday}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>
          <a href="/edit.html?id=${user.id}" class="text-info"
            ><i class="fa fa-edit"></i> Chỉnh sửa</a
          >
          |
          <a class="btn-remove text-danger"><i class="fa fa-trash-alt"></i> Xóa</a>
        </td>
      </tr>
      `)
      .find(".btn-remove")
      .click(function () {
        handleDelete(user.id);
      })
      .end()
      .prependTo("tbody");
  });
}

$(function () {
  getUsers().then(renderUserList);
});
