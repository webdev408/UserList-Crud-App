const userInputs = document.querySelectorAll(".field");

document.querySelector(".btn").addEventListener("click", getUserDetails);

function getUserDetails() {
  const users = document.createElement("p");
  const details = [];

  userInputs.forEach((input) => {
    details.push(input.value);
    input.value = "";
    users.classList.add("style");
  });
  users.textContent = details.join(", ");
  document.body.appendChild(users);
  // add remove button to each user detail
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove");
  users.appendChild(removeBtn);
  removeBtn.addEventListener("click", () => {
    users.remove();
  });
  // add edit button to each user detail
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit");
  users.appendChild(editBtn);
  editBtn.addEventListener("click", () => {
    userInputs.forEach((input, index) => {
      input.value = details[index];
    });
    users.remove();
  });
}
