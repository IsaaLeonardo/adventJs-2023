import { manufacture } from "./manufacture.js"

let gifts = ['tren', 'oso', 'pelota']
let materials = 'tronesa'

console.log(manufacture(gifts, materials)) // ["tren", "oso"]

gifts = ['juego', 'puzzle']
materials = 'jlepuz'

console.log(manufacture(gifts, materials)) // ["puzzle"]

gifts = ['libro', 'ps5']
materials = 'psli'

console.log(manufacture(gifts, materials)) // []
