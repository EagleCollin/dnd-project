import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewCharacterService } from '../new-character.service';

@Component({
  selector: 'app-select-class',
  templateUrl: './select-class.component.html',
  styleUrls: ['./select-class.component.css'],
})
export class SelectClassComponent implements OnInit {
  constructor(
    private newCharacterService: NewCharacterService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onSelectClass(formObj: NgForm) {
    const { characterClass } = formObj.value;

    this.newCharacterService.chooseCless(characterClass);
  }

  onResetForm() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
