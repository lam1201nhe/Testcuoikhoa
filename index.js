//Bai 1
const inputArray = [2,3,-5,-2,4];

function adjacentElementsProduct(inputArray){
    let max = inputArray[0] * inputArray[1];
    for(let i = 0; i < inputArray.length - 1; i++){
        if(inputArray[i] * inputArray[i+1] > max){
            max = inputArray[i] * inputArray[i+1];
        }
    }
    return max;
}

console.log(adjacentElementsProduct(inputArray));

//bai2:
const array = [60, 40, 55, 75, 64];

function alternatingSums(a) {
    let team1 = 0;
    let team2 = 0;
    for(let i = 0; i < a.length; i++){
        if(i % 2 == 0){
            team1 += a[i];
        }else{
            team2 += a[i];
        }
    }
    return [team1, team2];
}

console.log(alternatingSums(array));

//bai 3: 
//Build a website to shorten links from API
//https://api.shrtco.de/v2/shorten?url=www.google.com
//https://api.shrtco.de/v2/shorten?url=www.facebook.com
//https://api.shrtco.de/v2/shorten?url=www.youtube.com




