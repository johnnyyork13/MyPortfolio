const linkP = document.getElementsByClassName('linkP');
const mainDiv = document.getElementsByClassName('mainDiv');

let linkArray = [];

for (i = 0; i < linkP.length; i++) {
    let e = linkP[i];
    e.addEventListener('click', openSection);
}

function openSection(){
    for (i = 0; i < mainDiv.length; i++) {
        let e = mainDiv[i];
        if (e.classList[0] === this.id) {
            e.style.visibility = 'visible';
            e.children[0].className = "w3-center w3-animate-right";
            e.children[1].className = "w3-center w3-animate-right";
        } else {
            e.style.visibility = 'hidden';
            e.children[0].className = "";
            e.children[1].className = "";
        }

        //Style List
        this.parentElement.parentElement.children[i].children[0].style.fontSize = '1em';    
    }
    this.style.fontSize = '1.5em';
}
