document.querySelector('#search-button').addEventListener('click', bookSearch);
window.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) { 
        bookSearch();
    }
})

function bookSearch() {
	let search_query = document.querySelector('#searchbar').value;
	document.querySelector('#book-results').innerHTML = "";

	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + search_query,
		dataType: "json",
		type: 'GET',
		success: (data) => {
      console.log(data);
			for(let i = 0; i < data.items.length; i++) {
				let title, image, authors, desc, price;

				// set the title
				if(!data.items[i].volumeInfo.title) 
					title = "<p class='title'>No Title Available</p>";
				else
					title = "<p class='title'>" + data.items[i].volumeInfo.title + "</p>";

				// set the image
				if(!data.items[i].volumeInfo.imageLinks || !data.items[i].volumeInfo.imageLinks.thumbnail)
					image = "<img src='#' alt='no image available'>";
				else
					image = "<img src='" + data.items[i].volumeInfo.imageLinks.thumbnail + "' alt='no image available'>";

        if(!data.items[i].volumeInfo.description) 
          desc = "No description available"
        else
          desc = data.items[i].volumeInfo.description;

        if(!data.items[i].saleInfo.listPrice || !data.items[i].saleInfo.listPrice.amount)
          price = "No price available";
        else
          price = data.items[i].saleInfo.listPrice.amount;

				// set the authors
				authors = data.items[i].volumeInfo.authors.join(", ");
				authors = "<span class='authors'>" + authors + "</span>";

				let block_left = "<div class='block-left'>" + image + "</div>";
        let block_right = "<div class='block-right'>" + title + authors + "</div>";
        let block_bottom = "<div class='block-bottom'><button>Buy me</button>" +price+"<div>"+desc+"</div>"+ "</div>"; 
				let block = "<div class='result-block'>" + block_left + block_right + block_bottom + "</div>";

				document.querySelector('#book-results').innerHTML += block;
			}
    },
	});
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
  window.alert(getRndInteger);
}

