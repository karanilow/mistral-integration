import { Component } from '@angular/core';
import { MessageComponent } from "../message/message.component";
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

export interface Message {
  message: string,
  author: string
}

@Component({
  selector: 'app-chatroom',
  imports: [MessageComponent, CommonModule, MatSlideToggleModule],
  templateUrl: './chatroom.component.html',
  styleUrl: './chatroom.component.scss'
})
export class ChatroomComponent {
  public messages: Message[] = [{message : "message 1", author : "user"},
    {message : "message 2", author : "llm"},
    {message : "message 3", author : "user"},
    {message : "message 4", author : "llm"},
    {message : "message 3", author : "user"}
  ]
}
