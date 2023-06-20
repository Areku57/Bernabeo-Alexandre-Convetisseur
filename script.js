let button = document.getElementById("button");
let pokeName = document.getElementById("name");


button.onclick = async () => {
    let image = document.getElementById("image");
    let pokeNumber = document.getElementById("number");
    let randomNumber = Math.ceil(Math.random() * 150) + 1; 
    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
    let data = await fetch(requestString);

    let reponse = await data.json();
    console.log(reponse)
    let Poketype = reponse.types[0].type.name
    console.log(Poketype)
    image.src = reponse.sprites.front_default;
    pokeNumber.textContent = `#${reponse.id}`;
}




