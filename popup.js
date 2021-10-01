class top_popup{
    constructor(popupContaienr){
        console.log(this.content)
        this.container = document.getElementById(popupContaienr);
    }
    

    hidePopup(){
        let con=this.container;
        setTimeout(function(){ con.style.display = "none"; }, 3000);
    }
    showPopup(text){
        let mgdiv=document.createElement('div');
        mgdiv.classList.add('side-popup','zoomIn');
        this.container.appendChild(mgdiv);

        let popup_text=document.createElement('span');
        popup_text.innerText=text;
        mgdiv.appendChild(popup_text);

        var myVar;
        console.log("work")
        this.container.style.display = "block";
        myVar = setTimeout(this.hidePopup(), 30000);
        
    }
}