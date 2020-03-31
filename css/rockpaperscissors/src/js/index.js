

function bar(obj) {
    obj.favoritecolor = "pink";
}

function foo() {
    let obj = {
        name: "Byul",
        favoritecolor: "blue"
    };

    bar(obj);

    console.log(obj);

}