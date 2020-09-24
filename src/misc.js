export const initialPlayers = [
    {
      name: 'Adaane',
      choice: '',
      score: 0
    },
    {
      name: 'recruteur',
      choice: '',
      score: 0
    }
]

export const items = [{
    name: 'Pierre',
    id: 'R'
},
{
    name: 'Papier',
    id: 'P'
},
{
    name: 'Ciseaux',
    id: 'S'
}
]

export const arrayWinner = {
    "SvsR" : "R",
    "RvsS" : "R",
    "SvsP" : 'S',
    "PvsS" : 'S',
    "RvsP" : "P",
    "PvsR" : "P",
};