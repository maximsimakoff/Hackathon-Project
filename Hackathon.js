/*----------------------------------------------------------------------------------*/

/* 
                            GPU SPEC SEARCH ENGINE
  The purpose of this app is to make it easy to find your gpu of choice by browsing 
  different specs and brands to see which you are interested in. To narrow down your 
  search we have made fields including price per performance search... wattage... 
  and render scores.

*/

/*----------------------------------------------------------------------------------*/
//Nvidia Column Variables
var n_name = getColumn("Gpu table", "Graphics Card");
var n_render = getColumn("Gpu table", "Render Score");
var n_gaming = getColumn("Gpu table", "Gaming Score");
var n_performance = getColumn("Gpu table", "Performance Total");
var n_ratio = getColumn("Gpu table", "Performance / Dollar");
var n_price = getColumn("Gpu table", "Price (MSRP) -$");

//Combined Column Variables
var c_name = getColumn("Gpu table 2", "Name");
var c_score = getColumn("Gpu table 2", "Score(%)");
var c_system = getColumn("Gpu table 2", "GPU");
var c_boost = getColumn("Gpu table 2", "Base/Boost -MHz");
var c_mem = getColumn("Gpu table 2", "memnum");
var c_power = getColumn("Gpu table 2", "powernum");

//Dropdown Variables
var dropdown_value_n;
var dropdown_value_c;

//Nvidia Functions
function sort_render() {
  var temp_name;
  var temp_render;
  var temp_gaming; 
  var temp_performance;
  var temp_ratio;
  var temp_price;
  
  for(var i = 0; i < n_render.length; i++){
     
   // Last i elements are already in place  
   for(var j = 0; j < ( n_render.length - i -1 ); j++){
       
     // Checking if the item at present iteration 
     // is greater than the next iteration
     if(n_render[j] > n_render[j+1]){
         
       // If the condition is true then swap them
       temp_name = n_name[j];
       n_name[j] = n_name[j + 1];
       n_name[j+1] = temp_name;
       
       temp_render = n_render[j];
       n_render[j] = n_render[j + 1];
       n_render[j+1] = temp_render;
       
       temp_gaming = n_gaming[j];
       n_gaming[j] = n_gaming[j + 1];
       n_gaming[j+1] = temp_gaming;
       
       temp_performance = n_performance[j];
       n_performance[j] = n_performance[j + 1];
       n_performance[j+1] = temp_performance;
       
       temp_ratio = n_ratio[j];
       n_ratio[j] = n_ratio[j + 1];
       n_ratio[j+1] = temp_ratio;
       
       temp_price = n_price[j];
       n_price[j] = n_price[j + 1];
       n_price[j+1] = temp_price;
     }
   }
  }
}
function sort_gaming() {
  var temp_name;
  var temp_render;
  var temp_gaming; 
  var temp_performance;
  var temp_ratio;
  var temp_price;
  
  for(var i = 0; i < n_gaming.length; i++){
     
   // Last i elements are already in place  
   for(var j = 0; j < ( n_gaming.length - i -1 ); j++){
       
     // Checking if the item at present iteration 
     // is greater than the next iteration
     if(n_gaming[j] > n_gaming[j+1]){
         
       // If the condition is true then swap them
       temp_name = n_name[j];
       n_name[j] = n_name[j + 1];
       n_name[j+1] = temp_name;
       
       temp_render = n_render[j];
       n_render[j] = n_render[j + 1];
       n_render[j+1] = temp_render;
       
       temp_gaming = n_gaming[j];
       n_gaming[j] = n_gaming[j + 1];
       n_gaming[j+1] = temp_gaming;
       
       temp_performance = n_performance[j];
       n_performance[j] = n_performance[j + 1];
       n_performance[j+1] = temp_performance;
       
       temp_ratio = n_ratio[j];
       n_ratio[j] = n_ratio[j + 1];
       n_ratio[j+1] = temp_ratio;
       
       temp_price = n_price[j];
       n_price[j] = n_price[j + 1];
       n_price[j+1] = temp_price;
     }
   }
  }
}
function sort_performance() {
  var temp_name;
  var temp_render;
  var temp_gaming; 
  var temp_performance;
  var temp_ratio;
  var temp_price;
  
  for(var i = 0; i < n_performance.length; i++){
     
   // Last i elements are already in place  
   for(var j = 0; j < ( n_performance.length - i -1 ); j++){
       
     // Checking if the item at present iteration 
     // is greater than the next iteration
     if(n_performance[j] > n_performance[j+1]){
         
       // If the condition is true then swap them
       temp_name = n_name[j];
       n_name[j] = n_name[j + 1];
       n_name[j+1] = temp_name;
       
       temp_render = n_render[j];
       n_render[j] = n_render[j + 1];
       n_render[j+1] = temp_render;
       
       temp_gaming = n_gaming[j];
       n_gaming[j] = n_gaming[j + 1];
       n_gaming[j+1] = temp_gaming;
       
       temp_performance = n_performance[j];
       n_performance[j] = n_performance[j + 1];
       n_performance[j+1] = temp_performance;
       
       temp_ratio = n_ratio[j];
       n_ratio[j] = n_ratio[j + 1];
       n_ratio[j+1] = temp_ratio;
       
       temp_price = n_price[j];
       n_price[j] = n_price[j + 1];
       n_price[j+1] = temp_price;
     }
   }
  }
}
function sort_ratio() {
  var temp_name;
  var temp_render;
  var temp_gaming; 
  var temp_performance;
  var temp_ratio;
  var temp_price;
  
  for(var i = 0; i < n_ratio.length; i++){
     
   // Last i elements are already in place  
   for(var j = 0; j < ( n_ratio.length - i -1 ); j++){
       
     // Checking if the item at present iteration 
     // is greater than the next iteration
     if(n_ratio[j] > n_ratio[j+1]){
         
       // If the condition is true then swap them
       temp_name = n_name[j];
       n_name[j] = n_name[j + 1];
       n_name[j+1] = temp_name;
       
       temp_render = n_render[j];
       n_render[j] = n_render[j + 1];
       n_render[j+1] = temp_render;
       
       temp_gaming = n_gaming[j];
       n_gaming[j] = n_gaming[j + 1];
       n_gaming[j+1] = temp_gaming;
       
       temp_performance = n_performance[j];
       n_performance[j] = n_performance[j + 1];
       n_performance[j+1] = temp_performance;
       
       temp_ratio = n_ratio[j];
       n_ratio[j] = n_ratio[j + 1];
       n_ratio[j+1] = temp_ratio;
       
       temp_price = n_price[j];
       n_price[j] = n_price[j + 1];
       n_price[j+1] = temp_price;
     }
   }
  }
}
function sort_price() {
  var temp_name;
  var temp_render;
  var temp_gaming; 
  var temp_performance;
  var temp_ratio;
  var temp_price;
  
  for(var i = 0; i < n_price.length; i++){
     
   // Last i elements are already in place  
   for(var j = 0; j < ( n_price.length - i -1 ); j++){
       
     // Checking if the item at present iteration 
     // is greater than the next iteration
     if(n_price[j] > n_price[j+1]){
         
       // If the condition is true then swap them
       temp_name = n_name[j];
       n_name[j] = n_name[j + 1];
       n_name[j+1] = temp_name;
       
       temp_render = n_render[j];
       n_render[j] = n_render[j + 1];
       n_render[j+1] = temp_render;
       
       temp_gaming = n_gaming[j];
       n_gaming[j] = n_gaming[j + 1];
       n_gaming[j+1] = temp_gaming;
       
       temp_performance = n_performance[j];
       n_performance[j] = n_performance[j + 1];
       n_performance[j+1] = temp_performance;
       
       temp_ratio = n_ratio[j];
       n_ratio[j] = n_ratio[j + 1];
       n_ratio[j+1] = temp_ratio;
       
       temp_price = n_price[j];
       n_price[j] = n_price[j + 1];
       n_price[j+1] = temp_price;
     }
   }
  }
}


//Combined Functions
function sort_score() {
  var temp_name;
  var temp_score;
  var temp_boost;
  var temp_mem;
  var temp_power;
  
  for(var i = 0; i < c_score.length; i++){
     
   // Last i elements are already in place  
   for(var j = 0; j < ( c_score.length - i -1 ); j++){
       
     // Checking if the item at present iteration 
     // is greater than the next iteration
     if(c_score[j] > c_score[j+1]){
         
       // If the condition is true then swap them
       temp_name = c_name[j];
       c_name[j] = c_name[j + 1];
       c_name[j+1] = temp_name;
       
       temp_score = c_score[j];
       c_score[j] = c_score[j + 1];
       c_score[j+1] = temp_score;
       
       temp_boost = c_boost[j];
       c_boost[j] = c_boost[j + 1];
       c_boost[j+1] = temp_boost;
       
       temp_mem = c_mem[j];
       c_mem[j] = c_mem[j + 1];
       c_mem[j+1] = temp_mem;
       
       temp_power = c_power[j];
       c_power[j] = c_power[j + 1];
       c_power[j+1] = temp_power;
     }
   }
  }
}
function sort_boost() {
  var temp_name;
  var temp_score;
  var temp_boost;
  var temp_mem;
  var temp_power;
  
  for(var i = 0; i < c_boost.length; i++){
     
   // Last i elements are already in place  
   for(var j = 0; j < ( c_boost.length - i -1 ); j++){
       
     // Checking if the item at present iteration 
     // is greater than the next iteration
     if(c_boost[j] > c_boost[j+1]){
         
       // If the condition is true then swap them
       temp_name = c_name[j];
       c_name[j] = c_name[j + 1];
       c_name[j+1] = temp_name;
       
       temp_score = c_score[j];
       c_score[j] = c_score[j + 1];
       c_score[j+1] = temp_score;
       
       temp_boost = c_boost[j];
       c_boost[j] = c_boost[j + 1];
       c_boost[j+1] = temp_boost;
       
       temp_mem = c_mem[j];
       c_mem[j] = c_mem[j + 1];
       c_mem[j+1] = temp_mem;
       
       temp_power = c_power[j];
       c_power[j] = c_power[j + 1];
       c_power[j+1] = temp_power;
     }
   }
  }
}
function sort_mem() {
  var temp_name;
  var temp_score;
  var temp_boost;
  var temp_mem;
  var temp_power;
  
  for(var i = 0; i < c_mem.length; i++){
     
   // Last i elements are already in place  
   for(var j = 0; j < ( c_mem.length - i -1 ); j++){
       
     // Checking if the item at present iteration 
     // is greater than the next iteration
     if(c_mem[j] > c_mem[j+1]){
         
       // If the condition is true then swap them
       temp_name = c_name[j];
       c_name[j] = c_name[j + 1];
       c_name[j+1] = temp_name;
       
       temp_score = c_score[j];
       c_score[j] = c_score[j + 1];
       c_score[j+1] = temp_score;
       
       temp_boost = c_boost[j];
       c_boost[j] = c_boost[j + 1];
       c_boost[j+1] = temp_boost;
       
       temp_mem = c_mem[j];
       c_mem[j] = c_mem[j + 1];
       c_mem[j+1] = temp_mem;
       
       temp_power = c_power[j];
       c_power[j] = c_power[j + 1];
       c_power[j+1] = temp_power;
     }
   }
  }
}
function sort_power() {
  var temp_name;
  var temp_score;
  var temp_boost;
  var temp_mem;
  var temp_power;
  
  for(var i = 0; i < c_power.length; i++){
     
   // Last i elements are already in place  
   for(var j = 0; j < ( c_power.length - i -1 ); j++){
       
     // Checking if the item at present iteration 
     // is greater than the next iteration
     if(c_power[j] > c_power[j+1]){
         
       // If the condition is true then swap them
       temp_name = c_name[j];
       c_name[j] = c_name[j + 1];
       c_name[j+1] = temp_name;
       
       temp_score = c_score[j];
       c_score[j] = c_score[j + 1];
       c_score[j+1] = temp_score;
       
       temp_boost = c_boost[j];
       c_boost[j] = c_boost[j + 1];
       c_boost[j+1] = temp_boost;
       
       temp_mem = c_mem[j];
       c_mem[j] = c_mem[j + 1];
       c_mem[j+1] = temp_mem;
       
       temp_power = c_power[j];
       c_power[j] = c_power[j + 1];
       c_power[j+1] = temp_power;
     }
   }
  }
}

/*----------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------*/

//On-event Nvidia Dropdown
onEvent("n_dropdown", "change", function( ) {
  dropdown_value_n = getProperty("n_dropdown","value");
  
 /*
 NVIDIA
BEST Render Score
BEST Gaming Score
BEST Performance Total
BEST Performance/Dollar
BEST MSRP
WORST Render Score
WORST Gaming Score
WORST Performance Total
WORST Performance/Dollar
WORST MSRP
*/


  //1
  if(dropdown_value_n == "BEST Render Score"){
  sort_render();
  setText("nvidia_text_area", "The "+ n_name[n_name.length-1] + " has the Highest Render Score of " + n_render[n_render.length-1]);
  }
  //2
  else if (dropdown_value_n == "BEST Gaming Score"){
  sort_gaming(); 
  setText("nvidia_text_area", "The "+ n_name[n_name.length-1] + " has the Highest Gaming Score of " + n_gaming[n_gaming.length-1]);
  }
  //3
  else if (dropdown_value_n == "BEST Performance Total"){
  sort_performance();
  setText("nvidia_text_area", "The "+ n_name[n_name.length-1] + " has the Highest Performance Total of " + n_performance[n_performance.length-1]);
  }
  //4
  else if (dropdown_value_n == "BEST Performance/Dollar"){
  sort_ratio(); 
  setText("nvidia_text_area", "The "+ n_name[n_name.length-1] + " has the Best Performance/Total Ratio of " + n_ratio[n_ratio.length-1]);
  }
  //5
  else if (dropdown_value_n == "BEST MSRP"){
  sort_price();
  setText("nvidia_text_area", "The "+ n_name[0] + " has the Cheapest MSRP of $" + n_price[0]);
  }
  
  //FOR WORST USE [0] AND FOR BEST USE [.LENGTH-1]
  
  //6
  else if (dropdown_value_n == "WORST Render Score"){
  sort_render();
  setText("nvidia_text_area", "The "+ n_name[0] + " has the Worst Render Score of " + n_render[0]);  
  }
  //7
  else if (dropdown_value_n == "WORST Gaming Score"){
  sort_gaming();
  setText("nvidia_text_area", "The "+ n_name[0] + " has the Worst Gaming Score of " + n_gaming[0]);  
  }
  //8
  else if (dropdown_value_n == "WORST Performance Total"){
  sort_performance();
  setText("nvidia_text_area", "The "+ n_name[0] + " has the Worst Performance Score of " + n_performance[0]);  
  }
  //9
  else if (dropdown_value_n == "WORST Performance/Dollar"){
  sort_ratio();
  setText("nvidia_text_area", "The "+ n_name[0] + " has the Worst Performance/Total Ratio of " + n_ratio[0]);  
  }
  //10
  else if (dropdown_value_n == "WORST MSRP"){
  sort_price();
  setText("nvidia_text_area", "The "+ n_name[n_name.length-1] + " has the Worst MSRP of $" + n_price[n_price.length-1]);  
  }
  
  
  
});

/*----------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------*/

//On-event Combined Dropdown
onEvent("c_dropdown", "change", function( ) {
  dropdown_value_c = getProperty("c_dropdown","value");
/*
  Combined
BEST Score (%)
BEST BASE/BOOST (MHz)
BEST MEMORY (GB)
BEST WATTAGE
WORST Score (%)
WORST BASE/BOOST (MHz)
WORST MEMORY (GB)
WORST WATTAGE
*/

//ADD c_system[c_system.length-1] or [0]

//3-4 and 7-8 dont work in combined set

  //1
  if(dropdown_value_c == "BEST Score (%)"){
  sort_score();
  setText("combined_text_area", "The "+ c_name[c_name.length-1] + " has the best score of " + c_score[c_score.length-1] + "\n Runs on " +c_system[c_system.length-1]+ " Graphics");
  }
  //2
  else if (dropdown_value_c == "BEST BASE/BOOST (MHz)"){
  sort_boost();
  setText("combined_text_area", "The "+ c_name[c_name.length-1] + " has the best boost of " + c_boost[c_boost.length-1] + "\n Runs on " +c_system[c_system.length-1]+ " Graphics");
  }
  //3
  else if (dropdown_value_c == "BEST MEMORY (GB)"){
  sort_mem(); 
  setText("combined_text_area", "The "+ c_name[c_name.length-1] + " has the best memory of " + c_mem[c_mem.length-1] + " GB" + "\n Runs on " +c_system[c_system.length-1]+ " Graphics");
  }
  //4
  else if (dropdown_value_c == "BEST WATTAGE"){
  sort_power(); 
  setText("combined_text_area", "The "+ c_name[0] + " has the best wattage of " + c_power[0] + " Watts"+ "\n Runs on " +c_system[0]+ " Graphics");
  }
  //5
  else if (dropdown_value_c == "WORST Score (%)"){
  sort_score();  
  setText("combined_text_area", "The "+ c_name[0] + " has the worst score of " + c_score[0]+ "\n Runs on " +c_system[0]+ " Graphics");
  }
  //6
  else if (dropdown_value_c == "WORST BASE/BOOST (MHz)"){
  sort_boost();
  setText("combined_text_area", "The "+ c_name[0] + " has the worst boost of " + c_boost[0]+ "\n Runs on " +c_system[0]+ " Graphics");
  }
  //7
  else if (dropdown_value_c == "WORST MEMORY (GB)"){
  sort_mem(); 
  setText("combined_text_area", "The "+ c_name[0] + " has the worst memory of " + c_mem[0] + " GB" + "\n Runs on " +c_system[0]+ " Graphics");
  }
  //8
  else if (dropdown_value_c == "WORST WATTAGE"){
  sort_power();
  setText("combined_text_area", "The "+ c_name[c_name.length-1] + " has the worst wattage of " + c_power[c_power.length-1] + " Watts" + "\n Runs on " +c_system[c_system.length-1]+ " Graphics");
  }
  
});
/*----------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------*/
//Set-Screen Functions and On-events
//Home to ALL NVIDIA
onEvent("nvidiaAll", "click", function( ) {
setScreen("nvidia_data_1");
});
//ALL NVIDIA to Home
onEvent("nvidiaHome", "click", function( ) {
setScreen("homeScreen");
});

//Home to Combined  
onEvent("combinedGpu", "click", function( ) {
setScreen("combined_data_2");
});
//Combined to Home
onEvent("combinedHome", "click", function( ) {
setScreen("homeScreen");
});
