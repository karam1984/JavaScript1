function calculateGrade(score){
    let grade = ''
    switch(true){
        case (score >= 90):
            grade='A';
            break;
        case (score >= 80):
            grade='B';
            break;
        case (score >=70):           
            grade='C';
            break;
        case (score >=60):
            grade='D';
            break;
        case (score >=50):
            grade='E';
            break;
        case (score <50 ):
            grade='F';
            break;
            
    }
    return  'you got ' +grade+ " (" +score+ '%)!'
    
}

console.log(calculateGrade(0));