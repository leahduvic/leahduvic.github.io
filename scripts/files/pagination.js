
// const paginationEl = document.getElementById("pagination")
// const blogEl = document.getElementsByClassName("posts")[0]
// let nextEl = null
// let previousEl = null
// const itemsPerPage = 2
// let numberOfPages

// function paginateArticles (articles) {
// 	blogEl.innerHTML = ""
// 	const totalBlogs = articles.length
// 	numberOfPages = Math.ceil(totalBlogs / itemsPerPage)
    
// 	//creating the - < 1 2 3 4 > first to appear in the footer area of the DOM
// 	//function to call when you want to print to DOM
    
    
// 	let paginationString = "<ul class='blogPage'>"
// 	paginationString += "<a id='previous' href='#'>&lt;</a>"
    
// 	for (let i = 0; i < numberOfPages; i++) {
// 		paginationString += ` <li><a class="blogPage page-${i+1}" href="#">${i+1}</a></li>`
// 	}
    
// 	paginationString += " <a id='next' class='page-2' href='#'>&gt;</a>"
    
// 	//print the list created to the DOM
// 	paginationEl.innerHTML = paginationString

// 	// get the numbers to populate at the bottom of the DOM
// 	const blogLinks = document.getElementsByClassName("blogPage")


// 	//adding event listeners to all the anchors... so when i add more blogs.. it'll add more pages. 
// 	for (let j = 0; j < blogLinks.length; j++) {
// 		let thisBlogEl = blogLinks[j]
// 		thisBlogEl.addEventListener("click", produceBlog, false)
// 	}



// 	previousEl = document.getElementById("previous")
// 	nextEl = document.getElementById("next")

// }
// // Store references to the next and previous arrows added


// //function that invokes what happens each time the user clicks a number at the bottom of the page

// function produceBlog (event) {
// 	//clear the page of old blogs... 
// 	blogEl.innerHTML = ""
    
// 	// converting the prototype elements to an array
// 	const classes = event.target.classList
// 	const classArray = Array.from(classes)
    
// 	const targetClass = classArray.find(clazz => {
// 		if (clazz.startsWith("page-")) return clazz
// 	})
// 	// splitting the array with by the dash    
// 	const pageNumberArray = targetClass.split("-")
// 	// finding the actual page number
// 	const actualPageNumber = pageNumberArray[1]
// 	// converting the string into a number/integer        
// 	const integerPageNumber = parseInt(actualPageNumber)

// 	const pageNumber = parseInt(
// 		Array.from(event.target.classList)
// 			.find(clazz => {
// 				if (clazz.startsWith("page-")) return clazz
// 			})
// 			.split("-")[1]
// 	)
// 	// changing the previous arrow 
// 	if ((pageNumber - 1) === 0) {
// 		previousEl.style.display = "none"
// 	} else {
// 		previousEl.style.display = "inline"
// 		previousEl.className = `page-${pageNumber - 1}`
// 	}
// 	// changing the next arrow
// 	if ((pageNumber + 1) > numberOfPages) {
// 		nextEl.style.display = "none"
// 	} else {
// 		nextEl.style.display = "inline"
// 		nextEl.className = `page-${pageNumber + 1}`
// 	}
// 	// decide which items to display
// 	itemsToDisplay = storedBlog.blogList.slice(
// 		(pageNumber - 1) * itemsPerPage, 
// 		pageNumber * itemsPerPage
// 	)
  
// }

// paginateArticles(storedBlog.blogList),
// produceBlog({
// 	"target": {
// 		"classList": ["page-1"]
// 	}
// })

// const updateToDOM = function () {
// // printing blog info to the DOM-turn this into a function
// 	itemsToDisplay.forEach(currentBlog => { 
// 		blogEl.innerHTML += `
//         <section class="blog_design">
//         <h1>${currentBlog.Btitle}</h1>
//         <h4>${currentBlog.date}</h4>
//         <h4>${currentBlog.id}</h4>
//         <h4>${currentBlog.post}</h4>
//         </section>
//         `
// 	})
// }



// //adding event listeners to arrows 
// previousEl.addEventListener("click", produceBlog)
// nextEl.addEventListener("click", produceBlog)