import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private customerId = 'e92679f6-9cc3-11ed-a536-068a4dd4d266';

  private apiToken = '4c691e04d654055e6263293275228870c7567c471d93';

  private surveyUrl = `/v2/customers/${this.customerId}/surveys`;

  // private responsesUrl = `https://api.insocial.nl/v2/customers/${this.customerId}/surveys/{surveyId}/responses`;

  constructor(private http: HttpClient) { }

  // TODO:
  // - replace creds to .env
  // - correct getSurveys method 
  // - correct method for getting responces - add  X-AUTH-TOKEN to requests

  getSurveys(): Observable<any> {
    const headers = new HttpHeaders().set('X-AUTH-TOKEN', this.apiToken)
    return this.http.get(`${this.surveyUrl}`, {headers});
  }

  getSurveyContent(surveyId: string): Observable<any> {
    const responceUrl = `${this.surveyUrl}/${surveyId}/responses`;
    const headers = new HttpHeaders().set('X-AUTH-TOKEN', this.apiToken)
    return this.http.get(responceUrl, {headers})
  }

}
