import { Component,NgModule,OnInit } from '@angular/core';
import { ToolsService } from '../sevices/tools/tools.service';
import { CommonModule } from '@angular/common';
import { Tools } from '../shared/models/tools';
import {StarRatingComponent} from 'ng-starrating';
import { RatingComponent } from 'ng-starrating/lib/rating.component';
import { ActivatedRoute } from '@angular/router';

interface tools{
  id:number;
  name:string;
  description:string;
}
@Component({
  selector: 'app-home',
  imports:[CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tools: Tools[] = [ 
  ];
  constructor(private ts:ToolsService,private router:ActivatedRoute){}
  ngOnInit():void{

      this.tools=this.ts.getAll();
  }

}
