import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreHelperService {

  constructor() {
  }


  objectClearNullProperties(object: object) {
    let newObject = {};
    for (const key in object) {
      if (object.hasOwnProperty(key)
        && object[key] !== null
        && object[key] !== undefined
        && object[key] !== ''
      ) {
        newObject[key] = object[key];
      }
    }

    return newObject;
  }

  objectExtend(x, y) {
    const ext = (a, b) => {
      // Don't touch 'null' or 'undefined' objects.
      if (a == null || b == null) {
        return a;
      }

      Object.keys(b).forEach(function (key) {
        if (Object.prototype.toString.call(b[key]) === '[object Object]') {
          if (Object.prototype.toString.call(a[key]) !== '[object Object]') {
            a[key] = b[key];
          } else {
            a[key] = ext(a[key], b[key]);
          }
        } else {
          a[key] = b[key];
        }
      });

      return a;
    };

    return ext(x, y);
  }
}
