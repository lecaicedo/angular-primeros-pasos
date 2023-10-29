import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  @Input() //Se pueden meter datos del padre
  public characterList: Character[]=[{
    name: 'Trunk',
    power: 10
  }]

@Output()
public onDelete: EventEmitter<string>= new EventEmitter();

public deleteCharacterById (id?:string):void{
  if (!id) return;
  this.onDelete.emit(id);
}


}
