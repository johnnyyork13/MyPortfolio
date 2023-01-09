const mainDiv = document.querySelectorAll('.container');
const sideBar = document.querySelectorAll('.sidePara');

function addListeners()
{
    sideBar.forEach((para) => {
        para.addEventListener('mouseover', showElement(para.id));
    })
}




addListeners();
