

// BLOKADA: event.preventDefault();     


console.log('WARSZTAT: 3');

let newsletterForm = document.getElementById('newsletter-form');
let allAgreeChx = document.getElementById('agree-all');


const validate = (event) => {

    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let chxAgree1 = document.getElementById('agree-1');
    let txtErrors = document.getElementById('errors');

    txtErrors.innerHTML = '';

    if (txtName.value.trim() ==='') {
        // console.log(`podaj dane !`);

        let liError = document.createElement('li');
        liError.innerText = "wpisz imię i nazwisko";
        // console.log(liError.innerText);
        // console.log(liError);

        txtErrors.appendChild(liError);
        console.log(liError.innerText);
    }

    if (txtEmail.value.trim() ==='') {
        let liError = document.createElement('li');
        liError.innerText = "wpisz adres e-mail";
        txtErrors.appendChild(liError);
    }

    //zawiera znak: (txtEmail.value.includes('@'))
    //zaprzeczenie: (!txtEmail.value.includes('@'))
    if (!txtEmail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = "ups: brak MAŁPY w adresie email";
        txtErrors.appendChild(liError);
    }

    if (chxAgree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = "nie wyrażono zgody nr 1";
        txtErrors.appendChild(liError);
    }


/*     
    console.log(`validate()`);
    console.log(txtName.value);     //tylko wartość 
    console.log(txtName);           //cały element
    console.log(chxAgree1); 
    console.log(txtErrors);         //na filmie:    <ul id="errors"></ul>; 
                                    //a u mnie:     ul#errors 

*/

    //zlicz ilość dzieci w errorze  console.log(txtErrors.children.length)
    if (txtErrors.children.length > 0 ) {
        event.preventDefault();     //blokuj wysłanie bo są błędy
    }
}


const allAgree = (event) => {
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');
    console.log(event.target.checked);
    
    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
    
}


newsletterForm.addEventListener('submit', validate);
allAgreeChx.addEventListener('change', allAgree);
