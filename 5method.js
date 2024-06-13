// method : functions that are declare inside the object
// basically these are just  functions but as they declared inside the object then we call them methods of an object
let employee = {
    ageCalcy: function(birthDate){
        let age = 2024-birthDate;
        return age;
    }
}

console.log("your age is : ", employee.ageCalcy(2000));

// this keyword 
//I each method we have an special access to a keyword called "this"
// "this" key represent that object which is calling that method 
let person = {
    firstNamme: "manish",
    lastName: "Raghuwanshi",
    city: "Surat",
    getSummery: function() {
        return `Hi ${this.firstNamme} ${this.lastName}, you are living in ${this.city}`;
    },
}

console.log(person.getSummery());
// when this getSummery is called by outside not with person object then this keyword won't work and return unbehavoral values
// we will see how to call method outside the object

// call and apply method : we can manually set value of "this" keyword
let organisation = {
    name: "VIT",
    place: "Vellore",
    students : [],
    info: function(studentName, branch){
        this.students.push({studentName:studentName, branch: branch});
        let org = `
        ${studentName}, 
        you are enrolling in University: ${this.name}, 
        place: ${this.place}, 
        and in branch: ${branch}`;
        console.log(org);
    }
}

organisation.info("manish", "CSE");
organisation.info("lavanya", "MCA");

let franchise = {
    name: "VIT Bhopal",
    place: "Bhopal",
    students: []
}

//using info method of organization outside organization object
//directly, we can't use info method outside organization object
//call method
let information = organisation.info;
information.call(franchise, "manoj", "BA");
information.call(franchise, "Shreyata", "PHD");
information.call(organisation, "swati", "BA");
console.log(franchise.students);
console.log(organisation.students);
// apply method
information.apply(franchise, ["Chinta Bai", "MA"]); // same as call but use square brackets

// bind mehtod : can change funtions implementation in future
function wish(wish){
    console.log(`your ${this.relation}, ${this.name} is wishing you`);
    console.log(`Happy ${wish}!`);
}
let user = {
    name: "manish",
    relation: "brother"
}
let wishes = wish.bind(user);
wishes("Birthday");
