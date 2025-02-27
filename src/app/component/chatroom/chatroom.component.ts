import { Component } from '@angular/core';
import { MessageComponent } from "../message/message.component";
import { CommonModule } from '@angular/common';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MistralApiService } from '../../services/mistral-api.service';

export interface Message {
  message: string,
  author: string
}

@Component({
  selector: 'app-chatroom',
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  imports: [MessageComponent, CommonModule, MatFormFieldModule, MatCardModule, MatInputModule, MatButtonModule, MatIconModule],
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

  constructor(private mistral: MistralApiService){}

  public async prepareResponse() {
    this.messages
    const response = await this.mistral.getMistralResponse("Quel est le meilleur fromage ?")
    this.messages.push({author: "llm", message: response});
  }
}
