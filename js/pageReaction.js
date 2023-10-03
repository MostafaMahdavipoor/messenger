let chatlist = document.getElementById("chatlist");

const ChatList = () => {

  let ClosedChatList = () => {
    chatlist.classList.remove("chatlist", "chatlist__Open");
    chatlist.classList.add("chatlist", "chatlist__Closed");
  };

  let OpenChatList = () => {
    chatlist.classList.remove("chatlist", "chatlist__Closed");
    chatlist.classList.add("chatlist", "chatlist__Open");
  };

  if (chatlist.classList[1] === "chatlist__Open") {
    ClosedChatList();
  } else {
    OpenChatList();
  }
};

const refreshChatlist = () => {
  let chatlist = document.getElementById("Contacts");
  let Contacts = chatlist.getElementsByClassName("chatlist__card");
  if (Contacts.length > 0) {
    chatlist.innerHTML = "";
  }
  fetch("./jsonFiles/Contacts.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (Contacts) {
      for (let i = 0; i < Contacts.length; i++) {
        let chatlistCard = document.createElement("div");
        chatlistCard.classList.add("chatlist__card");

        let chatlistPhoto = document.createElement("div");
        chatlistPhoto.classList.add("chatlist__photo");

        let chatlistImg = document.createElement("img");
        chatlistImg.classList.add("chatlist__img");

        let chatlistInfo = document.createElement("div");
        chatlistInfo.classList.add("chatlist__info");

        let chatlistDetails = document.createElement("div");
        chatlistDetails.classList.add("chatlist__details");
        let chatlistName = document.createElement("span");
        chatlistName.classList.add("chatlist__name");
        let chatlistDate = document.createElement("span");
        chatlistDate.classList.add("chatlist__date");

        let chatlistMore = document.createElement("div");
        chatlistMore.classList.add("chatlist__more");
        let chatlistSender = document.createElement("span");
        chatlistSender.classList.add("chatlist__sender");
        let chatlistMessage = document.createElement("p");
        chatlistMessage.classList.add("chatlist__message");
        let chatlistBadge = document.createElement("span");

        chatlistImg.src = Contacts[i].profile;
        chatlistName.textContent = Contacts[i].name;
        chatlistDate.textContent = Contacts[i].date;
        chatlistSender.textContent = `${Contacts[i].sender} : `;
        chatlistMessage.textContent = Contacts[i].lastMessage;

        if(Contacts[i].numberMessages !== ""){
          chatlistBadge.textContent = Contacts[i].numberMessages;
          chatlistBadge.classList.add("chatlist__badge");
        }

        if (Contacts[i].chatType === "group") {
          chatlistName.classList.add("chatlist__name--group");
        } else if (Contacts[i].chatType === "channel") {
          chatlistName.classList.add("chatlist__name--channel");
        }

        chatlistPhoto.appendChild(chatlistImg);
        chatlistCard.appendChild(chatlistPhoto);
        chatlistDetails.appendChild(chatlistName);
        chatlistDetails.appendChild(chatlistDate);
        chatlistInfo.appendChild(chatlistDetails);
        chatlistMore.appendChild(chatlistSender);
        chatlistMore.appendChild(chatlistMessage);
        chatlistMore.appendChild(chatlistBadge);
        chatlistInfo.appendChild(chatlistMore);
        chatlistCard.appendChild(chatlistInfo);
        chatlist.appendChild(chatlistCard);
      
      chatlistCard.addEventListener("click", () => {
        let chatlistisActive = document.getElementsByClassName("chatlist--is--active");
        let dialog = document.getElementById("dialog");
        let nameDialog= document.getElementById("dialog__name")
        nameDialog.textContent=chatlistName.textContent
        dialog.setAttribute("style", "display:block;");
        if (chatlistisActive.length >= 1) {
          chatlistisActive[0].classList.remove("chatlist--is--active");
        }
        chatlistCard.classList.add("chatlist--is--active");
      });
    }
    });
};

const addContact = () => {
  let addContact = document.getElementById("addContact");
  addContact.style = "display: block;";
  let Messenger = document.getElementById("Messenger");
  Messenger.setAttribute("style", "display:none;");

  let closebtn = document.getElementById("close");
  closebtn.onclick =closedd=() => {
    addContact.style = "display: none;";
    Messenger.removeAttribute("style", "display:block;");
  };

  let addbtn = document.getElementById("submitbtn");
  addbtn.onclick = () => {
    const phone = document.forms["contact"]["phone"].value;
    const Name = document.forms["contact"]["name"].value;
    const contact = {
      Name: Name,
      phone: phone,
    };
    let chatlistCard = document.createElement("div");
    chatlistCard.classList.add("chatlist__card","chatlist--is--active");
    chatlistCard.addEventListener("click", () => {
      let chatlistisActive = document.getElementsByClassName("chatlist--is--active");
      let dialog = document.getElementById("dialog");
      let nameDialog= document.getElementById("dialog__name")
      nameDialog.textContent=chatlistName.textContent
      dialog.setAttribute("style", "display:block;");
      if (chatlistisActive.length >= 1) {
        chatlistisActive[0].classList.remove("chatlist--is--active");
      }
      chatlistCard.classList.add("chatlist--is--active");
    });

    let chatlistPhoto = document.createElement("div");
    chatlistPhoto.classList.add("chatlist__photo");

    let chatlistImg = document.createElement("img");
    chatlistImg.classList.add("chatlist__img");

    let chatlistInfo = document.createElement("div");
    chatlistInfo.classList.add("chatlist__info");

    let chatlistDetails = document.createElement("div");
    chatlistDetails.classList.add("chatlist__details");
    let chatlistName = document.createElement("span");
    chatlistName.classList.add("chatlist__name");
    let chatlistDate = document.createElement("span");
    chatlistDate.classList.add("chatlist__date");

    let chatlistMore = document.createElement("div");
    chatlistMore.classList.add("chatlist__more");
    let chatlistSender = document.createElement("span");
    chatlistSender.classList.add("chatlist__sender");
    let chatlistMessage = document.createElement("p");
    chatlistMessage.classList.add("chatlist__message");


    chatlistImg.src ="./image/user.png";
    chatlistName.textContent = contact.Name;
    chatlistDate.textContent = "";
    chatlistSender.textContent = "";
    chatlistMessage.textContent = "";

    chatlistPhoto.appendChild(chatlistImg);
    chatlistCard.appendChild(chatlistPhoto);
    chatlistDetails.appendChild(chatlistName);
    chatlistDetails.appendChild(chatlistDate);
    chatlistInfo.appendChild(chatlistDetails);
    chatlistMore.appendChild(chatlistSender);
    chatlistMore.appendChild(chatlistMessage);
    chatlistInfo.appendChild(chatlistMore);
    chatlistCard.appendChild(chatlistInfo);
    chatlist.appendChild(chatlistCard);
    alert("مخاطب با موفقیت اضافه شد");
    closedd()
  };
};

const dialog = document.getElementById('dialog__message')
const dialogIcon = document.getElementById('dialog__icon')
const dialogIconattach = document.getElementById('dialog__attach')

const IconChanger=()=>{
    let full
if(dialog.value.length>0 && dialog.value !==""){
    dialogIcon.setAttribute('class','dialog__send')
    dialogIconattach.style=".dialog__attach::before { content : '1'}"
    full=true
}else{
    dialogIcon.setAttribute('class','dialog__voice')
    full=false
}
return full
}

const sendmesseg=()=>{
    const full=IconChanger()
    if(full===true){
        let dialogBody=document.getElementById("dialogBody");
        let messageSelf=document.createElement("div");
        messageSelf.classList.add('message','message__self')
        dialogBody.appendChild(messageSelf);
        let messagePhoto = document.createElement("div")
        messagePhoto.setAttribute("class", "message__photo");
        let messageImg=document.createElement("img")
        messageImg.src="./image/user.png"
        messageImg.setAttribute("class", "message__img");
        messagePhoto.appendChild(messageImg);
        messageSelf.appendChild(messagePhoto);
        let messageCard = document.createElement("div")
        messageCard.classList.add("message__card", "message__card--self");
        let messageText = document.createElement("span")
        messageText.setAttribute("class", "message__text");
        messageText.setAttribute("id", "message__text__self");
        messageText.textContent=dialog.value
        messageCard.appendChild(messageText);
        messageSelf.appendChild(messageCard);
        dialog.value=null
    }
}

dialog.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        sendmesseg()
        dialog.value=null
    }
})