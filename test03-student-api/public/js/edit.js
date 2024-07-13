function getUserById(id) {
  return axios.get("/users/" + id).then(function (response) {
    return response.data;
  });
}

function fillUserDataToForm(user) {
  $("#name").val(user.name);
  $("#birthday").val(user.birthday);
  $("#email").val(user.email);
  $("#phone").val(user.phone);
}

function saveUser(user) {
  return axios.put("/users/" + getUserIdFromUrl(), user);
}

function handleSaveUser() {
  const data = getUserDataFromForm();

  saveUser(data).then(backToHomepage);
}

$(function () {
  const userId = getUserIdFromUrl();
  getUserById(userId).then(fillUserDataToForm);

  $("#btn-save").click(handleSaveUser);
});
