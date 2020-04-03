import { Component, OnInit } from '@angular/core';
import { InteractionService } from'./../interaction.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  stundents:string;

  constructor(private _InteractionService:InteractionService ) { }  

  ngOnInit() {
    this._InteractionService.teacherMessage$
    .subscribe(message =>{
      if(message == 'Good Morning') this.stundents = "goog morning teacher";
    });
  }

}