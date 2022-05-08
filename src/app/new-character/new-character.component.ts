import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewCharacterService } from './new-character.service';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css'],
})
export class NewCharacterComponent implements OnInit {
  reactiveForm: FormGroup;
  formSubmitted: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private classService: NewCharacterService
  ) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      class: new FormControl(),
    });
  }

  onCharacterSubmit() {
    this.formSubmitted = true;
    this.reactiveForm.reset();
  }

  onSearchClass(charClass: any) {
    console.log(charClass);
    this.classService.onClassSelect(charClass);
    this.router.navigate(['choices'], { relativeTo: this.route });
  }

  onResetForm() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
