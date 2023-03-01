// Code your solutions in this file

function writeCards(names,gift){
    const thanks = []
    for (let i = 0; i < names.length; i++){
        let note = `Thank you, ${names[i]}, for the wonderful ${gift} gift!`
        thanks.push(note)
    }
    return thanks
}

function countDown(number){
    for (let i = number; i >=0; i--){
        console.log(i)
    }
}