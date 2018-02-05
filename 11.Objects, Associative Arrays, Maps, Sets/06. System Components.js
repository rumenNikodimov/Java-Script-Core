// function systemComponents(arr) {
//     let data = new Map()
//     for(let row of arr){
//         let [name, component, subcomponent] = row.split(' | ')
//         if(!data.has(name)){
//             data.set(name, new Map())
//         }
//         if(!data.get(name).has(component)){
//             data.get(name).set(component, new Set())
//         }
//         data.get(name).get(component).add(subcomponent)
//     }
//     // [...data].forEach(([name, components]) => {
//     //     console.log(name);
//     //     [...components].forEach(([component, subcomponents]) => {
//     //         console.log(`   ${component}`);
//     //         [...subcomponents].forEach(subcomponent => console.log(`      ${subcomponent}`))
//     //     })
//     //
//     // })
//
//
//     [...data].sort((a,b) => { //sort in descending order
//         if(a[1].size > b[1].size) return -1
//         if(a[1].size < b[1].size) return 1
//         return 0
//     }).sort((a,b) => { // sort alphabetical order
//         if(a[1].size === b[1].size){
//             if(a[0].toLowerCase() > b[0].toLowerCase()) return 1
//             if(a[0].toLowerCase < b[0].toLowerCase()) return -1
//             return 0
//         }
//     }).forEach(([name, components]) => {
//         console.log(name);
//         [...components]
//             .sort((a,b) => { //sort in descending order
//                 if(a[1] > b[1]) return -1
//                 if(a[1] < b[1]) return 1
//                 return 0
//             })
//             .forEach(([component, subcomponents]) => {
//             console.log(`|||${component}`);
//             subcomponents.forEach(subcomponent => console.log(`||||||${subcomponent}`))
//         })
//     })
// }

function systemComponents(strArr) {
    // Map to store all system data
    let systems = new Map();

    strArr.forEach(s => {
        let tokens = s.split(' | ');
        let system = tokens[0];
        let component = tokens[1];
        let subComponent = tokens[2];

        // Check if system exists and add to map if necessary
        if(!systems.has(system)){
            systems.set(system, new Map());
        }

        // Check if component exist
        if(!systems.get(system).has(component)){
            systems.get(system).set(component, new Set());
        }

        // Add sub component
        systems.get(system).get(component).add(subComponent);
    });

    //console.log(systems);

    [...systems].sort((a, b) => {
        if(a[1].size > b[1].size) return -1;
        if(a[1].size < b[1].size) return 1;
        return 0;
    }).sort((a, b) => {
        if(a[1].size === b[1].size){
            if(a[0].toLowerCase() > b[0].toLowerCase()) return 1;
            if(a[0].toLowerCase() < b[0].toLowerCase()) return -1;
            return 0;
        }
    }).forEach(([system, components]) => {
        console.log(system);
        [...components].sort((a, b) => {
            if(a[1].size > b[1].size) return -1;
            if(a[1].size < b[1].size) return 1;
            return 0;
        }).forEach(([component, subComponents]) =>{
            console.log(`|||${component}`)
            subComponents.forEach(subComponent => {
                console.log(`||||||${subComponent}`)
            })
        } )
    });
}

systemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);