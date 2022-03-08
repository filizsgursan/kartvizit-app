import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import{Card} from '../../models/card';
import { CardModalComponent } from '../card-modal/card-modal.component';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() card!:Card;
  constructor(
    private dailog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openUpdateCardModule(card:Card):void{
    this.dailog.open(CardModalComponent,{
      width:'400px',
      data:card
    });
  }
}
