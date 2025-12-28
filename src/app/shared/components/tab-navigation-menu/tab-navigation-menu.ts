import {ChangeDetectorRef, Component, HostListener, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-tab-navigation-menu',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './tab-navigation-menu.html',
  styleUrl: './tab-navigation-menu.scss'
})
export class TabNavigationMenu {
  @Input() tabs: { id: string, label: string }[] = [];
  @Input() activeTab!: string;
  private isScrolling: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {
  }

  setActiveTab(tabId: string) {
    if (this.activeTab === tabId) {
      return; // Already active
    }

    this.isScrolling = true;
    this.activeTab = tabId;
    this.cdr.detectChanges(); // Force change detection

    const element = document.getElementById(tabId);
    if (element) {
      const offsetTop = element.offsetTop - 150; // Account for header/sticky menu
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });

      // Re-enable scroll detection after scroll animation completes
      setTimeout(() => {
        this.isScrolling = false;
      }, 1000);
    } else {
      this.isScrolling = false;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (!this.isScrolling) {
      this.updateActiveTabOnScroll();
    }
  }

  updateActiveTabOnScroll() {
    const sections = this.tabs.map(tab => {
      const element = document.getElementById(tab.id);
      return element ? {
        id: tab.id,
        element,
        top: element.offsetTop,
        bottom: element.offsetTop + element.offsetHeight
      } : null;
    }).filter(section => section !== null);

    const scrollPosition = window.scrollY + 300; // Offset for better UX

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && scrollPosition >= section.top && scrollPosition < section.bottom) {
        if (this.activeTab !== section.id) {
          this.activeTab = section.id;
        }
        break;
      }
    }
  }
}
