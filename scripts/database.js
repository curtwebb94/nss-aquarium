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
            species: "Carp"

        },
        {
            name: "Donna",
            food: "worms",
            size: 3,
            species: "Bass"

        },
        {
            name: "James",
            food: "worms",
            size: 3,
            species: "crappie"

        },
        {
            name: "Dot",
            food: "worms",
            size: 4,
            species: "catfish"

        },
        {
            name: "Jim",
            food: "fish",
            size: 6,
            species: "bull shark"

        },  
        {
            name: "Marty",
            food: "fish",
            size: 5,
            species: "sword fish"

        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}