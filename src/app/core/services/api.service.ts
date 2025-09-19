import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  // -------------------
  // GET
  // -------------------
  get<T>(url: string, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(url, { headers })
      .pipe(catchError(this.handleError));
  }

  // -------------------
  // POST
  // -------------------
  post<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(url, body, { headers })
      .pipe(catchError(this.handleError));
  }

  // -------------------
  // PUT
  // -------------------
  put<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(url, body, { headers })
      .pipe(catchError(this.handleError));
  }

  // -------------------
  // DELETE
  // -------------------
  delete<T>(url: string, headers?: HttpHeaders): Observable<T> {
    return this.http.delete<T>(url, { headers })
      .pipe(catchError(this.handleError));
  }

  // -------------------
  // Error Handler
  // -------------------
  private handleError(error: HttpErrorResponse) {
    console.error('HTTP Error:', error);
    return throwError(() => new Error('خطا در ارتباط با سرور.'));
  }
}
