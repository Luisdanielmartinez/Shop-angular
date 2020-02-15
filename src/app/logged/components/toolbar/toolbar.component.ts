import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  //aqui disparamo el emit que me manda el componente padre
  @Output() disparador=new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
   
  showAndHide():void{
    this.disparador.emit();
  }
}
