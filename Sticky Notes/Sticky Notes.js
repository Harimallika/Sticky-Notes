const btn = document.querySelector(".add-note");


btn.addEventListener("click", (e)=>{
    const textarea = document.createElement("textarea");
    textarea.classList.add("note");
    textarea.placeholder ="This is a new Note";

    const notesList = document.getElementById("app");
    notesList.insertBefore(textarea, btn);
});