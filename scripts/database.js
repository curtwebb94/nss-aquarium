/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Bart",
            food: "flakes",
            size: 1,
            species: "Guppy",
            image:"./guppy_fish.jpeg",
            location:"Pet Stores"

        },
        {
            name: "Donna",
            food: "worms",
            size: 3,
            species: "Bass",
            image:"./black_bass.jpg",
            location:"Lakes"

        },
        {
            name: "James",
            food: "worms",
            size: 3,
            species: "crappie",
            image:"./crappie.jfif",
            location:"Lakes"


        },
        {
            name: "Dot",
            food: "worms",
            size: 4,
            species: "catfish",
            image:"./catfish.jfif",
            location:"Lakes"


        },
        {
            name: "Jim",
            food: "fish",
            size: 6,
            species: "bull shark",
            image:"./bullshark.webp",
            location:"Oceans"


        },  
        {
            name: "Marty",
            food: "fish",
            size: 5,
            species: "sword fish",
            image:"./swordfish.jpg",
            location:"Oceans"


        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}