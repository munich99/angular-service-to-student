import { Component } from '@angular/core';
import { InteractionService } from'./interaction.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private _InteractionService:InteractionService){  }
  name = 'Angular';

  greetStudent(){    
    this._InteractionService.sendMessage('Good Morning');
  }
    appreciateStudent(){
    this._InteractionService.sendMessage('Well done');
  }
}
