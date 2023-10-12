import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json?fbclid=IwAR3LN_ugEAH2GRYj8hJlw-nenCfG_2AHRkgg8tCd_mqA-JGyN0PQGWXdnkA'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getExchangeRates(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
