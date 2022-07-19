export function removeDuplicates(arr) {
    // create object with unique cast member ids as keys, and array indexes at which they appear as values
    const castIds = {}

    for(let i = 0; i < arr.length; i++) {
        // if(castIds[arr[i].person.id]) {
        //     castIds[arr[i].person.id] = [...castIds[arr[i].person.id], i]
        // } else {
        //     castIds[arr[i].person.id] = [i]
        // }
        castIds[arr[i].person.id] ? (castIds[arr[i].person.id] = [...castIds[arr[i].person.id], i]) : (castIds[arr[i].person.id] = [i])
    }

    // filter out duplicate records by condensing job titles (labeled 'type') into one record
    let duplicate = 0
    const uniqueIds = Object.keys(castIds)
    const filteredCast = []

    for(let i = 0; i < uniqueIds.length; i++) {
        // check that this is the first instance of an id and that duplicates exist
        if(arr[i].person.id !== duplicate && castIds[arr[i].person.id].length > 1) {
            // add entries from the duplicates based on the number of array indexes stored in castIds for this id
            switch(castIds[arr[i].person.id].length) {
                case 2:
                    arr[castIds[arr[i].person.id][0]] = {...arr[castIds[arr[i].person.id][0]], type: `${arr[castIds[arr[i].person.id][0]].type}, ${arr[castIds[arr[i].person.id][1]].type}` }
                    filteredCast.push(arr[i])
                    break

                case 3:
                    arr[castIds[arr[i].person.id][0]] = {...arr[castIds[arr[i].person.id][0]], type: `${arr[castIds[arr[i].person.id][0]].type}, ${arr[castIds[arr[i].person.id][1]].type}, ${arr[castIds[arr[i].person.id][2]].type}` }
                    filteredCast.push(arr[i])
                    break

                case 4: 
                    arr[castIds[arr[i].person.id][0]] = {...arr[castIds[arr[i].person.id][0]], type: `${arr[castIds[arr[i].person.id][0]].type}, ${arr[castIds[arr[i].person.id][1]].type}, ${arr[castIds[arr[i].person.id][2]].type}, ${arr[castIds[arr[i].person.id][3]].type}` }
                    filteredCast.push(arr[i])
                    break

                case 5:
                    arr[castIds[arr[i].person.id][0]] = {...arr[castIds[arr[i].person.id][0]], type: `${arr[castIds[arr[i].person.id][0]].type}, ${arr[castIds[arr[i].person.id][1]].type}, ${arr[castIds[arr[i].person.id][2]].type}, ${arr[castIds[arr[i].person.id][3]].type}, ${arr[castIds[arr[i].person.id][4]].type}` }
                    filteredCast.push(arr[i])
                    break
                
                default: break
            }
        } else if(arr[i].person.id !== duplicate && castIds[arr[i].person.id].length <= 1) {
            filteredCast.push(arr[i])
        }
        
        duplicate = arr[i].person.id
    }
    return filteredCast
}