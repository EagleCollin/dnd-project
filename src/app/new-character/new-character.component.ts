import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  ngOnInit(): void {}

  onFormSubmit() {
    this.formSubmitted = true;

    this.reactiveForm.reset();
  }

  onResetForm() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
