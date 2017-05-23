let Person = require('./person')
// Write your code here
module.exports = Student
function Student(name,age,klass){
	Person.call(this,name,age);
	Student.klass = klass;
}
Student.prototype = new Person();

Student.prototype.constructor =Student;
Student.prototype.introduce =function(){
		return "My name is "+this.name+". "+"I am "+this.age+" years old."+" I am at Class "+this.klass+". " ;
	};