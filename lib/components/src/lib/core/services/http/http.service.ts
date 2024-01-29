import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private readonly http: HttpClient) {}

  /**
   * @description To gather the categories for the menu and links
   *
   * @method getCategories
   * @returns Observable string[]
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public get(url: string): Observable<any> {
    return this.http.get(url);
  }
}
