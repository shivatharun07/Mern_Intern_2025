obj = {
    "name": "Prasanth",
    "age": 22,
    "city": "Chennai"
}
// for(i = 0;i<Object.keys(obj).length;i++){
//     // console.log(i,obj[i]);
//     console.log(i,Object.keys(obj)[i]);
// }

for (i of Object.entries(obj)){
    console.log(i);
}