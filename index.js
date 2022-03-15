let search = document.querySelector("#search");
let images = document.querySelectorAll(".card");
console.log(images);

search.oninput = ()=> {

    images.forEach(hide => hide.style.display = "none");

    let value = search.value;
    images.forEach(filter =>{
    let title = filter.getAttribute('data-title');
if(value == title){ 
    filter.style.display = 'block';
}
})
}
