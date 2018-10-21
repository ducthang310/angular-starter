import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextHelperService {

  constructor() { }

  threeDots(text: string, maxLength: number) {
    if (!text) {
      return '';
    }

    if (maxLength < 6) {

    }

    return maxLength < text.length ? text.substr(0, maxLength - 3) + '...' : text
  }
}
