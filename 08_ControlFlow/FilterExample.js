// Simple Example And Syntax of Filter
// let arr = [1,2,3]
// let ans = arr.filter( (num) => num > 0)
// console.log(ans);
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
        publishedYear: 1995,
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

let AvailableBooks = books.filter( (AB) => (AB.available == true) )
// console.log(AvailableBooks);

// Check Publish Year is Greater than 2000
let PublishYear = books.filter( (PB) => (PB.publishedYear) > 2000 )
// console.log(PublishYear);

// Find Book Publish Year is Greater than 1995 and Genre is Programming
let ans = books.filter( (result) => {
    return result.genre == "Programming" && result.publishedYear > 1995
})
console.log(ans);

