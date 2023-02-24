import { Component, OnInit } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-dialogContent',
  templateUrl: './dialogContent.component.html',
})

export class DialogContentComponent implements OnInit{
  freshnessList = ["Brand New", "Second Hand", "Refurbished"]

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
