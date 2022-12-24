function mouseover()
{
    const idList = document.querySelectorAll("#profileHeader, #phoneHeader, #emailHeader, #webHeader, #educationHeader, #experienceHeader, #knowledgeHeader");

    for (i = 0; i <= idList.length - 1; i++)
    {
        const test = idList[i];
        test.addEventListener('mouseenter', function(){
            test.style.color = "black";        })
        test.addEventListener('mouseleave', function(){
            test.style.color = "white";
        })
    }
}

mouseover()