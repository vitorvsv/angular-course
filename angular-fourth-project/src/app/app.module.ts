import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameControlsComponent } from './game-controls/game-controls.component';
import { GameOddComponent } from './game-odd/game-odd.component';
import { GameEvenComponent } from './game-even/game-even.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlsComponent,
    GameOddComponent,
    GameEvenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
