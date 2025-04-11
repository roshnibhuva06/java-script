const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");

// Load saved notes
window.onload = () => {
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  savedNotes.forEach(text => addNote(text));
};

function addNote(text) {
  const noteDiv = document.createElement("div");
  noteDiv.classList.add("note");
  noteDiv.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = () => {
    noteDiv.remove();
    saveNotes();
  };

  noteDiv.appendChild(deleteBtn);
  notesContainer.appendChild(noteDiv);
  saveNotes();
}

function saveNotes() {
  const notes = [];
  document.querySelectorAll(".note").forEach(note => {
    notes.push(note.childNodes[0].textContent);
  });
  localStorage.setItem("notes", JSON.stringify(notes));
}

addBtn.onclick = () => {
  const text = noteInput.value.trim();
  if (text) {
    addNote(text);
    noteInput.value = "";
  }
};

noteInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addBtn.click();
});
