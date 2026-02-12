import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  #filteredPageCategoryItems: WritableSignal<{key: string, value: string; icon: string }[]> = signal([{key: '', value: '', icon: '' }]);

  //getters
  filteredPageCategoryItems = this.#filteredPageCategoryItems.asReadonly();

  //setters
  setFilteredPageCategoryItems(filteredPageCategoryItems: {key: string, value: string; icon: string }[]) {
    this.#filteredPageCategoryItems.set(filteredPageCategoryItems);
  }
  constructor() { }
}
