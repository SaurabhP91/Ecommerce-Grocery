const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    
    name:{
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String,
    }
});

module.exports = mongoose.model('Product',productSchema);


/*DUMMY DATA 
[
    {
        "_id": "67ce77e8b87b6004de114945",
        "name": "Potatoes",
        "description": "",
        "price": 30,
        "category": "Vegetables",
        "image": "https://media.istockphoto.com/id/157430678/photo/three-potatoes.jpg?s=612x612&w=0&k=20&c=qkMoEgcj8ZvYbzDYEJEhbQ57v-nmkHS7e88q8dv7TSA=",
        "date": "2025-03-10T05:26:00.729Z",
        "__v": 0
    },
    {
        "_id": "67ce7959b87b6004de11494b",
        "name": "Batteries",
        "description": "",
        "price": 65,
        "category": "Electronics",
        "image": "https://media.gettyimages.com/id/1457158797/photo/rechargeable-aa-batteries-with-white-and-positive-polarity-romania.jpg?s=612x612&w=0&k=20&c=laCQEayseCeBhZa57sxnMpA0co9JF6QSY-e7xaLY-MA=",
        "date": "2025-03-10T05:32:09.487Z",
        "__v": 0
    },
    {
        "_id": "67ce7c3010963c3df1652370",
        "name": "Rice",
        "description": "",
        "price": 180,
        "category": "Food",
        "image": "https://m.media-amazon.com/images/I/91MZComV1xL.jpg",
        "date": "2025-03-10T05:44:16.013Z",
        "__v": 0
    },
    {
        "_id": "67ce7c8a10963c3df1652377",
        "name": "Bananas",
        "description": "",
        "price": 30,
        "category": "Fruits",
        "image": "https://media.gettyimages.com/id/173242750/photo/banana-bunch.jpg?s=612x612&w=0&k=20&c=MAc8AXVz5KxwWeEmh75WwH6j_HouRczBFAhulLAtRUU=",
        "date": "2025-03-10T05:45:46.880Z",
        "__v": 0
    },
    {
        "_id": "67ce7cb410963c3df165237a",
        "name": "Watermelon",
        "description": "",
        "price": 100,
        "category": "Fruits",
        "image": "https://media.gettyimages.com/id/157405770/photo/melon-wallpaper.jpg?s=612x612&w=0&k=20&c=Ino9EP0n7O1CPczzOTk2a2KuoNkLu8GNWavoOk6hw4Y=",
        "date": "2025-03-10T05:46:28.069Z",
        "__v": 0
    },
    {
        "_id": "67ce7cd510963c3df165237d",
        "name": "Bread",
        "description": "",
        "price": 28,
        "category": "Food",
        "image": "https://media.istockphoto.com/id/1208882100/photo/bread-bag-packaging-with-sliced-bread-inside-illustration.jpg?s=612x612&w=0&k=20&c=genEnYsbcdeecCX2X-gWp3m0ipxOcxVUbLcG9wGb7Ks=",
        "date": "2025-03-10T05:47:01.425Z",
        "__v": 0
    },
    {
        "_id": "67ce7d7410963c3df1652384",
        "name": "Capsicum",
        "description": "",
        "price": 22,
        "category": "Vegetables",
        "image": "https://www.bigbasket.com/media/uploads/p/l/50000478_6-fresho-capsicum-green-organically-grown.jpg",
        "date": "2025-03-10T05:49:40.804Z",
        "__v": 0
    },
    {
        "_id": "67ce7e0710963c3df165238b",
        "name": "Eveready 9W Bulb",
        "description": "",
        "price": 60,
        "category": "Electronics",
        "image": "https://www.bigbasket.com/media/uploads/p/l/40128546_10-eveready-led-bulb-9-watt-cool-day-light-base-b22d.jpg",
        "date": "2025-03-10T05:52:07.556Z",
        "__v": 0
    }
]
    


*/
