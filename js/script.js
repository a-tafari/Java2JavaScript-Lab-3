" use strict ";
var phonebook = new Object();
phonebook["Abijah"]= "2676257266";
function PhoneBook(){

};

function listAllNames() {
  // code to list all names
  var names = "";
  for (var key in phonebook) {
    names +=key+ "</br>";
  }
  display.innerHTML= names;
};

function listAllNumbers() {
  // code to list all numbers
  var string="";
  for (var key in phonebook){
    string += key + "number: " + phonebook[key] + "</br>";
  }
  display.innerHTML = string;
};

function showAdd() {
  var name = prompt("Enter full name");
  var number = prompt("Enter phone number");
  phonebook[name]= number;
  console.log(phonebook[name]);
};

function showRemove() {
  var remove = prompt("Enter name to remove");
  for (var x in phonebook){
    console.log(x);
    if(x== remove){
      delete phonebook[x];
    }
  }
};

function showLookup() {
  var lookup = prompt("Enter number to lookup");
  for (var x in phonebook){
    if (phonebook[x]== lookup){
      display.innerHTML= x;
    }
  }
};

var display = document.getElementById("display");
