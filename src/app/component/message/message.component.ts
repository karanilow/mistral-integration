import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Message } from '../chatroom/chatroom.component';

@Component({
  selector: 'app-message',
  imports: [MatCardModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  @Input() public message!: Message;
}
