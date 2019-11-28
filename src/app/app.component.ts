import { Component, ElementRef, OnInit } from '@angular/core';
import { MessagesService } from './messages/messages.service';
import { ThreadsService } from './threads/threads.service';
import { UsersService } from './users/users.service';
import { Setup } from './setup/setup';
import { Observable } from 'rxjs';
import { Thread } from './threads/thread.model';
import { User } from './users/user.model';
import { Message } from './messages/message.model';
import { Menu } from './messages/Menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messages: Observable<any>;
  currentThread: Thread;
  draftMessage: Message;
  currentUser: User;
  menus:Menu;
  que:Menu;

  constructor(
    public messagesService: MessagesService,
    public threadsService: ThreadsService,
    public usersService: UsersService,
    public el: ElementRef,private messageService:MessagesService
  ) {
    Setup.init(messagesService, threadsService, usersService);
  }

  ngOnInit(): void {
    // this.messages = this.threadsService.currentThreadMessages;

    console.log('in init');
    this.menus = new Menu(1,'',0,'','');
    
    this.messageService.getQuestionsForStartup(this.menus).subscribe(
      res=>{
        this.que=res;
        console.log('detailsdsfasdfads: '+JSON.stringify(this.que));
      }
    );

    this.draftMessage = new Message();

    this.threadsService.currentThread.subscribe((thread: Thread) => {
      this.currentThread = thread;
    });

    this.usersService.currentUser.subscribe((user: User) => {
      this.currentUser = user;
    });

    // this.messages.subscribe((messages: Array<Message>) => {
    //   setTimeout(() => {
    //     this.scrollToBottom();
    //   });
    // });
  }

  onEnter(event: any): void {
    // alert('Traverse');
    this.messageService.getTraverseDetails().subscribe(
      res=>{
        this.menus=res;
        //alert('details: '+JSON.stringify(this.menus));
      }
    );
    // this.sendMessage();
    // event.preventDefault();
  }

  sendMessage(): void {
    const m: Message = this.draftMessage;
    m.author = this.currentUser;
    m.thread = this.currentThread;
    m.isRead = true;
    this.messagesService.addMessage(m);
    this.draftMessage = new Message();
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el.nativeElement.querySelector(
      '.chat-card-content'
    );
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }
}
