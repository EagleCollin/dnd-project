import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css'],
})
export class NewCharacterComponent implements OnInit {
  reactiveForm: FormGroup;
  formSubmitted: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(),
      class: new FormControl(),
      level: new FormControl(),
      strength: new FormControl(),
      dexterity: new FormControl(),
      constitution: new FormControl(),
      wisdom: new FormControl(),
      intelligence: new FormControl(),
      charisma: new FormControl(),
    });
  }

  onCharacterSubmit() {
    this.formSubmitted = true;
    this.reactiveForm.reset();
  }

  onResetForm() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
