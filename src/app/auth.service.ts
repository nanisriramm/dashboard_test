import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable()
export class AuthService {
  private apiUrl = 'http://43.205.202.221:5001/admin/';

  constructor(private httpClient: HttpClient) {}

  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  signIn(data: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/auth/login`, data).pipe(
      catchError((error: any) => {
        console.error('SignIn error:', error);

        if (error.error && error.error.message) {
          return throwError(error.error.message);
        } else {
          return throwError('An unexpected error occurred.');
        }
      })
    );
  }

  getDepartments(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.get(`${this.apiUrl}/department/list`, { headers });
  }

  getDepartmentsWithPagination(
    pageNumber: number,
    pageSize: number
  ): Observable<any> {
    return this.httpClient.get(
      `${this.apiUrl}/department/list?page=${pageNumber}&size=${pageSize}`
    );
  }

  importDepartmentsFromCSV(file: File, token: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.httpClient.post(`${this.apiUrl}/department/import`, formData, {
      headers,
    });
  }
}
