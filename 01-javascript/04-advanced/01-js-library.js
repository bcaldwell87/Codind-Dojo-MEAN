const _ = {
    map: function(array, callback) {
      for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
      }
    },
    reduce: function(array, callback, memo){
        let el = 0;
        if (!memo){
          memo = array[0];
          el = 1;
        }
        for (let i = el; i < array.length; i++) {
          memo = callback(array[i], memo);
        }
        return memo;
  
    },
    find: function(array, callback) {
      for (let i = 0; i < array.length; i++) {
        if (callback(array[i])){
          return array[i];
        }
      }
    },
    filter: function(array, callback) {
      const tempArray = [];
      for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
          tempArray.push(array[i]);
        }
      }
      // we could also modify the original array
      return tempArray;
    },
    reject: function(array, callback) {
      const tempArray = [];
      for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
          tempArray.push(array[i]);
        }
      }
      // we could also modify the original array
      return tempArray;
    },
  }
  
  const array = [3, 4, 5];
  _.map(array, function callback(x) { return x * 5; });
  console.log(array);
  console.log(_.reduce(array, function callback(x, memo) { return x + memo; }));
  console.log(_.find(array, function callback(x) { return x === 15; }));
  // note: we used named functions for clarity above, but we can also pass anonymous functions as the second parameter:
  console.log(_.filter(array, function(x) { return x > 20; }));

//   /**
//  *
//  * Requires Node >= v7
//  *
//  */

// function each(array, callback) {
//     for (const [index, element] of array.entries()) {
//       callback(element, index);
//     }
//   }
  
//   function map(array, callback) {
//     const results = [];
  
//     // using each is a more functional approach, rather than writing a for loop for every action
//     each(array, (element, index) => {
//       results.push(callback(element, index));
//     });
  
//     return results;
//   }
  
//   function filter(array, callback) {
//     const results = [];
  
//     each(array, (element, index) => {
//       // why compare with true if all evaluations are reduced to a boolean value?
//       // this enforces the need for our callback to filter (and reject, find, etc) to return a boolean value,
//       // rather than any value, which may have been a mistake
//       if (callback(element, index) === true) {
//         results.push(element);
//       }
//     });
  
//     return results;
//   }
  
//   function find(array, callback) {
//     for (const [index, element] of array.entries()) {
//       if (callback(element, index) === true) {
//         return element;
//       }
//     }
//   }
  
//   function reject(array, callback) {
//     const results = [];
  
//     each(array, (element, index) => {
//       if (callback(element, index) === false) {
//         results.push(element);
//       }
//     });
  
//     return results;
//   }
  
//   function reduce(array, callback, memo) {
//     // we don't ever want to perform destructive tasks on the original array,
//     // thus we make a copy
//     const clone = [].concat(array);
  
//     if (memo === undefined) {
//       // this destructive action only affects the copy of the array, not the original
//       memo = clone.pop();
//     }
  
//     each(clone, (element, index) => {
//       memo = callback(memo, element, index);
//     });
  
//     return memo;
//   }
  
//   const _ = {
//     each,
//     filter,
//     find,
//     map,
//     reduce,
//     reject,
//   };
  
//   /**
//    * Use our new underscore/lodash library
//    */
  
//   const stringArray = ['squid', 'fish', '1', '2', 'dog', '3', '4', '5', '6', '7', 'cat', 8, 10];
  
  
//   _.each(stringArray, (element, index) => {
//     console.log(`The element ${ element } was found at index ${ index }`);
//   });
  
//   // Our goal is to take this stringArray, convert all values to integers,
//   // remove non-integer values, grab all even values and finally sum those values.
  
  
//   //  But first...
  
//   console.log(`We found a ${ _.find(stringArray, element => element === 'dog') } in the stringArray`);
  
  
//   let results = _.map(stringArray, element => parseInt(element, 10));
//   // ES2015+ fat arrow functions allow for implicit returns with single line statements
//   // The above is equivalent to this:
//   // let results = _.map(stringArray, element => { return  parseInt(element, 10); });
  