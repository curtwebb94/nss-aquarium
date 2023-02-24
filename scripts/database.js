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
            food: "crustaceans",
            size: 3,
            species: "Carp",
            image:"./guppy_fish.jpeg"

        },
        {
            name: "Donna",
            food: "worms",
            size: 3,
            species: "Bass",
            image:"./black_bass.jpg"

        },
        {
            name: "James",
            food: "worms",
            size: 3,
            species: "crappie",
            image:"./crappie.jfif"

        },
        {
            name: "Dot",
            food: "worms",
            size: 4,
            species: "catfish",
            image:"./catfish.jfif"

        },
        {
            name: "Jim",
            food: "fish",
            size: 6,
            species: "bull shark",
            image:"./guppy_fish.jpeg"

        },  
        {
            name: "Marty",
            food: "fish",
            size: 5,
            species: "sword fish",
            image:"./guppy_fish.jpeg"

        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}