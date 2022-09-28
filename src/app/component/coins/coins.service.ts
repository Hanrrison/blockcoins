import { Coins } from './coins';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  private readonly API = 'http://localhost:3000/coins'

  constructor(private http: HttpClient) { }

  getCoins(): Observable<Coins[]> {
     return this.http.get<Coins[]>(this.API)
  }


}
