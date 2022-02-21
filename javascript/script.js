function toggleLinks (){
    let links = document.querySelector('.links');
    
    if(links.style.display == 'none' || links.style.display == null){
        links.style.display = 'flex';
    }
    else{
        links.style.display = 'none';
    }
}

function searchGoogle(){
    let search = document.querySelector('.field').value;
    let url = `https://www.google.com/search?q=${encodeURI(search)}`;
    
    window.location.href = url;
}