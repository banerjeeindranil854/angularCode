import { Component, OnInit, Input } from '@angular/core';
import { Menu } from 'src/app/messages/Menu';
import { MessagesService } from 'src/app/messages/messages.service';

@Component({
  selector: 'app-ans2',
  templateUrl: './ans2.component.html',
  styleUrls: ['./ans2.component.css']
})
export class Ans2Component implements OnInit {

  @Input()
  ans2:Menu;
  menu:Menu;
  constructor(private messageService:MessagesService) { }

  ngOnInit() {
    console.log("lsttttttttt: "+JSON.stringify(this.ans2));
  }
  getAnswers(){
    //alert('asdfsadf '+this.ans2);
    this.menu = new Menu(this.ans2.id,this.ans2.menuName,this.ans2.count,this.ans2.type,this.ans2.description);
    this.messageService.getQuestionsForStartup(this.menu).subscribe(
        res=>{
          this.ans2=res;
          console.log('detailsdsfasdfads: '+JSON.stringify(this.ans2));
        }
      );
    // var object;
    // this.usersService.getJSON().subscribe(data => object=data, error => console.log(error));
  }

}
