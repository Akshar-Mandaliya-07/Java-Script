const arr = [1,2,3]
const ans = arr.reduce( (accumlator,currentValue) =>  accumlator + currentValue,0)
console.log(ans);

// const value1 = arr.reduce( function (accumlator,currentValue) {
//     return accumlator + currentValue
// },0)
// console.log(value1);

const books = [
    {
        id: 1,
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self Help",
        publishedYear: 2018,
        pages: 320,
        price: 499,
        available: true
    },
    {
        id: 2,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Fiction",
        publishedYear: 1988,
        pages: 208,
        price: 350,
        available: true
    },
    {
        id: 3,
        title: "Clean Code",
        author: "Robert C. Martin",
        genre: "Programming",
        publishedYear: 2008,
        pages: 464,
        price: 799,
        available: false
    },
    {
        id: 4,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        genre: "Finance",
        publishedYear: 1997,
        pages: 336,
        price: 450,
        available: true
    },
    {
        id: 5,
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        genre: "Programming",
        publishedYear: 2008,
        pages: 176,
        price: 599,
        available: true
    },
    {
        id: 6,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        genre: "Finance",
        publishedYear: 2020,
        pages: 256,
        price: 550,
        available: false
    },
    {
        id: 7,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        genre: "Self Help",
        publishedYear: 1937,
        pages: 238,
        price: 299,
        available: true
    },
    {
        id: 8,
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        genre: "Programming",
        publishedYear: 2015,
        pages: 278,
        price: 650,
        available: true
    }
];

// calculate book price
const BookPrice = books.reduce( (accumlator,book) => accumlator + book.price,0)
console.log(BookPrice);

