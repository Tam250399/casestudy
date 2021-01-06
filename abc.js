document.addEventListener('DOMContentLoaded', function() {
    var cardArray = [{
            name: 'img_1',
            img: "./anh/img_1.PNG"
        },
        {
            name: 'img_1',
            img: "./anh/img_1.PNG"
        },
        {
            name: 'img_2',
            img: "./anh/img_2.PNG"
        },
        {
            name: 'img_2',
            img: "./anh/img_2.PNG"
        },
        {
            name: 'img_3',
            img: "./anh/img_3.PNG"
        },
        {
            name: 'img_3',
            img: "./anh/img_3.PNG"
        },
        {
            name: 'img_4',
            img: "./anh/img_4.PNG"
        },
        {
            name: 'img_4',
            img: "./anh/img_4.PNG"
        },
        {
            name: 'img_5',
            img: "./anh/img_5.PNG"
        },
        {
            name: 'img_5',
            img: "./anh/img_5.PNG"
        },
        {
            name: 'img_6',
            img: "./anh/img_6.PNG"
        },
        {
            name: 'img_6',
            img: "./anh/img_6.PNG"
        },
        {
            name: 'img_7',
            img: "./anh/img_7.PNG"
        },
        {
            name: 'img_7',
            img: "./anh/img_7.PNG"
        },
        {
            name: 'img_8',
            img: "./anh/img_8.PNG"
        },
        {
            name: 'img_8',
            img: "./anh/img_8.PNG"
        },
        {
            name: 'img_9',
            img: "./anh/img_9.PNG"
        },
        {
            name: 'img_9',
            img: "./anh/img_9.PNG"
        },
        {
            name: 'img_10',
            img: "./anh/img_10.jpg"
        },
        {
            name: 'img_10',
            img: "./anh/img_10.jpg"
        }


    ]

    /////ramdom 

    cardArray.sort(function() { return 0.5 - Math.random() });
    ////////// khai báo

    var board = document.querySelector('.board')
    var Display = document.querySelector("#result")
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWin = []
        //////////////////////////tạo thẻ img vào html

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img') /////tạo 1 thẻ img
            card.setAttribute('src', './anh/top.jpg') ///(tên attribute,giá trị attribute ) thêm attribute vào elemen
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard) ///add sự kiện click
            board.appendChild(card) //thêm phần tử card
        }
    }

    //////check true vs fale
    function check() {
        var cards = document.querySelectorAll('img')
        var One = cardsChosenId[0]
        var Two = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            // alert('Giỏi quá')
            cards[One].setAttribute('src', './anh/white.jpg')
            cards[Two].setAttribute('src', './anh/white.jpg')
            cardsWin.push(cardsChosen)
        } else {
            cards[One].setAttribute('src', "./anh/top.jpg")
            cards[Two].setAttribute('src', "./anh/top.jpg")
                // alert('Sai rồi')
        }


        //////////////////check win
        cardsChosen = []
        cardsChosenId = []
        Display.textContent = cardsWin.length
        if (cardsWin.length === cardArray.length / 2) {
            Display.textContent = alert("YOU WIN")
            location.reload()
        }

    }

    //////////////////lật ảnh, chọn ảnh

    function flipCard() {
        b.play()
        c.currentTime = 0;
        c.play()
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(check, 400)
        }
    }
    createBoard()
})

////////////hướng dẫn

function abc() {
    alert("Tự nghĩ đi :) \n\ Không chơi bẩn")
}

////////////////////////audio 

var b = new Audio("./nhac/nhac-nen.mp3");
let c = new Audio("./nhac/lat_anh.mp3")
    // ////////// time
var count = 60;
var myVar = setInterval(startTime, 1000);

function startTime() {
    count--
    if (count == 0) {
        let time = confirm("game over bạn muốn chơi lại không")
        if (time) {
            location.reload()

        } else {
            clearInterval(myVar)

        }
    }
    document.getElementById("abc").innerHTML = count;
}