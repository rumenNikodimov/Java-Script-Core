function parseEmployeeData(arr){
    const regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/
    for(let e of arr){
        let match = regex.exec(e)
        if(match){
            console.log(`Name: ${match[1]}\n` +
            `Position: ${match[3]}\n` +
                `Salary: ${match[2]}`)
        }
    }
}

// function parseEmployeeData(arr){
//     const regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - (\w+)$/gm
//     let result
//     for(let e of arr){
//         let match = regex.exec(e)
//         if(match){
//             console.log(`Name: ${match[1]}\n` +
//             `Position: ${match[3]}\n` +
//                 `Salary: ${match[2]}`)
//         }
//     }
// }

parseEmployeeData("Isacc - 1000 - CEO", "Ivan - 500 - Employee", "Peter - 500 - Employee")

