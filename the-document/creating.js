// CREATING ELEMENTS

console.log('creating js');

const myParagraph = document.createElement("p");
myParagraph.textContent = 'i am a p tag';
myParagraph.classList.add('special');
// console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = "https://source.unsplash.com/random/300x300";
myImage.alt = "nice photo!";
// console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper')
// console.log(myDiv);

// this will trigger a re-paint of the page - everytime hit the document object

// document.body.appendChild(myParagraph);
// document.body.appendChild(myImage);
// document.body.appendChild(myDiv);
// myDiv.appendChild(myParagraph)

// myDiv.appendChild(myParagraph)
// myDiv.appendChild(myImage)
// document.body.appendChild(myDiv);


// add to the top
// const heading = document.createElement('h2');
// heading.textContent = 'a really cool heading';
// myDiv.insertAdjacentElement('afterbegin', heading);

const unorderedList = document.createElement('ol');

const myLi          = document.createElement('li');
myLi.textContent = 'one'

const myLi2 = document.createElement("li");
myLi2.textContent = "two";

const myLi3 = document.createElement("li");
myLi3.textContent = "three";

const myLi4 = document.createElement("li");
myLi4.textContent = "four";

const myLi5 = myLi4.cloneNode();
myLi5.textContent = "five";

unorderedList.append(myLi);
unorderedList.append(myLi2);
unorderedList.append(myLi3);
unorderedList.append(myLi4);
unorderedList.append(myLi5);

document.body.append(unorderedList);
