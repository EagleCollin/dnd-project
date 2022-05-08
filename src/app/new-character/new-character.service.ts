import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewCharacterService {
  constructor(private http: HttpClient,) {}

  onClassSelect(charClass: string) {
    const formattedSearch = charClass.toLocaleLowerCase();

    this.http
      .get(`https://www.dnd5eapi.co/api/classes/${formattedSearch}`)
      .subscribe((results: any) => {
        console.log(results);
      });


  }
}
