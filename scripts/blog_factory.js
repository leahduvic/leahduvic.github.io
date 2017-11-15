

// const blogPost = function blogBuilder (title, date, number, post) {
//     let newBlog = {};
//     newBlog.title = title;
//     newBlog.date = date;
//     newBlog.number = number;
//     newBlog.post = post;
//     return newBlog;
// }

// let searchBlog = blogBuilder("Btitle", "date", "number", "post");
// console.log(searchBlog)

// const blog1 = {
//     "Btitle": "Week 1 has come and gone.",
//     "date": "10/06/2017",
//     "number": "1",
//     "post": "I am finding myself at a loss for words. I am beyond excited for this new opportunity to be here and getting to learn so much about coding. I know it won't be easy, but it will be challenging and exhilerating. This week was spent getting used to a new routine and balancing a school atmostphere, once again."
// }

// const blog2 = {
//     "Btitle": "Week 2",
//     "date": "10/13/2017",
//     "number": "2",
//     "post": "This week went really well. We started our first experiences with group projects. So far that is going well, haven't run into any major issues. We learned the whole terminal and github routine, which i am slowly catching on to."
// }

// const blog3 = {
//     "Btitle": "Week 3",
//     "date": "10/20/2017",
//     "number": "3",
//     "post": "This week began with another group project, which went well. Then pagination came along and wrecked me. There's something humbling about going from knowing you know something, to then feeling like you don't. CSS is still something else, I am catching on some days and others I want to throw the computer."
// }

// const blog4 = {
//     "Btitle": "Week 3",
//     "date": "10/27/2017",
//     "number": "4",
//     "post": "This week was filled with some ups and some downs. One day you can be on a high of completing a task and then the next get reminded of how much you really don't know. I attempted pagination on my own, it went okay... even after looking over the cheese example. I find I understand more, but there's still so much to process. Now onto Lexscopistan, not sure how I feel about this task outside of being excited and terrified. All the emotions you feel during this time are exhilerating, somehow. "
// }

// const blog5 = {
//     "Btitle": "Week 3",
//     "date": "10/20/2017",
//     "number": "3",
//     "post": "This week began with another group project, which went well. Then pagination came along and wrecked me. There's something humbling about going from knowing you know something, to then feeling like you don't. CSS is still something else, I am catching on some days and others I want to throw the computer."
// }

// const blog6 = {
//     "Btitle": "Week 3",
//     "date": "10/20/2017",
//     "number": "3",
//     "post": "This week began with another group project, which went well. Then pagination came along and wrecked me. There's something humbling about going from knowing you know something, to then feeling like you don't. CSS is still something else, I am catching on some days and others I want to throw the computer."
// }
// // // blogList.push(blog1, blog2, blog3, blog4, blog5, blog6)
// UNCOMMENT BELOW FIRST TIME TO GET TO LOCAL STORAGE. 
let blogList = []
let BlogDatabase = {
	"blogList": blogList
}

const blogString = JSON.stringify(BlogDatabase)
localStorage.setItem("blogDatabase", blogString)

// const blogDatabase = function (store) {
//     let blogList = [] 
    
// } 

// module.exports = blogDatabase