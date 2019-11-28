import { Component, OnInit, Input } from '@angular/core';
import { Menu } from 'src/app/messages/Menu';
import { MessagesService } from 'src/app/messages/messages.service';
@Component({
  selector: 'app-ans1',
  templateUrl: './ans1.component.html',
  styleUrls: ['./ans1.component.css']
})
export class Ans1Component implements OnInit {

  @Input()
  ans: Array<Menu>;
  list:Array<Menu>;
  menu:Menu;

  ans2=Menu;
  constructor(private messageService:MessagesService) { }

  ngOnInit() {
    alert("*********** "+JSON.stringify(this.ans));

  }
  getAnswers(e){
    alert(e.menuName);
    // for(var i=0;i<this.ans.length;i++){
    //   alert('asdfsadf '+JSON.stringify(this.ans)+", "+this.ans[i].menuName);
    // }

    this.menu = new Menu(e.id,e.menuName,e.count,e.type,e.description);
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
