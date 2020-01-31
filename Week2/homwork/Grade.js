function calculateGrade(grade){
    let g = ''
    switch(true){
        case (grade >= 90):
            g='A';
            break;
        case (grade >= 80):
            g='B';
            break;
        case (grade >=70):
            g='C';
            break;
        case (grade >=60):
            g='D';
            break;
        case (grade >=50):
            g='E';
            break;
        case (grade <50):
            g='F';
            break;
            
    }
    return  'you got ' +g+ " (" +grade+ '%)!'
    
}

console.log(calculateGrade(89));