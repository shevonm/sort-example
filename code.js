let arr = [
  
  {
    medium: "Fallout: The Vault Dwellers Official Cookbook",
    foodType: "Post Apocalyptic",
    timeToCook: 30,
  },
  { medium: "Salt, Fat, Acid, Heat", foodType: "Various", timeToCook: 45 },
  { medium: "Yan Can Cook", foodType: "Chinese", timeToCook: 20 },
  { medium: "Binging with Babish", foodType: "Various", timeToCook: 1500 },
  {
    medium: "Justin Wilson's Louisiana Cookin",
    foodType: "Cajun",
    timeToCook: 45,
  },
  { medium: "Bob's Burgers Burger Book", foodType: "Burgers", timeToCook: 30 },
  { medium: "Veganomicon", foodType: "Vegan", timeToCook: 100 },
  { medium: "The Joy of Cooking", foodType: "American", timeToCook: 1500 },
  { medium: "Rachael Ray Show", foodType: "Classic", timeToCook: 42 },
];


function _sortObjectByValues(obj){
    const keys = Object.keys(obj);
    //console.log(keys);
    return keys.sort((keyA, keyB)=>{
        //console.log(obj[keyA], obj[keyB]);
        if(obj[keyA]> obj[keyB]){
            return -1;
        } else if(obj[keyB]> obj[keyA]){
            return 1;
        }
        return 0;
    })


}


function getMostCommonFoodTypes(cookingArr){
    let countObj = cookingArr.reduce((acc, {foodType})=>{
        if(acc[foodType]){
            acc[foodType]+=1;
        } else{
            acc[foodType]=1;
        }
        return acc;
    }, {});
    console.log(countObj);
   let sortedKeys =  _sortObjectByValues(countObj);
    //console.log(sortedKeys);
    let sorted = sortedKeys.map((key)=> ({ foodType:key, count:countObj[key]})).slice(0,5);
        console.log(sorted);

}


getMostCommonFoodTypes(arr);

