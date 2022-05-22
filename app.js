var fuel = +prompt("How many liters fuel refill in Car.");
var fuelRunning = fuel * 10;
var running = +prompt ("How many Kilometers you drive a car");
if(running > fuelRunning){
    alert("Car can't run more then fuel.") 
}
var balanceRunning = fuelRunning - running;
    
document.write("<h1>" + balanceRunning + " " + "Kilometers running fuel balance in fuel tank." + " " + "</h1>");

if((balanceRunning * 10) < 0.25){
    alert("Please refill the fuel in your car");
    document.write("<h1>" + "Please refill the fuel in your car" + "</h1>");
}
else if(balanceRunning < 2.5){
    alert("Please refill the fuel in your car");
    document.write("<h1>" + "Please refill the fuel in your car" + "</h1>"); 
};
