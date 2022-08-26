import fs from 'fs';
interface String{
  toFile(path: fs.PathLike): String;
  replaceFull(replaces: String, sign: String): String;
  reverse():String
  toObject():Object
  toRegExp(flags: 'i' | 'g' | 'gi'): RegExp
  setLength(length:Number): String
}