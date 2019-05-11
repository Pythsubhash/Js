// oops concept -
var Employee = function(id,name,age,loc)
{
    this.id = id;
    this.name = name;
    this.age = age;
    this.locid = loc;
    this.address = function(locid){
        if(id >10){
            this.address = 'Noida';
        } else if(id < 10) {
            this.address = 'Delhi';
        }
        return this.address;
    }
}

var emp = new Employee(1,'subhash',34,2);
//emp.id =1;
//emp.name='subhash';
//emp.age=34;

document.write("Employee id:" + emp.id);
document.write("Employee name:" + emp.name);
document.write("Employee age:" + emp.age);
document.write("Employee address:" + emp.address);

