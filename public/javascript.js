const idList = document.querySelectorAll("#profileHeader, #phoneHeader, #emailHeader, #webHeader, #educationHeader, #experienceHeader, #knowledgeHeader");


function mouseover(idList)
{
    for (i = 0; i <= idList.length - 1; i++)
    {
        const item = idList[i]
        item.addEventListener('mouseenter', function(){
            item.style.color = "#03254c";
        })
        item.addEventListener('mouseleave', function(){
            item.style.color = "white";
        })
    }
}

const profileHeader = document.getElementById('profileHeader');
let hiddenDiv = document.getElementById('hiddenDiv');

profileHeader.addEventListener('click', function(){
    hiddenDiv.style.visibility = 'visible'; 
    hiddenDiv.style.width = '900px';
    hiddenDiv.style.height = '900px';
    if (hiddenDiv.style.width == '900px' && hiddenDiv.style.visibility == 'visible')
    {
        const closeDiv = document.getElementById('closeProfileButton')
        closeDiv.addEventListener('click', function(){
        hiddenDiv.style.visibility = 'hidden';
        hiddenDiv.style.width = '0px';
        hiddenDiv.style.height = '0px';
    })
    }
})

mouseover(idList)