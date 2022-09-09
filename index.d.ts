import './Array';
import './Buffer';
import './Number';
import './Object';
import './String';
declare const _default: {
    createAddProperty: (Class: any) => (name: string, func: (...args: any) => any) => void;
    createAddFunction: (Class: any) => (name: string, func: (...args: any) => any) => void;
};
export = _default;
