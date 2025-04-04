// query selector variables

var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var unmotivationalPostersArray = [
  {
    name: "FAILURE",
    description: "Why bother trying? It's probably not worth it.",
    price: 68.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/failure.jpg",
  },
  {
    name: "MEDIOCRITY",
    description: "Dreams are just that—dreams.",
    price: 127.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/mediocrity.jpg",
  },
  {
    name: "REGRET",
    description: "Hard work rarely pays off.",
    price: 89.00,
    year: 2018,
    vintage: true,
    img_url:  "./assets/regret.jpg",
  },
  {
    name: "FUTILITY",
    description: "You're not good enough.",
    price: 150.00,
    year: 2016,
    vintage: false,
    img_url:  "./assets/futility.jpg",
  },
  {
    name: "DEFEAT",
    description: "It's too late to start now.",
    price: 35.00,
    year: 2023,
    vintage: false,
    img_url:  "./assets/defeat.jpg",
  },
  {
    name: "HOPELESSNESS",
    description: "Stay in your comfort zone; it's safer.",
    price: 112.00,
    year: 2020,
    vintage: true,
    img_url: "./assets/hopelessness.jpg",
  },
  {
    name: "LAZINESS",
    description: "You can't change anything.",
    price: 25.00,
    year: 2022,
    vintage: false,
    img_url: "./assets/laziness.jpg",
  },
  {
    name: "PROCRASTINATION",
    description: "Better to avoid failure by not trying at all.",
    price: 48.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/procrastination.jpg",
  },
  {
    name: "DESPAIR",
    description: "Let someone else do it; you’ll just mess it up.",
    price: 73.00,
    year: 2015,
    vintage: false,
    img_url: "./assets/despair.jpg",
  },
  {
    name: "NEGLECT",
    description: "Happiness is overrated.",
    price: 160.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/neglect.jpg",
  },
  {
    name: "FEAR",
    description: "Giving up is always an option.",
    price: 91.00,
    year: 2014,
    vintage: false,
    img_url: "./assets/fear.jpg",
  },
  {
    name: "APATHY",
    description: "No one cares about your effort.",
    price: 110.00,
    year: 2016,
    vintage: true,
    img_url: "./assets/apathy.jpg",
  },
  {
    name: "MISERY",
    description: "Why take risks when you can stay stagnant?",
    price: 55.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/misery.jpg",
  },
  {
    name: "BLAME",
    description: "Expect disappointment and you'll never be disappointed.",
    price: 39.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/blame.jpg",
  },
  {
    name: "DOUBT",
    description: "Success is for other people, not you.",
    price: 140.00,
    year: 2020,
    vintage: false,
    img_url: "./assets/doubt.jpg",
  }
];
var cleanedUnmotivationalPosters = [];

var savedPosters = [];

var currentPoster;

var randPosterButton = document.querySelector('.show-random')
var posterTitle = document.querySelector('.poster-title')
var posterQuote = document.querySelector('.poster-quote')
var posterImage = document.querySelector('.poster-img')

var makePosterButton = document.querySelector('.show-form')
var mainPoster = document.querySelector('.main-poster')
var posterForm = document.querySelector('.poster-form')

var takeMeBack = document.querySelector('.show-main')

var showSavedPostersButton = document.querySelector('.show-saved')

var savedPostersView = document.querySelector('.saved-posters')

var backButton = document.querySelector('.back-to-main')

var userImage = document.querySelector('#poster-image-url')
var userTitle = document.querySelector('#poster-title')
var userQuote = document.querySelector('#poster-quote')

var showPosterButton = document.querySelector('.make-poster')

var savePosterButton = document.querySelector('.save-poster')

var posterGrid = document.querySelector('.saved-posters-grid')

var unmotivationalPosterButton = document.querySelector('.unmotivational')

var unmotivationalPosters = document.querySelector('.unmotivational-posters')

var unmotivationalBackButton = document.querySelector('.back-button')

var unmotivationalGrid = document.querySelector('.unmotivational-posters-grid')

randomPoster()
cleanData()

// event listeners

randPosterButton.addEventListener("click",randomPoster)

makePosterButton.addEventListener("click",makePosters)

takeMeBack.addEventListener("click",backToMain)

showSavedPostersButton.addEventListener("click",showSavedPosters)

backButton.addEventListener("click", function(){
  backToMain()
  clearSavedPosters()
})

showPosterButton.addEventListener("click",userPoster)

savePosterButton.addEventListener("click",savePoster)

unmotivationalPosterButton.addEventListener("click", displayUnmotivationalPosters)

unmotivationalBackButton.addEventListener("click", function(){
  takeBackToMain()
  clearUnmotivationalPosters()
})

unmotivationalPosters.addEventListener("dblclick",removeUnmotivationalPoster)

posterGrid.addEventListener("dblclick", createModal)

// functions and event handlers

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote}
}

function randomPoster(){
  posterTitle.innerText = titles[getRandomIndex(titles)]
  posterQuote.innerText = quotes[getRandomIndex(quotes)]
  posterImage.src = images[getRandomIndex(images)]

  currentPoster = createPoster( posterImage.src,posterTitle.innerText,posterQuote.innerText)
}

function makePosters(){
  mainPoster.style.display = 'none'
  posterForm.classList.remove("hidden")
}

function showSavedPosters(){
  mainPoster.style.display = 'none'
  savedPostersView.classList.remove("hidden") 

  for (var i = 0; i < savedPosters.length; i++){

    posterGrid.innerHTML += 
    `<div class="mini-poster" data-title="${savedPosters[i].title}">
    <img class="img" src=${savedPosters[i].imageURL}>
    <h2 class="poster-title">${savedPosters[i].title}</h2>
    <h4 class="poster-quote">${savedPosters[i].quote}</h4>
    </div>`
  }
}

function backToMain(){
  posterForm.classList.add("hidden")
  savedPostersView.classList.add("hidden") 
  mainPoster.style.display = 'block'
}

function clearSavedPosters() {
  posterGrid.innerHTML = ''
}

function userPoster(event){
  event.preventDefault()

  currentPoster = createPoster(userImage.value,userTitle.value,userQuote.value)

  images.push(currentPoster.imageURL)
  titles.push(currentPoster.title)
  quotes.push(currentPoster.quote)

  posterForm.classList.add("hidden")
  mainPoster.style.display = 'block'

  posterTitle.innerText = currentPoster.title
  posterQuote.innerText = currentPoster.quote
  posterImage.src= currentPoster.imageURL
  posterImage.alt= 'a motivational image'

}

function savePoster(){
  if(!savedPosters.includes(currentPoster)){
    savedPosters.push(currentPoster)
  }
}

function displayUnmotivationalPosters(){
  mainPoster.style.display = 'none'
  unmotivationalPosters.classList.remove("hidden") 

  for (var i =0; i < cleanedUnmotivationalPosters.length; i++){ 
    unmotivationalGrid.innerHTML += 
    `<div class="mini-poster unmotivational-mini" data-title="${cleanedUnmotivationalPosters[i].title}"> 
    <img class="img" src=${cleanedUnmotivationalPosters[i].imageURL}>
    <h2 class="poster-title">${cleanedUnmotivationalPosters[i].title}</h2>
    <h4 class="poster-quote">${cleanedUnmotivationalPosters[i].quote}</h4>
    </div>`
}}

function takeBackToMain() {
  unmotivationalPosters.classList.add("hidden") 
  mainPoster.style.display = 'block'
}

function clearUnmotivationalPosters(){
  unmotivationalGrid.innerHTML = ''
}

function cleanData(){
  for (var i = 0; i < unmotivationalPostersArray.length; i++){
    var newPoster = createPoster(unmotivationalPostersArray[i].img_url,unmotivationalPostersArray[i].name,unmotivationalPostersArray[i].description)

    if(!cleanedUnmotivationalPosters.some(poster => poster.title === newPoster.title)){ //returns true if this condition is met but the ! flips it to be false
      cleanedUnmotivationalPosters.push(newPoster) 
    }
  }
}

function removeUnmotivationalPoster(){
  const miniPoster = event.target.closest(".mini-poster")
  let title = miniPoster.dataset.title

  var index;

  for (var i=0; i < cleanedUnmotivationalPosters.length; i++){ 
    if (title === cleanedUnmotivationalPosters[i].title){ 
      index = i
      break
    }
  }
  cleanedUnmotivationalPosters.splice(index,1) 
  event.target.closest(".mini-poster").classList.add("hidden")
  
}

function createModal() {
  const savedMiniPoster = event.target.closest(".mini-poster")
  let title = savedMiniPoster.dataset.title
 
  let poster; 
  for (var i = 0; i < savedPosters.length; i++){
    if (title === savedPosters[i].title){
      poster = savedPosters[i]
    }
  }

  posterGrid.innerHTML += 
  `<section class="modal hidden">
    <div class="poster">
    <img class="poster-img" src=${poster.imageURL}>
    <h1 class="poster-title">${poster.title}</h1>
    <h3 class="poster-quote">${poster.quote}</h3>
    <button class="btn-close">x</button>
    </div>
  </section>
  <div class="overlay hidden"></div>`
}





