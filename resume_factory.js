//FORMULA FOR FUTURE JOB ADDITIONS:

// const resumeJob = {};

// function resumeBuilder(title, company, location, years, responsibilities) {
//     let newJobInfo = {};
//     newJobInfo.title = title;
//     newJobInfo.company = company;
//     newJobInfo.location = location;
//     newJobInfo.years = years;
//     newJobInfo.responsibilities = responsibilities;
//     return newJobInfo;
// }
// let experience = resumeBuilder("title", "company", "location", "years", "responsibilities");
// 

const apple = {
    "title": "Redzone Specialist", 
    "company": "Apple Inc.",
    "location": "Nashville, TN", 
    "years": "August 2014-Present",
    "responsibilities": "Building relationships with customers. Introducing customers to their devices. Family Room Certified (repair and troubleshoot devices); Visuals Team Member."
}

const teavana = {
    "title": "Team Lead, Keyholder",
    "company": "Teavana Inc. (Starbucks Partner)",
    "location": "Nashville, TN",
    "years": "May 2011-August 2014",
    "responsibilities":"Assist the Manager and Assistant Manager with managerial duties. Train and develop new employees. Work with customers to define needs and teach tea brewing methods."
}

const wlf = {
    "title": "Student Worker - Secretary",
    "company": "Louisiana Department of Wildlife and Fishery",
    "location": "Baton Rouge, LA",
    "years": "August 2001- August 2011",
    "responsibilities":"Worked closely with the IT department in developing a filing database system. Acted as a reference for information about the parks and licensers needed. Addressed general concerns of park goers and hunters."
}

let resumeList = []

resumeList.push(apple, teavana, wlf)

let ResumeDatabase = {
    "resumeList": resumeList
}

const resumeDatabaseString = JSON.stringify(ResumeDatabase)
localStorage.setItem("resumeDatabase", resumeDatabaseString)



