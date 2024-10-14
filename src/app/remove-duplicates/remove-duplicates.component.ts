import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-remove-duplicates',
  standalone: true,
  imports: [CommonModule,
    FormsModule
  ],
  templateUrl: './remove-duplicates.component.html',
  styleUrl: './remove-duplicates.component.scss'
})
export class RemoveDuplicatesComponent {
  result: any
  inputBindings: any
  resultArray: any[] = [];
  getResult() {
    let nums = JSON.parse(this.inputBindings)
    let currentIndex = 1
    for (let i = 1; i < nums.length; i++) {
      if (nums[currentIndex-1] !== nums[i]) {
        nums[currentIndex] = nums[i]
        currentIndex++
      }
    }
    this.resultArray = nums
    this.resultArray.fill('-',currentIndex)
    this.result = currentIndex
  }
}
