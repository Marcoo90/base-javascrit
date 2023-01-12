import heroes from "./data/heroes"; '.data/heroes'

const getHeroes(id)=> superheroes.find(item.id===id)
console.log(getHeroes(4));

export const filterheroes=(owner)=>heroes.filter((hero)=>hero.id==owner);
