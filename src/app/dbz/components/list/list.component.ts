import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: 'list.component.html',
  styleUrl: 'list.component.css',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: '',
    name: 'Trunks',
    power: 500
  }, {
    id: '',
    name: 'Vegeta',
    power: 250000
  }, {
    id: '',
    name: 'Goku',
    power: 150000
  }]

  @Output()
  public onDeleteById: EventEmitter<string> = new EventEmitter();

  onDeleteCharacterById(id?: string): void {
    if (!id) {
      return;
    }
    console.log('List:' + id);
    this.onDeleteById.emit(id);
  }

}
