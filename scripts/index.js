
const adding = document.getElementById("adding");
const editing = document.getElementById("pencil");
const emojiButton = document.getElementById("emojiButton");


emojiButton.addEventListener('click',()=>{


   const pickerOptions = { onEmojiSelect: console.log }
   const picker = new EmojiMart.Picker(pickerOptions)
   document.body.appendChild(picker)
   picker.style.position = 'absolute';
   picker.style.top = '50px';
   picker.style.left = '50px';
});


// =======================

adding.addEventListener("click", () => {
  open("addingContact.html",'addingContact','width=450, height=450');
});

editing.addEventListener("click", () => {
    open("editingContact.html",'addingContact','width=450, height=450');
});
