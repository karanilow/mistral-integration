import { Component } from '@angular/core';
import { MessageComponent } from "../message/message.component";
import { CommonModule } from '@angular/common';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

export interface Message {
  message: string,
  author: string
}

@Component({
  selector: 'app-chatroom',
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  imports: [MessageComponent, CommonModule, MatFormFieldModule, MatInputModule],
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
