//Create a street fighter character class that makes fighting game characters with 4 properties and 3 methods

class StreetFighter {
    constructor(name, height, likes, hates) {
        this.name = name
        this.height = height
        this.likes = likes
        this.hates = hates
    }
    characterHeight() {
        return(`${this.name} is "${this.height}" inches tall.`);
    }

    characterLikes() {
        return(`${this.name} likes "${this.likes}".`);
    }

    characterHates() {
        return(`${this.name} hates "${this.hates}".`);
    }
}

let mai = new StreetFighter("Mai", "5'5", "Ozoni, Ohagi, dates with Andy", "Spiders")
let chunli = new StreetFighter("Chun-Li", "5'7", "Days off, shopping with Li-Fen", "Crime, Indecisiveness")
let manon = new StreetFighter("Manon", "5'9", "The color gold, cosmetics, her family", "Crowds, chatterboxes")

console.log(mai)
mai.characterHeight()
mai.characterLikes()
mai.characterHates()

// Revision by M.Kazin