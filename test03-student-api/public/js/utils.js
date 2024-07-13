function getUserIdFromUrl() {
  const url = new URL(window.location.href);

  return url.searchParams.get("id");
}

function validateForm(data) {
  // TODO: Validate
}

function getUserDataFromForm() {
  const name = $("#name").val();
  const birthday = $("#birthday").val();
  const email = $("#email").val();
  const phone = $("#phone").val();

  return { name, birthday, email, phone };
}

function backToHomepage() {
  window.location.href = "/";
}
