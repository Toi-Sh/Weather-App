const key="XvHvldgUtsYmHUceUwnRHuIMdnJSqcBr";

//get weather info

const getWeather= async(id)=>{
    const base="http://dataservice.accuweather.com/currentconditions/v1/";
    const query=`${id}?apikey=${key}`;

    const response= await fetch(base+query);
    const data= await response.json();

    
    return data[0];

};



//get city info
const getCity= async(city)=>{

    const base="http://dataservice.accuweather.com/locations/v1/cities/search";
    const query=`?apikey=${key}&q=${city}`; //something that ends with ? is a query

    const response =await fetch(base + query);
    const data= await response.json();
    
    return data[0];
};


// getCity("Imphal").then(data=>{
//     return getWeather(data.Key);
// }).then(data=>{
//     console.log(data);
// }).catch(err=>console.log(err));

//hook up the data in app.js



