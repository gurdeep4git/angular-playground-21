import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  set<T>(key: string, value: T): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error saving to localStorage: ${key}`, error);
    }
  }

  // 2. Get data with Generic Type support and JSON parse
  get<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    if (!data) return null;

    try {
      return JSON.parse(data) as T;
    } catch (error) {
      console.error(`Error parsing localStorage: ${key}`, error);
      return null;
    }
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear(){
    localStorage.clear()
  }
}
