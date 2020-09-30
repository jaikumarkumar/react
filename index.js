//regular fun
function sum(x,y){    
    var add = x+y;
    console.log(add);

}
sum(25,15);

//named function
function named(name1,name2){
    console.log(`${name1+name2}`);
}
named('jai','kumar');

//anonyms function expression
var annonyms = function (name,surname){
    console.log(`${name+surname}`);
}
annonyms('jai','k');

//named function expression
var named_fun = function (father,mother){
    console.log(`${father+mother}`);
}
named_fun('kumar','selvi');

//arrow function
var arrowed = (bank,school)=>{
    console.log(`${bank+school}`);
}
arrowed('ibbs','aruna');
//IIEF
(function (myname){ console.log(`${myname}`);  })('my name is jaikumar');

//()