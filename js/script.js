/******************************************
*****************************************/

/*** 
 * `quotes` array 
 * has 4 properties: quote, source,citation and year. 
 * quote and source is mandatory, others optional
***/
var quotes = [
    
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        source: "Nelson Mandela"
    },
    {
        quote: " You don't have to be great to start, but you have to start to be great",
        source: "Zig Ziglar"
    },    
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        source: "Winston Churchill"
    },    
    {
        quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
        source: "Albus Dumbledore",
        citation: "Harry Potter and the Prisoner of Azkaban",
        year: 1999
    },    
    {
        quote: "Life is what happens when you're busy making other plans.",
        source: "John Lennon",
        citation: "Beautiful Boy (Darling Boy) song lyrics",
        year: 1980
    },
    {
        quote: "We are all here for some special reason. Stop being a prisoner of your past. Become the architect of your future",
        source: "Robin Sharma"
    },
    {
        quote: "The journey of a thousand miles begins with one step",
        source: "Lao Tzu"
    },
    {
        quote: "The best revenge is massive success.",
        source: "Frank Sinatra"
    },
    {
        quote: "Your time is limited, don't waste it living someone else's life.",
        source: "Steve Jobs",
        year: 2005
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        source: "Eleanor Roosevelt"
    },
    {
        quote: "The only way to achieve the impossible is to believe it is possible.",
        source: "Charles Kingsleigh",
        citation:"Alice in Wonderland",
        year:2010
    },
    {
        quote: "Our greatest glory is not in never falling, but in rising every time we fall",
        source: "Confucius"
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm",
        source: "Winston Churchill"
    },
    {
        quote: "The only person you are destined to become is the person you decide to be.",
        source: "Ralph Waldo Emerson"
    }
];  //end of quotes array


/**
 * Empty array for displayed Quotes
 * array to save the  quotes displayed previously
 */
var quoteDisplayed = [];


/***
 * `getRandomQuote` function
***/

function getRandomQuote(){

    // Create an array of indices of quotes that haven't been displayed
    var quotesAvailable = quotes.filter(function (quote, index) {
        return !quoteDisplayed.includes(index);
    });

    // If all quotes have been displayed, reset the displayedQuotes array
    if (quotesAvailable.length === 0) {
        displayedQuotes = [];
        quotesAvailable = quotes.slice(); // Copy all quotes to quotesAvailable
    }
    
    //create random number ranging from 0 to the index of the last item in the quotes array
    var randomNumber = Math.floor(Math.random() * quotesAvailable.length);

    var randomQuote = quotesAvailable[randomNumber];

    if(randomQuote == quoteDisplayed){
        return getRandomQuote();
    }

    quoteDisplayed.push(quotes.indexOf(randomQuote))

    return randomQuote;
}

/***
 * `printQuote` function
***/


function printQuote() {
    // 1. Create a variable that calls the getRandomQuote()
    // function

    var randomQuote = getRandomQuote();

    // 2. Create a variable that initiates your HTML string with
    // the first two <p></p> elements, their classNames,
    // and the quote and source properties, but leave off
    // the second closing `</p>` tag for now

    var htmlScript = '<p class="quote">' + randomQuote.quote + '</p>'+
                     '<p class="source">' + randomQuote.source;

    // 3. Use an if statement to check if the citation property
    // exists, and if it does, concatenate a <span></span>
    // element, appropriate className, and citation property
    // to the HTML string

    if (randomQuote.citation) {

        htmlScript += '<span class="citation">' + randomQuote.citation + '</span>';
    }

    // 4. Use an if statement to check of the year property exists,
    // and if it does, concatenate a <span></span> element,
    // appropriate className, and year property to the HTML
    //string
    if (randomQuote.year) {
        htmlScript += '<span class="year">' + randomQuote.year + '</span>';
    }

    // 5. After the two if statements, concatenate the closing </p>
    // tag to the HTML string

    htmlScript += '</p>';
    
    // 6. set the innerHTML of the quote-box div to equal the
    // complete HTML string

    document.getElementById('quote-box').innerHTML = htmlScript;



}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener('click', printQuote);