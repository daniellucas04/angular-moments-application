import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MomentProps } from '../Moment';
import { enviroment } from 'src/enviroments/enviroment';
@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = enviroment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/moments`
  
  constructor(private http: HttpClient) {}

  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData)
  }
}
