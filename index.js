Array.prototype.allUpperCase = function(){
   let result = this.map(function(arr){
    //   console.log(arr.slice(0,1))
       return arr.slice(0,1).toUpperCase() + arr.slice(1, arr.length);
  }) 
  return result.join(' ')
}

let name = ['ciputra', 'pangestu'];
console.log(name.allUpperCase())