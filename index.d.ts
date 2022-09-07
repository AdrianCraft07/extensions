import './Array'
import './Buffer'
import './Number'
import './Object'
import './String'

export function createAddProperty<C>(Class:C):(name:String, func:()=>C)=>void
export function createAddFunction<C>(Class:C):(name:String, func:()=>C)=>void