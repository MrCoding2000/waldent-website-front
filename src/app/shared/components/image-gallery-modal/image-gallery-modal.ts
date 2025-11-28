import { Component, Input, Output, EventEmitter, OnChanges, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-gallery-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-gallery-modal.html',
  styleUrl: './image-gallery-modal.scss'
})
export class ImageGalleryModal implements OnChanges, OnDestroy {
  @Input() images: string[] = [];
  @Input() initialIndex: number = 0;
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  currentIndex: number = 0;
  private touchStartX: number = 0;
  private touchEndX: number = 0;
  private isTransitioning: boolean = false;

  ngOnChanges(changes: any) {
    if (changes.isOpen && this.isOpen) {
      this.currentIndex = this.initialIndex;
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else if (changes.isOpen && !this.isOpen) {
      // Restore body scroll when modal is closed
      document.body.style.overflow = '';
    }
    
    if (changes.initialIndex && this.isOpen) {
      this.currentIndex = this.initialIndex;
    }
  }

  ngOnDestroy() {
    // Restore body scroll on component destroy
    document.body.style.overflow = '';
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (!this.isOpen) return;
    
    if (event.key === 'Escape') {
      this.close();
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      if (event.key === 'ArrowRight') {
        this.nextImage();
      } else {
        this.prevImage();
      }
    }
  }

  nextImage() {
    if (this.isTransitioning) return;
    
    this.isTransitioning = true;
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop to first image
    }
    
    setTimeout(() => {
      this.isTransitioning = false;
    }, 300);
  }

  prevImage() {
    if (this.isTransitioning) return;
    
    this.isTransitioning = true;
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1; // Loop to last image
    }
    
    setTimeout(() => {
      this.isTransitioning = false;
    }, 300);
  }

  selectImage(index: number) {
    if (this.isTransitioning) return;
    
    this.isTransitioning = true;
    this.currentIndex = index;
    
    setTimeout(() => {
      this.isTransitioning = false;
    }, 300);
  }

  close() {
    this.closeModal.emit();
  }

  onBackdropClick(event: MouseEvent) {
    // Close modal if clicking on backdrop (not on the modal content)
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.close();
    }
  }

  // Touch events for swipe on mobile
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe() {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next image
        this.nextImage();
      } else {
        // Swipe right - previous image
        this.prevImage();
      }
    }
  }
}

