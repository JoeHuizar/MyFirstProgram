class MyFirstProgram {
    constructor(...argArray: Array<any>) {
        this.printArgs(argArray);
    }
    printArgs(argArray) {
        console.log(argArray);
    }
    runFirst(callback: Function) {
        console.log("this method runs first");
    }
    runLast() {
        console.log("this method runs last");
    }
}

const newInstance = new MyFirstProgram("a", "b", "c");
