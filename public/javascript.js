const mainDiv = document.querySelectorAll('.container');
const sideBar = document.querySelectorAll('.sidePara');

function addListeners()
{
    sideBar.forEach((para) => {
        para.addEventListener('mouseover', showElement(para.id));
    })
}

function showElement(para_id){
    sideBar.forEach((p) => {
        p.para_id.style.visibility = 'visible';
    })
}


addListeners();
