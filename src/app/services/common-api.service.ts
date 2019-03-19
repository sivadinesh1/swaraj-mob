import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {
  restApiUrl = environment.restApiUrl;
  constructor(private httpClient: HttpClient) { }

  getAllPartsStockData() {
    return this.httpClient.get(this.restApiUrl + '/api/inventory/all');
  }

  getDetailsByPartNo(id: string ) {
    return this.httpClient.get(this.restApiUrl + '/api/part-details/' + id);
  }


}
