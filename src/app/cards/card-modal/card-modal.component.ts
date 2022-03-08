import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Card} from '../../models/card';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent implements OnInit {

  cardForm!: FormGroup;

  constructor(
    private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:Card
  ) { }

  ngOnInit(): void {
    console.log(this.data)
    this.cardForm = this.fb.group({
      name: [this.data?.name ||'', [Validators.required,Validators.maxLength(255)]],
      phone:[this.data?.phone ||'',[Validators.required]],
      email:[this.data?.email ||'',[Validators.required,Validators.maxLength(255)]]
    });
  }
  addCard(){
    console.log(this.cardForm.value);
  }
}
