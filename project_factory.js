/* haven't built html for project yet, once complete add data here */

const projectInfo = {};

/* function projectBuilder (**need info here**) { */
    let newProject = {};
    newProject.name = name;
    newProject.dateComp = dateComp;
    newProject.info = info;
    return newProject;
}

let searchProject = contactBuilder("twitter", "linkedIn", "email");
console.log(searchProject) 

const homeInventoryString = JSON.stringify(searchProject)
localStorage.setItem("project", homeInventoryString)

const storedInventory = localStorage.getItem("project")
let HomeInventory = JSON.parse(storedInventory)
