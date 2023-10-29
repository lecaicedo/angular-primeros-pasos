import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output() //el padre ahora puede suscribirse y escucharlo
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: uuid(),
    name: 'hola',
    power: 0,
  };

  emitCharacter():void{
    console.log(this.character);
    if(this.character.name.length === 0) return; //Validar que no se pueda añadir un personaje sin nombre.

    this.onNewCharacter.emit(this.character);

  }

}
