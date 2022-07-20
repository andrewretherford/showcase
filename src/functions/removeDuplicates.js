export function removeDuplicates(arr) {
    // create object with unique cast member ids as keys, and array indexes at which they appear as values
    const castIds = {}

    for(let i = 0; i < arr.length; i++) {
        castIds[arr[i].person.id] ? 
            (castIds[arr[i].person.id] = [...castIds[arr[i].person.id], i]) 
            : (castIds[arr[i].person.id] = [i])
    }

    // filter out duplicate records by condensing job titles (labeled 'type') into one record
    let duplicate = 0
    const uniqueIds = Object.keys(castIds)
    const filteredCast = []

    for(let i = 0; i < uniqueIds.length; i++) {
        // check that this is the first instance of an id and that duplicates exist
        if(arr[i].person.id !== duplicate && castIds[arr[i].person.id].length > 1) {
            // add entries from the duplicates based on the number of array indexes stored in castIds for this id
            
            // initialize string with first type for this person 
            let typeString = `${arr[castIds[arr[i].person.id][0]].type}`
            // loop through the duplicates and add type to the string
            for(let j=1; j < castIds[arr[i].person.id].length; j++) {
                typeString += `, ${arr[castIds[arr[i].person.id][j]].type}`
            }
            // set set type for the first record to the full string of types and add to the filtered array
            arr[castIds[arr[i].person.id][0]] = {...arr[castIds[arr[i].person.id][0]], type: typeString}
            filteredCast.push(arr[i])

        } else if(arr[i].person.id !== duplicate && castIds[arr[i].person.id].length <= 1) {
            filteredCast.push(arr[i])
        }
        
        duplicate = arr[i].person.id
    }
    return filteredCast
}