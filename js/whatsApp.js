popupWhatsApp = () => {
  
    let btnClosePopup = document.querySelector('.closePopup');
    let btnOpenPopup = document.querySelector('.whatsapp-button');
    let popup = document.querySelector('.popup-whatsapp');
    let sendBtn = document.getElementById('send-btn');
    

    btnClosePopup.addEventListener("click",  () => {
      popup.classList.toggle('is-active-whatsapp-popup')
    })
    
    btnOpenPopup.addEventListener("click",  () => {
      popup.classList.toggle('is-active-whatsapp-popup')
       popup.style.animation = "fadeIn .6s 0.0s both";

    })
    
    sendBtn.addEventListener("click", () => {
    let nume= document.getElementById('num').value;
    let relnum = nume.replace(/ /g,"%20");
    let msg = document.getElementById('whats-in').value;
    let relmsg = msg.replace(/ /g,"%20");
    console.log(msg);
    console.log(nume);   
     window.open('https://api.whatsapp.com/send/?phone=51'+relnum,'&text='+relmsg, '_blank'); 
      
    });
  
    setTimeout(() => {
      popup.classList.toggle('is-active-whatsapp-popup');
    }, 3000);
  }
  
  popupWhatsApp();