var name = "global";

// var obj1 = {
//     name: "obj1",
//     fun1: function() {
//         console.log("from fun1 in obj1 ---");
//         console.log(this);
//         console.log(this.name);
//     }
// };

// obj1.fun1();

// var obj2 = {
//     name: "obj2",
//     fun2: obj1.fun1
// };

// obj2.fun2();

var fun3 = function() {
    console.log("from fun1 in obj1 ---");
    console.log(this);
    console.log(this.name);
};

var obj3 = {
    name: 'obj3',
    fun3: fun3
};

obj3.fun3();

var obj4 = {
    name: 'obj4',
    obj5: {
        name: 'obj5',
        fun5: function() {
            console.log("from fun5 in obj5 ---");
            console.log(this);
            console.log(this.name);
        }
    }
};

obj4.obj5.fun5();