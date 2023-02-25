import { getFish } from './database.js' //Note: The imported function is wrapped in curly braces. This is needed for anything that is exported from a module that isn't the default export.
import { fishList } from './FishList.js' //brings in the function that makes everything happen!
const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

const parentHTMLElement = document.querySelector(".fishList") //document.query selector grabs fishlist function (which is the selector)

parentHTMLElement.innerHTML = fishList() //gets the HTML Markup within the element listed