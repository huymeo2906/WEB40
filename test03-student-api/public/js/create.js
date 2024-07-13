function saveUser(user) {
  return axios.post("/users", user);
}

function handleSaveUser() {
  const data = getUserDataFromForm();

  saveUser(data).then(backToHomepage);
}

$(function () {
  $("#btn-save").click(handleSaveUser);
});
