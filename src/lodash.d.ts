declare module "lodash" {
    function head<T>(array : Array<T>):T;
    function hasIn(object:object, key:string):boolean;
    function isBoolean(value:any):boolean;
    function toString(value:any):string;
    function split(string:string, separator:RegExp|string, limit:number):string[];
    function hasPath(object:object, path:string[]|string):boolean;
    function filter<T>(array:Array<T>, predicate:Function):Array<T>;
    function every<T>(array:Array<T>, predicate:Function):boolean;
    function map<T>(array:Array<T>, iteratee:Function):Array<T>
}