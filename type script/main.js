var Fresher = /** @class */ (function () {
    function Fresher() {
        this.name = "kiruba";
        this.lastName = 'karan';
        this.id = 5;
    }
    Fresher.prototype.getName = function () {
        return this.lastName;
    };
    return Fresher;
}());
var Empolyee = new Fresher();
console.log(Empolyee.name, Empolyee.getName(), Empolyee.id);
console.log(new Fresher());
var WorkerEmpolyee = /** @class */ (function () {
    function WorkerEmpolyee() {
        this.name = 'kumar';
        this.lastName = 'kan';
        this.id = 32;
    }
    WorkerEmpolyee.prototype.getName = function () {
        return this.name;
    };
    ;
    WorkerEmpolyee.prototype.getEmpolyee = function () {
        return this.lastName;
    };
    return WorkerEmpolyee;
}());
console.log(new WorkerEmpolyee());
var item = new WorkerEmpolyee();
console.log(item.getName(), item.getEmpolyee(), item.id);
