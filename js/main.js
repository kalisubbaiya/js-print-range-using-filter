let price=[300,350,400,450,500,550,600,650,700,750,800,900,1000,1100,1200,1300,1400,1500];
let result=price.filter(function(prices){
    return prices>=500 && prices<=1000;
});
document.write("All prices : "+price+"<br>");
document.write("After filter : "+result);
