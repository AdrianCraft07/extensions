interface Json <K>{
  toObject(): K;
  toString(): String;
  copy(): Json<K>;
  compare(Json:Json): Boolean;
  toFile(path: fs.PathLike): void;
}
interface ObjectRoute extends String {}
interface Object{
  toJson(): Json<Object>;
  _toString(): String;
  toArray(): [String, any][];
  keys(): String[];
  compare(obj: Object):Boolean;
  getData(route: ObjectRoute): any;
  push(key: String, value: any): Object;
  delete(key: String): Object;
  search(item: any): ObjectRoute[];
}
