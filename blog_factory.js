

// const blogPost = function blogBuilder (Btitle, date, number, post) {
//     let newBlog = {};
//     newBlog.Btitle = Btitle;
//     newBlog.date = date;
//     newBlog.number = number;
//     newBlog.post = post;
//     return newBlog;
// }

// let searchBlog = blogBuilder("Btitle", "date", "number", "post");
// console.log(searchBlog)

const blog1 = {
    "Btitle": "Week 1 has come and gone.",
    "date": "10/06/2017",
    "number": "1",
    "post": "I am finding myself at a loss for words. I am beyond excited for this new opportunity to be here and getting to learn so much about coding. I know it won't be easy, but it will be challenging and exhilerating. This week was spent getting used to a new routine and balancing a school atmostphere, once again."
}

const blog2 = {
    "Btitle": "Week 2",
    "date": "10/13/2017",
    "number": "2",
    "post": "This week went really well. We started our first experiences with group projects. So far that is going well, haven't run into any major issues. We learned the whole terminal and github routine, which i am slowly catching on to."
}

let blogList = []

blogList.push(blog1, blog2)

let BlogDatabase = {
    "blogList": blogList
}

const blogString = JSON.stringify(BlogDatabase)
localStorage.setItem("blogDatabase", blogString)