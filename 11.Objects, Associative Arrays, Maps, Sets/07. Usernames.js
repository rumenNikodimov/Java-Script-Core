function usernames(arr) {
    let usernames = new Set()
    for(let row of arr){
        usernames.add(row)
    }

    [...usernames]
        .sort((a, b) => {
            if([...a].length > [...b].length) return 1
            if([...a].length < [...b].length) return -1
            if([...a].length === [...b].length)
                if (a > b) return 1
                if (a < b) return -1
                return 0
        }).forEach(e => console.log(e))
}

// usernames([
//     'Ashton',
//     'Kutcher',
//     'Ariel',
//     'Lilly',
//     'Keyden',
//     'Aizen',
//     'Billy',
//     'Braston'
//
// ])

usernames([
    'Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'
])