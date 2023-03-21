var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHi = function () {
        console.log("Hi, I'm ".concat(this.name, ", and I'm ").concat(this.age, " years old."));
    };
    return Person;
}());
var Miao = /** @class */ (function (_super) {
    __extends(Miao, _super);
    function Miao(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.sex = '小姐姐';
        _this.boyFriend = [];
        return _this;
    }
    Miao.prototype.addBoyFriend = function (name, age) {
        this.boyFriend.push(new Person(name, age));
    };
    Miao.prototype.showMyBoyFriend = function () {
        console.log('Let my boyfriends introduce themselves');
        this.boyFriend.forEach(function (item) {
            item.sayHi();
        });
    };
    return Miao;
}(Person));
var miao = new Miao('Miao', 18);
miao.addBoyFriend('Jack', 20);
miao.addBoyFriend('Tom', 21);
miao.addBoyFriend('Tony', 10);
miao.showMyBoyFriend();
