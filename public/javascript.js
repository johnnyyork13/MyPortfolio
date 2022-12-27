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

mouseover(idList)