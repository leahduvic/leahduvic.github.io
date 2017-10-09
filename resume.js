const resumeJob = {};

function resumeBuilder(title, company, location, years, responsibilities) {
    let newJobInfo = {};
    newJobInfo.title = title;
    newJobInfo.company = company;
    newJobInfo.location = location;
    newJobInfo.years = years;
    newJobInfo.responsibilities = responsibilities;
    return newJobInfo;
}

let Experience = resumeBuilder("title", "company", "location", "years", "responsibilities");
console.log(Experience)

const homeInventoryString = JSON.stringify(Experience)
localStorage.setItem("job", homeInventoryString)

const storedInventory = localStorage.getItem("job")
let HomeInventory = JSON.parse(storedInventory)

