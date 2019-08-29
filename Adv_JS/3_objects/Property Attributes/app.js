var  obj = {
    type: "rectangle",
    width: 10,
    height: 5
};
Object.defineProperty(obj,"type", {enumerable: false});

for (var prop in obj) {
    console.log(prop);
};

