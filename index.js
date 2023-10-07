document.addEventListener('DOMContentLoaded', () =>{

    const cardArray = [
        {
            name: 'fries',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SfzOip1ouhOKnO7nWYjwfgFmEgc4a_4UWw&usqp=CAU'
        },
        {
            name: 'cheeseburger',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJitr6KOXXmxSrxrfLmExQ04B4I1wf7v_fxw&usqp=CAU'
        },
        {
            name: 'ice-cream',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjeIn1rno1zinCpNEyTHXTdZJZRZC0sgzlBg&usqp=CAU'
        },
        {
            name: 'pizza',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSNs3eONmoOKGGaBQ2Xj1grkoCYqPjCBJ8Cw&usqp=CAU'
        },
        {
            name: 'hot dog',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQV5cQCSPHcZxpOiJNFXYjtjIhALToFuARQ&usqp=CAU '
        },
        {
            name: 'milkshake',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51bhWFvxcsvVv0RDxplHhrLJEklUR1MFeQA&usqp=CAU'
        },
        {
            name: 'fries',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SfzOip1ouhOKnO7nWYjwfgFmEgc4a_4UWw&usqp=CAU'
        },
        {
            name: 'cheeseburger',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJitr6KOXXmxSrxrfLmExQ04B4I1wf7v_fxw&usqp=CAU'
        },
        {
            name: 'ice-cream',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjeIn1rno1zinCpNEyTHXTdZJZRZC0sgzlBg&usqp=CAU'
        },
        {
            name: 'pizza',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSNs3eONmoOKGGaBQ2Xj1grkoCYqPjCBJ8Cw&usqp=CAU'
        },
        {
            name: 'hot dog',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQV5cQCSPHcZxpOiJNFXYjtjIhALToFuARQ&usqp=CAU '
        },
        {
            name: 'milkshake',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51bhWFvxcsvVv0RDxplHhrLJEklUR1MFeQA&usqp=CAU'
        }
    ]

   
    cardArray.sort(() => 0.5 - Math.random())
    console.log(cardArray)

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++){
           const card = document.createElement('img')
           card.setAttribute('src', 'src/images/blank.png')
           card.setAttribute('data-id', i)
           card.addEventListener('click', flipCard)
           grid.appendChild(card)
        }
    }

    

    function flipCard(){
       let cardsId =  this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardsId].name)
        cardsChosenIds.push(cardsId)
        this.setAttribute('src', cardArray[cardsId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 320)
        }
    } 

    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]
        let i = 0
        

        if (optionOneId == optionTwoId)
        {
            alert('Hey IDIOT!!! You have clicked the same image!')
            cards[optionOneId].setAttribute('src', 'src/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
        } else if (cardsChosen[0] === cardsChosen[1]){
            // alert('You have found a match!')
            cards[optionOneId].setAttribute('src', 'src/images/white.png')
            cards[optionTwoId].setAttribute('src', 'src/images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
            resultDisplay.textContent += 1
        } else {
            cards[optionOneId].setAttribute('src', 'src/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
            // alert('Sorry, try again!')
        }
        cardsChosen = []
        cardsChosenIds = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You have won!'
        }

        console.log(cardsChosen)

        console.log(cardsWon)
    }
   

    createBoard()


})

