// Target the form
const noteForm = document.querySelector('#note-form');
// Target the note header h3
const noteHeader = document.querySelector('.note-header');

function getNotes() {
  // Pull the old data from the database(localStorage) or an empty array if no previous data has been stored
  const rawNotes = localStorage.getItem('notes');
  const notes = JSON.parse(rawNotes) || [];

  return notes;
}


// A function that is is called when the form is submitted
function createNote(eventObj) {
  eventObj.preventDefault();
  // Grab the note input element
  const noteInput = document.querySelector('#note-input');
  // Get the value(what they typed into the box)
  const noteText = noteInput.value;
  // Create a date value object
  const dateObj = new Date(); // {}
  // Get the month from the date object
  const month = dateObj.getMonth() + 1;
  // Get the date from the date object
  const date = dateObj.getDate();
  // Get the year from the date object
  const year = dateObj.getFullYear();

  // Combine all of those values into a string that looks like this - 6/24/2024
  // const dateStr = month + '/' + date + '/' + year;
  const dateStr = `${month}/${date}/${year}`;
  // Create an object value with the note text and the current date MM/DD/YYYY
  // The object should have two properties - text(noteText) and date(dateStr)
  const noteObj = {
    text: noteText,
    date: dateStr
  };

  // Use my getNotes function to retreive the notes
  const notes = getNotes();

  // Push the noteObj to the notes array
  notes.push(noteObj);
  const jsonArray = JSON.stringify(notes);
  // Save the notes array to localStorage
  localStorage.setItem('notes', jsonArray);

  noteInput.value='';
  outputNotes();
}


function outputNotes() {
  const notes = getNotes();
  const container = document.querySelector('.container');

if(notes.length){
    noteHeader.textContent= 'Your Notes:';

}
container.innerHTML='';

  

  // Loop over each object in the array and output an article element into our main container for each object
  for (const noteObj of notes){
    const container = document.querySelector('.container')
    container.insertAdjacentHTML('beforeend',`
        <article class = "note">
        <p class="note-text">${noteObj.text}</p>
        <p class="note-date">Added:${noteObj.date}</p>
    </article>
    `);
  }
}

outputNotes();

// Set up any necessary event listeners that should be listening when the page loads
noteForm.addEventListener('submit', createNote);