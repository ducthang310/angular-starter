import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public baseApiUrl = '';
  public api = {
    auth: {
      login: '/auth/login',
      forgot: '/auth/password/email',
      reset: '/auth/password/reset'
    },
    crawler: {
      get: '/crawler/:id',
    },
    database: {
      list: '/databases',
      get: '/databases/:id'
    },
    checker: {
      website: {
        get: '/websites/:id',
        ping: '/websites/:id/ping'
      }
    }
  };

  constructor() {
    this.baseApiUrl = environment.baseApiUrl;
  }

  getUrl(url: string, params?: object): string {
    if (params) {
      Object.keys(params).forEach((key) => {
        url = url.replace(':' + key, params[key]);
      });
    }

    return this.baseApiUrl + url;
  }
}
