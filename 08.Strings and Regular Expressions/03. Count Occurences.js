
   function countElements(pattern, text){
        let count = 0
        let index = text.indexOf(pattern)

        while(index > -1){
            count++
            index = text.indexOf(pattern, index + 1)
        }
        return count
    }
console.log(countElements('the',
    'The quick brown fox jumps over the lay dog.'))

//console.log(countElements(['ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.']));