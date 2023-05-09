const foodItem = [
    {
        id: 1,
        name: 'Ambur Burger',
        category: 'Burger',
        rating: 4.3,
        price: 13,
        img: 'images/slide-1.png',
        quantity: 1
    },
    {
        id: 2,
        name: 'Hyderabadi Burger',
        category: 'Burger',
        rating: 4.3,
        price: 15,
        img: 'images/slide-2.png',
        quantity: 1
    },
    {
        id: 3,
        name: 'Egg Burger',
        category: 'Burger',
        rating: 4.3,
        price: 18,
        img: 'images/slide-3.png',
        quantity: 1
    },
    {
        id: 4,
        name: 'Goan Fish Burger',
        category: 'Burger',
        rating: 4.3,
        price: 15,
        img: 'images/slide-4.png',
        quantity: 1
    },
    {
        id: 5,
        name: 'Mutton Burger',
        category: 'Burger',
        rating: 4.3,
        price: 10,
        img: 'images/slide-1.png',
        quantity: 1
    },
    {
        id: 6,
        name: 'Kamrupi Burger',
        category: 'Burger',
        rating: 4.3,
        price: 12,
        img: 'images/slide-2.png',
        quantity: 1
    },
    /*{
        id: 7,
        name: 'Kashmiri Burger',
        category: 'Burger',
        rating: 4.3,
        price: 13,
        img: 'images/slide-3.png',
        quantity: 1
    },
    {
        id: 8,
        name: 'Memoni Burger',
        category: 'Burger',
        rating: 4.3,
        price: 20,
        img: 'images/slide-4.png',
        quantity: 1
    },
    {
        id: 9,
        name: 'Mughlai Burger',
        category: 'Burger',
        rating: 4.3,
        price: 15,
        img: 'images/slide-1.png',
        quantity: 1
    },*//*--------------------------------------------------------------------------*/
    {
        id: 10,
        name: 'Chicken Roast',
        category: 'chicken',
        rating: 4.3,
        price: 11,
        img: 'images/slide-2.png',
        quantity: 1
    },
    {
        id: 11,
        name: 'Chicken Curry',
        category: 'chicken',
        rating: 4.3,
        price: 10,
        img: 'images/slide-3.png',
        quantity: 1
    },
    {
        id: 12,
        name: 'Chicken Do Pyaza',
        category: 'chicken',
        rating: 4.3,
        price: 14,
        img: 'images/slide-4.png',
        quantity: 1
    },
    {
        id: 13,
        name: 'Chicken Masala',
        category: 'chicken',
        rating: 4.3,
        price: 12,
        img: 'images/slide-1.png',
        quantity: 1
    },
    {
        id: 14,
        name: 'Handi Chicken',
        category: 'chicken',
        rating: 4.3,
        price: 17,
        img: 'images/slide-4.png',
        quantity: 1
    },
    {
        id: 15,
        name: 'Murgh Musallam',
        category: 'chicken',
        rating: 4.3,
        price: 20,
        img: 'images/slide-1.png',
        quantity: 1
    },
    {
        id: 16,
        name: 'Matar chicken',
        category: 'chicken',
        rating: 4.3,
        price: 15,
        img: 'images/slide-2.png',
        quantity: 1
        /*--------------------------------------------------------------------------*/
    },
    {
        id: 17,
        name: 'Palak platter',
        category: 'platter',
        rating: 4.3,
        price: 10,
        img: 'images/slide-3.png',
        quantity: 1
    },
    {
        id: 18,
        name: 'platter Butter Masala',
        category: 'platter',
        rating: 4.3,
        price: 15,
        img: 'images/slide-4.png',
        quantity: 1

    },
    {
        id: 19,
        name: 'platter Do Pyaza',
        category: 'platter',
        rating: 4.3,
        price: 12,
        img: 'images/slide-1.png',
        quantity: 1

    },
    {
        id: 20,
        name: 'Hyderabadi platter',
        category: 'platter',
        rating: 4.3,
        price: 8,
        img: 'images/slide-2.png',
        quantity: 1
    },
    {
        id: 21,
        name: 'platter Lababdar',
        category: 'platter',
        rating: 4.3,
        price: 7,
        img: 'images/slide-3.png',
        quantity: 1
    },/*
    {
        id: 22,
        name: 'Shahi Paneer',
        age: '32',
        category: 'paneer',
        rating: 4.3,
        price: 5,
        img: 'images/slide-4.png',
        quantity: 1
    },*//*--------------------------------------------------------------------------------*/
    {
        id: 23,
        name: 'Navratan Korma',
        category: 'vegetable',
        rating: 4.3,
        price: 8,
        img: 'images/slide-1.png',
        quantity: 1
    },
    {
        id: 24,
        name: 'Veg Jalfrezi',
        category: 'vegetable',
        rating: 4.3,
        price: 7,
        img: 'images/slide-2.png',
        quantity: 1
    },
    {
        id: 25,
        name: 'Veg Biryani',
        category: 'vegetable',
        rating: 4.3,
        price: 5,
        img: 'images/slide-3.png',
        quantity: 1
    },
    {
        id: 26,
        name: 'Veg Curry',
        category: 'vegetable',
        rating: 4.3,
        price: 7,
        img: 'images/slide-4.png',
        quantity: 1
    },
    {
        id: 27,
        name: 'Veg Kolhapur',
        category: 'vegetable',
        rating: 4.3,
        price: 10,
        img: 'images/slide-1.png',
        quantity: 1
    },
    {
        id: 28,
        name: 'Veg Masala',
        category: 'vegetable',
        rating: 4.3,
        price: 4,
        img: 'images/slide-2.png',
        quantity: 1
    },
    {
        id: 29,
        name: 'Veg Pakora',
        category: 'vegetable',
        rating: 4.3,
        price: 4,
        img: 'images/slide-3.png',
        quantity: 1
    },/*--------------------------------------------------------------------------*/
    {
        id: 30,
        name: 'Momos',
        category: 'pizza',
        rating: 4.3,
        price: 8,
        img: 'images/slide-4.png',
        quantity: 1
    },
    {
        id: 31,
        name: 'Chicken Manchurian',
        category: 'pizza',
        rating: 4.3,
        price: 7,
        img: 'images/slide-1.png',
        quantity: 1
    },
    {
        id: 32,
        name: 'Chili Chicken',
        category: 'pizza',
        rating: 4.3,
        price: 5,
        img: 'images/slide-2.png',
        quantity: 1
    },
    {
        id: 33,
        name: 'Chowmein',
        category: 'pizza',
        rating: 4.3,
        price: 16,
        img: 'images/slide-3.png',
        quantity: 1
    },
    {
        id: 34,
        name: 'Spring Roll',
        category: 'pizza',
        rating: 4.3,
        price: 14,
        img: 'images/slide-4.png',
        quantity: 1
    },
    {
        id: 35,
        name: 'Szechuan Chicken',
        category: 'pizza',
        rating: 4.3,
        price: 10,
        img: 'images/slide-1.png',
        quantity: 1
    },/*
    {
        id: 36,
        name: 'Fried Rice',
        category: 'chinese',
        rating: 4.3,
        price: 8,
        img: 'images/slide-2.png',
        quantity: 1
    },*//*-----------------------------------------------------------------------*/
    {
        id: 37,
        name: 'Butter Masala Dosa',
        category: 'kingsBurger',
        rating: 4.3,
        price: 18,
        img: 'images/slide-3.png',
        quantity: 1
    },
    {
        id: 38,
        name: 'Idli',
        category: 'kingsBurger',
        rating: 4.3,
        price: 20,
        img: 'images/slide-4.png',
        quantity: 1
    },
    {
        id: 39,
        name: 'Butter Masala Dosa',
        category: 'kingsBurger',
        rating: 4.3,
        price: 18,
        img: 'images/slide-3.png',
        quantity: 1
    },
    {
        id: 40,
        name: 'Idli',
        category: 'kingsBurger',
        rating: 4.3,
        price: 20,
        img: 'images/slide-4.png',
        quantity: 1
    },
    {
        id: 41,
        name: 'Butter Masala Dosa',
        category: 'kingsBurger',
        rating: 4.3,
        price: 18,
        img: 'images/slide-3.png',
        quantity: 1
    },
    {
        id: 42,
        name: 'Idli',
        category: 'kingsBurger',
        rating: 4.3,
        price: 20,
        img: 'images/slide-4.png',
        quantity: 1
    },
]
console.log(foodItem)
/*function displayItems() {
    var burger = document.getElementById('Burger');
    var platter = document.getElementById('platter');;
    var chicken = document.getElementById('chicken');
    var salad = document.getElementById('vegetable');
    var pizza = document.getElementById('pizza');
    var kingsBurger = document.getElementById('kingsBurger');

    const burgerData = foodItem.filter((item) => item.category == 'Burger');
    const chickenData = foodItem.filter((item) => item.category == 'chicken');
    const platterData = foodItem.filter((item) => item.category == 'paneer');
    const saladData = foodItem.filter((item) => item.category == 'vegetable');
    const pizzaData = foodItem.filter((item) => item.category == 'pizza');
    const kingsBurgerData = foodItem.filter((item) => item.category == 'kingsBurger');

    burgerData.map(item => {

        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card')

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        biryani.appendChild(itemCard);

    })


    chickenData.map(item => {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card')

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        chicken.appendChild(itemCard)

    })

    platterData.map(item => {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card')

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        paneer.appendChild(itemCard)

    })

    saladData.map(item => {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card')

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);


        vegetable.appendChild(itemCard)

    })

    pizzaData.map(item => {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card')

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);


        chinese.appendChild(itemCard)

    })

    kingsBurgerData.map(item => {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card')

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        southIndian.appendChild(itemCard)

    })
}
displayItems();


const vegData = [...new Map(foodItem.map(item => [item['category'], item])).values()];
console.log(vegData);

function selectTaste() {
    var categoryList = document.getElementById('category-list');

    vegData.map(item => {
        console.log(item)
        var listCard = document.createElement('div');
        listCard.setAttribute('class', 'list-card');

        var listImg = document.createElement('img');
        listImg.src = item.img;

        var listName = document.createElement('a');
        listName.setAttribute('class', 'list-name');
        listName.innerText = item.category;
        listName.setAttribute('href', '#' + item.category)

        listCard.appendChild(listImg);
        listCard.appendChild(listName);

        var cloneListCard = listCard.cloneNode(true);
        categoryList.appendChild(listCard);
        document.querySelector('.category-header').appendChild(cloneListCard)
    })
}
selectTaste();


document.querySelectorAll('.add-to-cart').forEach(item => {
    item.addEventListener('click', addToCart)
})

var cartData = [];
function addToCart() {

    var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj = foodItem.find(element => element.name == itemToAdd);

    var index = cartData.indexOf(itemObj);
    if (index === -1) {
        document.getElementById(itemObj.id).classList.add('toggle-heart');
        cartData = [...cartData, itemObj];
    }
    else if (index > -1) {
        alert("Added to cart!");
    }

    document.getElementById('cart-plus').innerText =
        ' ' + cartData.length + ' Items';
    document.getElementById('m-cart-plus').innerText =
        ' ' + cartData.length;
    totalAmount();
    cartItems();
}


function cartItems() {
    var tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    cartData.map(item => {
        var tableRow = document.createElement('tr');

        var rowData1 = document.createElement('td');
        var img = document.createElement('img');
        img.src = item.img;
        rowData1.appendChild(img);

        var rowData2 = document.createElement('td');
        rowData2.innerText = item.name;

        var rowData3 = document.createElement('td');
        var btn1 = document.createElement('button');
        btn1.setAttribute('class', 'decrease-item');
        btn1.innerText = '-';
        var span = document.createElement('span');
        span.innerText = item.quantity;
        var btn2 = document.createElement('button');
        btn2.setAttribute('class', 'increase-item');
        btn2.innerText = '+';

        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);

        var rowData4 = document.createElement('td');
        rowData4.innerText = item.price;

        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);

        tableBody.appendChild(tableRow);
    })
    document.querySelectorAll('.increase-item').forEach(item => {
        item.addEventListener('click', incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item => {
        item.addEventListener('click', decrementItem)
    })
}


function incrementItem() {
    let itemToInc = this.parentNode.previousSibling.innerText;
    console.log(itemToInc)
    var incObj = cartData.find(element => element.name == itemToInc);
    incObj.quantity += 1;

    currPrice = (incObj.price * incObj.quantity - incObj.price * (incObj.quantity - 1)) / (incObj.quantity - 1);
    incObj.price = currPrice * incObj.quantity;
    totalAmount()
    cartItems();
}

var currPrice = 0;
function decrementItem() {
    let itemToInc = this.parentNode.previousSibling.innerText;
    let decObj = cartData.find(element => element.name == itemToInc);
    let ind = cartData.indexOf(decObj);
    if (decObj.quantity > 1) {
        currPrice = (decObj.price * decObj.quantity - decObj.price * (decObj.quantity - 1)) / (decObj.quantity);
        decObj.quantity -= 1;
        decObj.price = currPrice * decObj.quantity;
    }
    else {
        document.getElementById(decObj.id).classList.remove('toggle-heart')
        cartData.splice(ind, 1);
        document.getElementById('cart-plus').innerText = ' ' + cartData.length + ' Items';
        document.getElementById('m-cart-plus').innerText = ' ' + cartData.length;
        if (cartData.length < 1 && flag) {
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            document.getElementById('category-header').classList.toggle('toggle-category');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag = false;
            alert("Currently no item in cart!");
            console.log(flag)
        }
    }
    totalAmount()
    cartItems()
}

function totalAmount() {
    var sum = 0;
    cartData.map(item => {
        sum += item.price;
    })
    document.getElementById('total-item').innerText = 'Total Item : ' + cartData.length;
    document.getElementById('total-price').innerText = 'Total Price : $ ' + sum;
    document.getElementById('m-total-amount').innerText = 'Total Price : $ ' + sum;
}

document.getElementById('cart-plus').addEventListener('click', cartToggle);
document.getElementById('m-cart-plus').addEventListener('click', cartToggle);

var flag = false;
function cartToggle() {
    if (cartData.length > 0) {
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        document.getElementById('category-header').classList.toggle('toggle-category');
        document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag = true;
        console.log(flag)
    }
    else {
        alert("Currently no item in cart!");
    }
}



window.onresize = window.onload = function () {
    var size = window.screen.width;
    console.log(size)
    if (size < 800) {
        var cloneFoodItems = document.getElementById('food-items').cloneNode(true);
        var cloneCartPage = document.getElementById('cart-page').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('cart-page').remove();
        document.getElementById('category-header').after(cloneFoodItems);
        document.getElementById('food-items').after(cloneCartPage);
        addEvents()
    }
    if (size > 800) {
        var cloneFoodItems = document.getElementById('food-items').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('header').after(cloneFoodItems);

        var cloneCartPage = document.getElementById('cart-page').cloneNode(true);
        document.getElementById('cart-page').remove();
        document.getElementById('food-items').after(cloneCartPage);
        addEvents()
    }
}

function addEvents() {
    document.querySelectorAll('.add-to-cart').forEach(item => {
        item.addEventListener('click', addToCart)
    });
    document.querySelectorAll('.increase-item').forEach(item => {
        item.addEventListener('click', incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item => {
        item.addEventListener('click', decrementItem)
    })
}

document.getElementById('add-address').addEventListener('click', addAddress);

document.getElementById('m-add-address').addEventListener('click', addAddress);

function addAddress() {
    var address = prompt('Enter your address', '');
    if (address) {
        document.getElementById('add-address').innerText = ' ' + address;
    }
    else {
        alert("Address not added")
    }
}*/