import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AlgorithmModule } from '../algorithm/algorithm.module';

@Component({
  selector: 'app-main',
  imports: [CommonModule, FormsModule, MaterialModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
  submitted: boolean = false;
  input: string = '';
  result?: any;

  findResult = () => {
    this.submitted = true;
    this.result = AlgorithmModule.findMajorityNumber(this.input);
  }
}
