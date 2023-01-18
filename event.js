/*document.querySelector('button').addEventListener('click',function(){
    alert('Hiiiiiii');
});

// function myfunction(){
//     alert('Hi');
// }*/


// h1 style-------------

/*var myVar=document.querySelector('h1');
myVar.addEventListener('click',function(){
alert('Hellow.....');
});*/

/*var myVar=document.querySelector('h1');
myVar.addEventListener('mouseover',function(){
    myVar.classList.add('my-style');
})
var myVar=document.querySelector('h1');
myVar.addEventListener('mouseout',function(){
    myVar.classList.remove('my-style');
})*/


// multi event listener-------


/*document.querySelectorAll('.myBtn')[0].addEventListener('click',function(){
    var text=this.innerHTML;
    document.querySelector('h1').innerHTML=text + ' is cliked';
})
document.querySelectorAll('.myBtn')[1].addEventListener('click',function(){
    var text=this.innerHTML;
    document.querySelector('h1').innerHTML=text + ' is cliked';
})
document.querySelectorAll('.myBtn')[2].addEventListener('click',function(){
    var text=this.innerHTML;
    document.querySelector('h1').innerHTML=text + ' is cliked';
})*/

var len=document.querySelectorAll('.myBtn').length;
for(var i=0;i<len;i++){
    document.querySelectorAll('.myBtn')[i].addEventListener('click',function(){
        var text=this.innerHTML;
        document.querySelector('h1').innerHTML=text + ' is cliked';
    })
}