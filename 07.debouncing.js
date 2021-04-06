let counter = 0 ;

function getData(){
    console.log('getData called',counter++)
}

let doSomeMagic = function(fn,delay){
    let timer;
    return function(){
        let context = this,
        arg = arguments;
        clearTimeout(timer)
        timer = setTimeout(()=>{
            getData.apply(context,arg)
        },delay)
    }
}

let betterFunction = doSomeMagic(getData,300)

// function debounce(func, wait, immediate) {
//     var timeout;
  
//     return function executedFunction() {
//       var context = this;
//       var args = arguments;
          
//       var later = function() {
//         timeout = null;
//         if (!immediate) func.apply(context, args);
//       };
  
//       var callNow = immediate && !timeout;
      
//       clearTimeout(timeout);
  
//       timeout = setTimeout(later, wait);
      
//       if (callNow) func.apply(context, args);
//     };
//   };

//   var returnedFunction = debounce(function() {
//     // The function's code
// }, 250);

// window.addEventListener('resize', returnedFunction);