function myFunction(){
    let search = document.querySelector("#search").value;
    search= search.toLowerCase();
    let result = document.querySelectorAll(".card");

    for (i = 0; i < result.length; i++) { 
        if (!result[i].innerHTML.toLowerCase().includes(search)) {
            result[i].style.display="none";
        }else {
            result[i].style.display="block";                 
        }
    }
}

