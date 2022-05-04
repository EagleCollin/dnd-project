import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../shared/character-model';
import { CharacterService } from '../shared/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  constructor(
    private characterService: CharacterService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.characters = this.characterService.showCharacters();

    this.characterService.characterListChange.subscribe(
      (characters: Character[]) => {
        this.characters = characters;
      }
    );
  }

  onAddCharacter() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
