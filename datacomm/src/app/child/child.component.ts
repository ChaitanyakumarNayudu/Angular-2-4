import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

@Input() parentData: string;

@Output() 
change: EventEmitter<boolean> = new EventEmitter();

voted= false;

vote(agreed: boolean){
  this.change.emit(agreed);
  this.voted = true;
}

  ngOnInit() {
  }

}
