// also called callback methods
// they take a callback function

// data
const feedback = [
  {comment: 'Love the burgs', rating: 4},
  {comment: 'Horrible service', rating: 2},
  {comment: 'Smoothies are great, liked the burger too', rating: 5},
  {comment: 'Ambiance needs work', rating: 3},
  {comment: 'I DONT LIKE BURGERS', rating: 1},
];

const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

const util = {
  findBurgRating: function (singleFeedback) {
    return singleFeedback.comment.includes('burg');
  },

  findSmoothieRating: function(singleFeedback) {
    return singleFeedback.comment.includes('Smoothie');
  },

  findByWord: function(word) {
    return function(singleFeedback) {
      return singleFeedback.comment.includes(word);
    }
  }
};

// the argument for find is a function that returns true or false - a higherorder function
const burgFinder = feedback.find(util.findBurgRating);
const smoothieFinder = feedback.find(util.findSmoothieRating);

// should you call the function when you - find by word only returns a function
const loveFinder = feedback.find(util.findByWord('Love'));

console.log(burgFinder);
console.log(smoothieFinder);
console.log(loveFinder);

// find all the comments that have a rating greater than two

const filterByMinRating = function(minRating) {
  return function(singleFeedback) {
    return singleFeedback.rating >= minRating;
  }
}

const goodReviews = feedback.filter(filterByMinRating(2));

console.table(goodReviews);
console.log(goodReviews);

const burgComments = feedback.filter(util.findByWord('burg'))

console.table('burgComments', burgComments);

const dataWash = feedback.filter(singleFeedback => singleFeedback.rating > 1);

console.log(dataWash);

// .some looping method
const isThereEnoughOfAtLeastOneMeat = Object.values(meats).some(meat => meat >= 5);

console.log(isThereEnoughOfAtLeastOneMeat);

// make sure there is at least 3 of every meat with every

const isThereAtLeastThree = Object.values(meats).every(meat => meat >= 3);
console.log(isThereAtLeastThree);

const numbers = [1,2,100,3,200,400,155];
// sort takes a compare callback function - sorts things alphabetically
const numbersSorted = numbers.sort();
console.log(numbersSorted);

function compare(first, second) {
  return first - second;
  // if (first > second) {
  //   return 1
  // } else if (second > first) {
  //   return -1
  // } else {
  //   return 0;
  // }
}

const numbersSorted2 = numbers.sort(compare);
console.log(numbers);
console.log(numbersSorted2);

