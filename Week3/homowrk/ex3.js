
const numChildren = [1, 2, 3, 4, 5];
const partnerNames = ['charlotte','Emma','Sophie','layla','luna'];
const locations = ['Brussels', 'luxembourg', 'Rotterdam', 'Amsterdam', 'Madrid'];
const jobs = ['Artist', 'Ploiceman', 'Doctor', 'Lawyer', 'farmer'];

function random( partnerNames)
{  
return partnerNames[Math.floor(Math.random()*partnerNames.length)];    
}

function random(locations)
{  
return locations[Math.floor(Math.random()*locations.length)];
     
}

function random(jobs)
{  
return jobs[Math.floor(Math.random()*jobs.length)];
     
}

function random(numChildren)
{  
return numChildren[Math.floor(Math.random()*jobs.length)];
     
}
function tellFortune(numChild, partner, location, job) {
    return `You will be a ${random(jobs)} in ${random(locations)},
    and married to ${random(partnerNames)} with ${random(numChildren)} kids.`
}
console.log(tellFortune(numChildren, partnerNames, locations, jobs))

