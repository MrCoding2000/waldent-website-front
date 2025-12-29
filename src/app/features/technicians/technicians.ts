import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TechniciansService } from './technicians.service';
import { TechnicianPageDto } from './technicians.types';

@Component({
  selector: 'app-technicians',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technicians.html',
  styleUrl: './technicians.scss',
})
export class Technicians {
  vm$: Observable<TechnicianPageDto>;
  fullscreenImageUrl: string | null = null;

  constructor(private readonly techniciansService: TechniciansService) {
    this.vm$ = this.techniciansService.getTechnicianPage();
  }

  // UI actions (placeholders)
  onContactClick() {}
  onResumeClick() {}
  onReportClick() {}
  onFavoriteClick() {}
  onShareClick() {}
  onFullscreenClick(url?: string) {
    if (!url) return;
    this.fullscreenImageUrl = url;
    // prevent background scroll
    if (typeof document !== 'undefined') document.body.style.overflow = 'hidden';
  }

  closeFullscreen() {
    this.fullscreenImageUrl = null;
    if (typeof document !== 'undefined') document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.fullscreenImageUrl) this.closeFullscreen();
  }
}



