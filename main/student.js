let Person = require('./person')
// Write your code here
module.exports = Student
function Student(name,age,klass){
	Person.call(this,name,age);
	this.klass = klass;
}
Student.prototype = new Person();

Student.prototype={
	constructor:Student,
	introduce:function(){
		Person.call(Student);
		Student.introduce();
		alert("I am at Class"+this.klass+". ");
	}
	
}