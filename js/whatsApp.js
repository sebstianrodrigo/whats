popupWhatsApp = () => {
  
    let btnClosePopup = document.querySelector('.closePopup');
    let popup = document.querySelector('.popup-whatsapp');
    let sendBtn = document.getElementById('send-btn');
    

    btnClosePopup.addEventListener("click",  () => {
      popup.classList.toggle('is-active-whatsapp-popup')
    })   
    
    
    sendBtn.addEventListener("click", () => {
    let nume= document.getElementById('num').value;
    let relnum = nume.replace(/ /g,"%20");
    let code= document.getElementById('cod').value;
    let relcode = code.replace(/ /g,"%20");
    let msg = document.getElementById('whats-in').value;
    let relmsg = msg.replace(/ /g,"%20"); 
     window.open('https://api.whatsapp.com/send/?phone='+relcode+relnum,'&text='+relmsg, '_blank'); 
      
    });
  
    setTimeout(() => {
      popup.classList.toggle('is-active-whatsapp-popup');
    }, 3000);
  }
  
  popupWhatsApp();