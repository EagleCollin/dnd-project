import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Character } from './character-model';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  private myCharacters: Character[] = [
    {
      name: 'James',
      class: 'Wizard',
      level: 4,
      background: 'Charlatan',
      race: 'Elf',
      alignment: 'Chaotic Good',
      attributes: {
        strength: 15,
        dexterity: 18,
        intelligence: 14,
        charisma: 15,
        wisdom: 17,
        constitution: 12,
      },
      proficiencies: ['arcana', 'investigation'],
    },
    {
      name: 'Ron',
      class: 'Barbarian',
      level: 2,
      background: 'Criminal',
      race: 'Ogre',
      alignment: 'Neutral Evil',
      attributes: {
        strength: 14,
        dexterity: 12,
        intelligence: 17,
        charisma: 13,
        wisdom: 18,
        constitution: 15,
      },
      proficiencies: ['intimdation', 'perception'],
    },
    {
      name: 'Nathan',
      class: 'Artificer',
      level: 10,
      background: 'Scholar',
      race: 'Human',
      alignment: 'Chaotic Neutral',
      attributes: {
        strength: 16,
        dexterity: 14,
        intelligence: 16,
        charisma: 10,
        wisdom: 14,
        constitution: 14,
      },
      proficiencies: ['survival', 'sleightOfHand'],
    },
  ];

  showCharacters() {
    return this.myCharacters.slice();
  }

  addCharacter(character: Character) {
    this.myCharacters.push(character);
  }
}
