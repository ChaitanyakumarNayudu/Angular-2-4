import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message-listner',
  templateUrl: './message-listner.component.html',
  styleUrls: ['./message-listner.component.css']
})
export class MessageListnerComponent implements OnDestroy {
  message: any;
  subscription: Subscription;

  constructor(private messageService: MessageService) { 
    this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message ;});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
