import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TechnicianPageDto } from './technicians.types';

@Injectable({ providedIn: 'root' })
export class TechniciansService {
  private readonly http = inject(HttpClient);

  getTechnicianPage(): Observable<TechnicianPageDto> {
    return this.http.get<TechnicianPageDto>('/assets/mock/technician-page.json');
  }
}




