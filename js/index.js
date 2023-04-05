const requestURL = '../json/discworld.json';

async function fetchBooksJson(){
    const response = await fetch (requestURL);
    const books = await response.json();
    return books;
}


fetchBooksJson().then(books => {
    for (let index = 0; index < books.libros.length ; index++)
    {
        const booksSection = document.getElementById('bookSection');

        let id = books.libros[index].id;
        let img = books.libros[index].portada;
        let title = books.libros[index].titulo;
        let storyline = books.libros[index].saga;
        let synopsis  = books.libros[index].sinopsis;
        let year = books.libros[index].año;

        //console.log (books.libros[index].titulo);

        booksSection.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${img}" class="card-img-top" alt="image for the movie card">
                <div class="card-body">
                    <h3 class="card-title-title">${id}. ${title}</h3>
                    <h5 class="card-title-storyline"><img class= "bookIcon"src="/icons/bookIcon.png"> Saga : ${storyline}</h5>
                    <h5 class="card-title-year"><img class= "hourGlassIcon"src="/icons/sandIcon.png""> Año : ${year}</h5>
                    <h5 class="card-title-description"><img class= "wingCapIcon"src="/icons/capIcon.png""> Sinopsis : ${synopsis }</h5>
                </div>
            </div>
        `
    };
})