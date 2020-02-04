import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GoldService {
  constructor(private gold: HttpClient) {}

  getGold() {
    return this.gold.get<number>('/gold');
  }
}
