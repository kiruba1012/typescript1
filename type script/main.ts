interface Empolyee {
  name: string;
  lastName: string;
  id: number;
  getName(): string;
}
interface Manager extends Empolyee {
  getEmpolyee(): string;
}
class Fresher implements Empolyee {
  name = "kiruba";
  lastName ='karan'
  id = 5;
  getName(): string {
    return this.lastName;
  }
}
const Empolyee = new Fresher();
console.log(Empolyee.name, Empolyee.getName(), Empolyee.id)
console.log(new Fresher())

class WorkerEmpolyee implements Manager {
  name = 'kumar';
  lastName = 'kan';
  id = 32;
  getName(): string {
    return this.name
  };
  getEmpolyee(): string {
    return this.lastName
  }
}
const item = new WorkerEmpolyee();
console.log(new WorkerEmpolyee())
console.log( item.getName(),item.getEmpolyee(),item.id)
