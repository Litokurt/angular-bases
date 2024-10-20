import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
  //Principal
  public characters: Character[] = [{
      name: 'Krillin',
      power: 5000
  },{
      name: 'Vegeta',
      power: 50000
  },{
      name: 'Goku',
      power: 50000
  }];

  onNewCharacter(character: Character):void{
    console.log('MainPage: ');
    console.log(character);

    this.characters.push(character);
  }

  onDeleteIdMain(index:number):void{
    console.log('MainPage:' + index);
    this.characters.splice(index,1);
  }
}
