const generator = (jsonData,holderId) => {
    const holdered = document.getElementById(holderId)
}
const forInData = (jsonData,holderId) =>{
    jsonData.forEach((item) => {
generator(item,holderId);  
    })
}

const getGameCardData = (jsonData,holderId) => {

    forInData(jsonData,holderId);
}
