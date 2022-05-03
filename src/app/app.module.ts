import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharacterHomeComponent } from './character-home/character-home.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterComponent } from './character/character.component';
import { CharacterDisplayComponent } from './character-display/character-display.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CharacterHomeComponent,
    CharacterListComponent,
    CharacterComponent,
    CharacterDisplayComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
