import { countryList } from './code.js';

/*let myHeaders = new Headers();
myHeaders.append("apikey", "t8CTzvUFv0noRANsfDBzP8PgQkaoM391");

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

async function fetchData() {
    try {
      const response = await fetch("https://api.apilayer.com/exchangerates_data/convert?to=INR&from=USD&amount=100", requestOptions);
      const result = await response.json();
      console.log(result.info);
    } catch (error) {
      console.log('error', error);
    }
  }
  
//   fetchData();
  */

// console.log(myHeaders);  

const baseUrl="https://api.exchangerate-api.com/v4/latest/";

const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
let frommCurr=document.querySelector(".from select");

let tooCurr=document.querySelector(".to select");
let msg=document.querySelector(".msg");


for(let select of dropdowns){
    for(let currCode in countryList){
        let newOptions=document.createElement("option");
        newOptions.innerText=currCode;
        newOptions.value=currCode;
        
        if(select.name==="to"&& currCode==="NPR"){
            newOptions.selected="selected";
        }
        else if(select.name==="from"&& currCode==="USD"){
            newOptions.selected="selected";
        }
        select.appendChild(newOptions);

    }

    select.addEventListener("change",(evnt)=>{
        updateFlag(evnt.target);

    });
}

const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    // console.log(countryCode);
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector(".img-flag");
    img.src=newSrc;
}

btn.addEventListener("click", async (evnt)=>{
    evnt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtVal=Number(amount.value).toFixed(2);

    console.log(typeof amtVal);
    if(amtVal===""|| amtVal<1){
        amtVal=1;
        amount.value="1";
    }
    let fromCurr=frommCurr.value;
    let toCurr=tooCurr.value;


    const url=`${baseUrl}/${fromCurr}`;
    console.log(url);
    let response=await fetch(url);
    let data=await response.json();
    // console.log(data);
    // console.log(toCurr);
    let excRate=(data.rates[toCurr]);

    let afterRate=(amtVal)*Number(excRate);

    // console.log(typeof amtVal);
    // console.log(amtVal);
    // console.log(excRate);
    // console.log(afterRate);

    msg.innerHTML=`${amtVal}${fromCurr}=${afterRate.toFixed(2)}${toCurr}`;


});