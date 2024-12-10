import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`);
  }
  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, data)
  }
  put<T>(endpoint: string, data:any): Observable<T>{
    return this.http.put<T>(`${this.apiUrl}/${endpoint}`, data)
  }
  delete<T>(endpoint: string, data: any): Observable<T> {
    return this.http.request<T>('DELETE', `${this.apiUrl}/${endpoint}`, {
      body: data
    });
  }
}
