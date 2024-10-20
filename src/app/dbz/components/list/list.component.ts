import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: 'list.component.html',
  styleUrl: 'list.component.css',
})
export class ListComponent {

  @Input()
  public characterList: Character[]=[{
      name: 'Trunks',
      power: 500
    },{
        name: 'Vegeta',
        power: 250000
    },{
        name: 'Goku',
        power: 150000
    }]

    @Output()
    public onDeleteId: EventEmitter<number> = new EventEmitter();

    onDeleteCharacter(index:number):void{
      //TODO: Emitir el ID del personaje
      console.log({index});
      this.onDeleteId.emit(index);
    }



}
