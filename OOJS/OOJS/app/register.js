function Person(firstName,lastName,age,dob,gender,ssn) {
    //private properties
    var SSN = ssn;
    var dob = dob;
    // public property.
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.last4DigitsSSN = function () {
        return SSN.substring(6, 10);
    }
}

function printDetails() {
    var student = new Person("kiran","PVS","30","18/12/1981","M","1234567890");
    console.log(student.firstName);
    console.log(student.lastName);
    console.log(student.age);
    console.log(student.SSN);//SSN is a private variable.
    console.log(student.last4DigitsSSN());
}

printDetails();

