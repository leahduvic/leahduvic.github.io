const storedBlog = JSON.parse(localStorage.getItem("blogDatabase"))

const blogInfo = document.getElementsByClassName("posts")[0]


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
