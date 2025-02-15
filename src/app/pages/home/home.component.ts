import { Component } from '@angular/core';
import { ChatroomComponent } from "../../component/chatroom/chatroom.component";

@Component({
  selector: 'app-home',
  imports: [ChatroomComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
