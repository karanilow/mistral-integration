import { Component, Input } from '@angular/core';
import { Message } from '../chatroom/chatroom.component';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  @Input() public message!: Message;
}
