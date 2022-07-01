import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CharacterSheetService {
  currCharacter = new BehaviorSubject(null);

  constructor() {}
}
