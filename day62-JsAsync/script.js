
/*callback function
function sum(some){
    console.log(some);
}

function calculator(a,b,myCallback){
    let add=a+b;
    myCallback(add);
}

calculator(8,6,sum);  */

//callback hell

/*

getData(1,()=>{
    getData(2,()=>{
        getData(3);
    });
});
*/

//Promises
/*
function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
      
        setTimeout( () => {
            // console.log("data",dataId);
            // resolve("success");
            reject("failed");
            if(getNextData){
                getNextData();
            }
        },10000);
    });
}
*/

/*
function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000);
    });
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },5000);
    });
}
//Above activities is basically done by APIs.

console.log("Fetching data1....");
let p1=asyncFunc1();
p1.then((res)=>{
    console.log("Fetching data2....");
    let p2=asyncFunc2();
    p2.then((res)=>{

    });
});


function getData(dataId){
    return new Promise((resolve,reject)=>{
      
        setTimeout( () => {
            console.log("data",dataId);
            resolve("success");
            // reject("failed");
        },2000);
    });
}

//Promise chain

getData(1)
    .then((res)=>{
        return getData(2)
            .then((res)=>{
                return getData(3)
                    .then((res)=>{
                        console.log(res);
                    })
            })
    })
*/

// Async-Await

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000);
    });
}

async function getWeatherData(){
    await api();
    console.log("waiting");
    await api();
}

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout( () => {
            console.log("data",dataId);
            resolve("success");
            // reject("failed");
        },2000);
    });
}

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
}