import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, switchMap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import {AuthService} from '../auth/service/auth.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const messageService = inject(MessageService);
  // TODO: Check Later
  return next(req).pipe(
    catchError(err => {
      let userMessage = '';

      if (err.status === 0) {
        userMessage = 'عدم ارتباط با سرور';
      } else if (err.status === 401) {
        userMessage = 'لطفاً مجدداً وارد شوید';
        // تلاش برای Refresh Token
        return auth.refreshToken().pipe(
          switchMap(() => {
            const newToken = auth.getToken();
            const retryReq = newToken
              ? req.clone({ setHeaders: { Authorization: `Bearer ${newToken}` } })
              : req;
            return next(retryReq);
          }),
          catchError(() => {
            auth.logout();
            messageService.add({ severity: 'error', summary: 'خطا', detail: 'جلسه شما منقضی شد' });
            return throwError(() => new Error('Unauthorized'));
          })
        );
      } else if (err.status >= 400 && err.status < 500) {
        userMessage = err.error?.message || 'خطای سمت کاربر';
      } else if (err.status >= 500) {
        userMessage = 'خطای سرور';
      }

      if (userMessage) {
        messageService.add({ severity: 'error', summary: 'خطا', detail: userMessage });
      }

      return throwError(() => err);
    })
  );
};
