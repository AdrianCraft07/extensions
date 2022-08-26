interface Json <K>{
  toObject(): K;
  toString(): String;
  copy(): Json<K>;
  compare(Json:Json): Boolean;
  toFile(path: fs.PathLike): void;
}
interface Array<T> {
  toJson(): Json<T[]>;
  toObject(): Object;
  _toString(): String;
  search(): String;
  keys(): String[];
  deleteIndex(): T[];
  getData(): any[];
  max(): T[];
  dataExists(): Boolean;
  end(): Number;
  endItem(): T;
  endDelete(): T[];
  compare(): Boolean;
}