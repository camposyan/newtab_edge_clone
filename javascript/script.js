document.querySelector('.weather').addEventListener('mouseover', async(e) => {
    e.preventDefault();
    console.log('teste');
})


function toggleLinks (){
    let links = document.querySelector('.links');
    
    if(links.classList.contains('d-flex')){
        links.classList.remove('d-flex');
        links.classList.add('d-none');
        document
    }
    else{
        links.classList.remove('d-none');
        links.classList.add('d-flex');
    }
}

function searchGoogle(){
    let search = document.querySelector('.field').value;
    let url = `https://www.google.com/search?q=${encodeURI(search)}`;
    
    window.location.href = url;
}