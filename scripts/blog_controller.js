const storedBlog = JSON.parse(localStorage.getItem("blogDatabase")) || {}
console.log(storedBlog)
const blogInfo = document.getElementsByClassName("posts")[0]

// all of this is now on the pagination.js page -- 
// for (let i = 0; i < storedBlog.blogList.length; i++) {
//     let blog = storedBlog.blogList[i]
//     blogInfo.innerHTML += `
//     <article>
//         <h3>${blog.Btitle}</h3>
//         <h5>${blog.date}</h5>
//         <h5>${blog.number}</h5>
//         <p>${blog.post}</p>
//     </article>
//     `
// }

// BLOG storing itself

//sorting blogs by id numbers

    storedBlog.blogList
        .sort((p, n) => n.id - p.id)

// id generator
const idGenerator = function* (from) {
    let id = 1
    while (true) {
        yield from + id
        id++
    }
}

const lastId = storedBlog.blogList[0] || { id: 0 }
const blogIdGen = idGenerator(lastId.id)

//factory for new blogs 
const blogFactory = function (Btitle, date, post) {
    return Object.create(null, {
        "Btitle": {
            value: Btitle,
            enumerable: true
        },
        "date": {
            value: date,
            enumerable: true
        },
        "id": {
            value: blogIdGen.next().value,
            enumerable: true
        },
        "post": {
            value: post,
            enumerable: true
        }
    })
}

// adding the event listener to the save button
const saveButtonEl = document.getElementById("blog_button").addEventListener("click", event => {


    //creating a new blog
    const newBlog = blogFactory(
        document.getElementsByClassName("input1")[0].value,
        document.getElementsByClassName("input2")[0].value,
        document.getElementsByClassName("input3")[0].value,
    )

    // adding the new blog to the array of already existing blogs    
    storedBlog.blogList.push(newBlog)
    // console.log(storedBlog)
    // storing the blog into the database 
    localStorage.setItem("blogDatabase", JSON.stringify(storedBlog))
    // localStorage.setItem("blogDatabase", JSON.stringify(BlogDatabase))
})

// const deleteButtonEl = document.getElementsByClassName("delete_button").addEventListener("click", event => {
//     const clear = ""
// })



document.querySelector("input[name='search']").addEventListener(
    "keyup", event => {
        if (event.target.value.length >= 3) {
            //filtering posts
            const userFiltered = event.target.value.toLowerCase()
            
            const filteredBlog = storedBlog.blogList.filter(
                currentBlog => {
                    return currentBlog.Btitle.toLowerCase().includes(userFiltered) ||
                           currentBlog.post.toLowerCase().includes(userFiltered)
                    }
                )
                console.log(filteredBlog)
                blogEl.innerHTML = ""
                paginateArticles(filteredBlog)
            
        }
    }
)