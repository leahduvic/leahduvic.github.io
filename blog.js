const blogPost = {};

function blogBuilder (Btitle, date, number, post) {
    let newBlog = {};
    newBlog.Btitle = Btitle;
    newBlog.date = date;
    newBlog.number = number;
    newBlog.post = post;
    return newBlog;
}

let searchBlog = blogBuilder("Btitle", "date", "number", "post");
console.log(searchBlog)

const homeInventoryString = JSON.stringify(searchBlog)
localStorage.setItem("blog", homeInventoryString)

const storedInventory = localStorage.getItem("blog")
let HomeInventory = JSON.parse(storedInventory)

