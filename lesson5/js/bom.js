const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const output = document.querySelector(".list");

button.addEventListener("click", () => {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    li.textContent = input.value;
    deleteButton.textContent = "delete";
    li.append(deleteButton);
    output.append(li);
    deleteButton.addEventListener("click", function() {
        output.removeChild(li);
        input.textContent = "Add Chapter";
        input.focus();
    });
});
