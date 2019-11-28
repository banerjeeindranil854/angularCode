import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from './../users/users.service';
import { Message } from './../messages/message.model';
import { User } from './../users/user.model';
import { Menu } from '../messages/Menu';
import { MessagesService } from '../messages/messages.service';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: Menu;
  currentUser: User;
  incoming: boolean;
  menu:Menu;
  ans:Menu;

  constructor(public usersService: UsersService,private messageService:MessagesService) {}

  ngOnInit(): void {
    // alert('in init '+JSON.stringify(this.message.menuName));
    
    
    // this.messageService.getQuestionsForStartup(this.menu).subscribe(
    //   res=>{
    //     this.menu=res;
    //     console.log('detailsdsfasdfads: '+JSON.stringify(this.menu));
    //   }
    // );

    // this.usersService.currentUser.subscribe((user: User) => {
    //   this.currentUser = user;
    //   if (this.message.author && user) {
    //     this.incoming = this.message.author.id !== user.id;
    //   }
    // });
  }
  getAnswers(){
    //alert('asdfsadf '+this.message.menuName);
    this.menu = new Menu(this.message.id,this.message.menuName,this.message.count,this.message.type,this.message.description);
    this.messageService.getQuestionsForStartup(this.menu).subscribe(
        res=>{
          this.ans=res;
          console.log('detailsdsfasdfads: '+JSON.stringify(this.ans));
        }
      );
    // var object;
    // this.usersService.getJSON().subscribe(data => object=data, error => console.log(error));
  }
  // ngOnChanges(){
  //     // this.getAnswers();
  // }
}
