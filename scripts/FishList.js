// Import the function that returns a copy of the fish array
import { getFish } from "./database.js"

export const fishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()


    // Start building a string filled with HTML syntax
   let htmlString = '<article class="fishList">'


    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="tank">
            <img class ="fish_image" src="${fish.image}">
            <div class="fish_name">This is ${fish.name}!</div>
            <div class="fish_species">I'm a ${fish.species}.</div>
            <div class="fish_length">I'm a level ${fish.size} fish.</div>
            <div class="fish_location">You can find me in ${fish.location}.</div>
            <div class="fish_diet">I eat ${fish.food}.</div>
        </section>`

    }
    htmlString += `</article>`

    return htmlString
}

