let Person = require('./person')
// Write your code here
module.exports = Student
function Student(name,age,klass){
	person.call(this,name,age);
	this.klass = klass;
}
Student.prototype = new Person();

Student.prototype={
	constructor:Student,
	introduce:function(){
		Person.call(Student);
		
		return Student.introduce()+"I am at Class"+this.klass+". ";
	}
	
}