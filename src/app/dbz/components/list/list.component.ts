import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void{
    //TODO: Emitir ID personaje
    this.onDelete.emit(id);
  }
}
