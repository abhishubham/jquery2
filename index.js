var products = [{
    "id": "100",
    "name": "iPhone 4S",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "101",
    "name": "Moto X",
    "brand": "Motorola",
    "os": "Android"	
},
{
    "id": "102",
    "name": "iPhone 6",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "103",
    "name": "Samsung Galaxy S",
    "brand": "Samsung",
    "os": "Android"
},
{
    "id": "104",
    "name": "Google Nexus",
    "brand": "ASUS",
    "os": "Android"
},
{
    "id": "105",
    "name": "Surface",
    "brand": "Microsoft",
    "os": "Windows"
}];

$(document).ready(function(){
    display();
})



function display(){
    var tab = '<table><tr><th>ID</th> <th>NAME</th> <th>BRAND</th> <th>OPERATING SYSTEM</th></tr>';
    for(var i= 0; i<products.length; i++){
        tab += '<tr><td>'+ products[i].id + 
                '</td><td>'+ products[i].name +
                '</td><td>'+ products[i].brand +
                '</td><td>'+ products[i].os +
                '</td><td><a href = "#" id= delete onclick="Delete('+ parseInt(products[i].id)+')">Delete</a></td> </tr>' 
    }
    tab += '</table>';
    document.getElementById("list").innerHTML= tab;

}


function Delete(x){
        for(var i=0; i<products.length; i++){
            if(products[i].id == x ){
                products.splice(i,1);
            }
        }

  display();
}