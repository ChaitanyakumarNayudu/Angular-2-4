import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [MessageService],
})
export class MessageComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  sendMessages(): void {
    this.messageService.sendMessage('Quote from the message component');
  }

  clearMessages(): void {
    this.messageService.clearMessage();
  }

  ngOnInit() {
  }

}
