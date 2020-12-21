let cat = document.querySelector('.cat');
const clickButton = document.getElementById('clickButton')
clickButton.addEventListener('click',fetchResults) 
let baseURL = 'https://cat-fact.herokuapp.com/facts';
function fetchResults(){

    
    fetch(baseURL)
    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function(data){
        displayFact(data);
    })    
}
function displayFact(fetchData) {
console.log(fetchData);
    
let factContainer = document.createElement('h1');
    let fact = fetchData[0].text
    console.log(fetchData[0].text)
    factContainer.innerText = fact
    cat.appendChild(factContainer)


    // fact.className = 'factContainer';
    // quote.innerText = `"${json[0]}"`;
}


// let factContainer = document.getElementsByClassName('factContainer')
//     factContainer.removeChild(factContainer);
// factContainer.appendChild(factContainer);

    





//.then((json => console.log(json[0].text)))

//let apiURL= 'https://aws.random.cat/meow'

//fetch (apiURL)
//.then((response) => response.json())

//.then((json => console.log(json.file)))


//let Button = document.getElementById('clickButton');
//console.log(Button);
//Button.addEventlistener









