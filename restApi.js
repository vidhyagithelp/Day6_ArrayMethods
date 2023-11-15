// rest api using xml http request

let req=new XMLHttpRequest();
let arr=[];
let asianContries=[];
// let XmlResponse;
//open
req.open("GET", "https://restcountries.com/v3.1/all");

//send
req.send();

//on load
req.onload=function (){
    // console.log(req.response);
    let XmlResponse=JSON.parse(req.response);
    const initialValue = 0;
    
    console.log(XmlResponse);
    if(XmlResponse){
      // Get all the countries from Asia continent /region
       asianContries=XmlResponse.filter((val)=>val.region=="Asia").map((ele)=>ele.name.common);
      //  console.log(asianContries);

      //  Get all the countries with a population of less than 2 lakhs 
       let leastPopulated=XmlResponse.filter((val)=>val.population>200000).map((ele)=>ele.name.common);
       console.log(leastPopulated);

       //Print the following details name, capital, flag,
       XmlResponse.forEach((val)=>console.log(`country name is ${val.name.common}, its capital is ${val.capital} and has ${val.flag} flag with ${val.population>200000?"more than 2 lakhs":"less than 2 lakhs"} population` ));

      //  Print the total population of countries using reduce function

      let totlPopltn= XmlResponse.map((val)=>val.population
      ).reduce(myFun,initialValue);

      function myFun(tot,currentVal){
          return tot+currentVal;
      }

      console.log(`Total population of all countries is ${totlPopltn}`);

      //Print the country that uses US dollars as currency.

      let dollarCountries=XmlResponse.filter((val)=>{
         for(let x in val){
 
            for(let y in val[x]){
              if(y=="USD"){
                return val;
              };
            }
         }
        }).map((z)=>z.name.common) ;                       
      console.log(dollarCountries);
}
}

