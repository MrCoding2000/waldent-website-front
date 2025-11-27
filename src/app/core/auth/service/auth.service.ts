import {Injectable, signal} from '@angular/core';
import {Observable, tap, throwError} from 'rxjs';
import {ApiService} from '../../services/api.service';
import {LoginRequestModel} from '../models/login.request.model';
import {LoginResponseModel} from '../models/login.response.model';
import {RefreshTokenResponseModel} from '../models/refresh.token.model';

@Injectable({providedIn: 'root'})
export class AuthService {

  private readonly LOGIN_URL = 'https://api.example.com/auth/login';
  private readonly REFRESH_URL = 'https://api.example.com/auth/refresh';

  #isLoggedIn = signal<boolean>(false);

  constructor(private api: ApiService) {
  }

  login(data: LoginRequestModel): Observable<LoginResponseModel> {
    return this.api.post<LoginResponseModel>(this.LOGIN_URL, data).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        if (res.refreshToken) localStorage.setItem('refreshToken', res.refreshToken);
        this.#isLoggedIn.set(true);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    this.#isLoggedIn.set(false);
  }

  refreshToken(): Observable<RefreshTokenResponseModel> {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) return throwError(() => new Error('No refresh token'));

    return this.api.post<RefreshTokenResponseModel>(this.REFRESH_URL, {refreshToken}).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        if (res.refreshToken) localStorage.setItem('refreshToken', res.refreshToken);
        this.#isLoggedIn.set(true);
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
