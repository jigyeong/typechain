class Block {
    constructor(
        private data:string
    ){}
    static hello(){
        window.localStorage.clear();
        return "hi";
    }
}