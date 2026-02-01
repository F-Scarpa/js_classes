class Media {
  constructor(title) {
    //allows to modify title but force ischecked out to false and rating to empty array
    this._title = title;
    this._isCheckedOut = false;
    this._rating = [];
  }

  //getter methods
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get rating() {
    return this._rating;
  }

  //methods inside classes doesnt require function keyword
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    const ratingSum = this.rating.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return ratingSum / this.rating.length;
  }

  addRating(score) {
    this.rating.push(score);
  }

  set isCheckedOut(boolVal) {
    this._isCheckedOut = boolVal;
  }
}

//inerhit all getter setter and methods
class Book extends Media {
  constructor(author, title, pages) {
    super(title); //inherit from parent class
    this._author = author;
    this._page = pages;
  }

  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    //super also inherit properties we don need to create isCheckedOut and ratings
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

//create a istance of a class
const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);

//console.log(historyOfEverything);
historyOfEverything.toggleCheckOutStatus();
//use getter to print propery (dont use underscore)
//console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

//console.log(historyOfEverything.getAverageRating());

const speed = new Movie("Jan de Bont", "Speed", 116);
console.log(speed);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
