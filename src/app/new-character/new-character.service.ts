import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewCharacterService {
  constructor(private http: HttpClient) {}

  onCreateCharacter() {
    this.http
      .get('https://www.dnd5eapi.co/api/ability-scores/cha')
      .subscribe((results: any) => {
        console.log(results);
      });
  }
}
