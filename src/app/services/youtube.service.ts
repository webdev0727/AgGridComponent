import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { appendQueryParams } from '../utils/urlUtils';
import Config from '../../config';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(private _http: HttpClient) {}

  getRowData(search = 'john'): Observable<any> {
    let url = appendQueryParams(Config.API_URL, {
      key: Config.API_KEY,
      maxResults: Config.LIMIT,
      type: 'video',
      part: 'snippet',
      q: search,
    });

    return this._http.get(url);
  }
}
