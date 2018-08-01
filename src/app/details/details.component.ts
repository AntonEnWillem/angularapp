import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {ActivatedRoute} from "@angular/router";
import { Observable} from "rxjs";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private route : ActivatedRoute, private data : DataService) {
    this.route.params.subscribe( params => this.id = params.id)
  }

  id;

  user$ : Object;

  ngOnInit() {
    this.data.getUser(this.id).subscribe(
      data => this.user$ = data
    )
  }

}
