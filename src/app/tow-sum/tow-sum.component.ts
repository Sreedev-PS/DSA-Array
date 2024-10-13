import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tow-sum',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './tow-sum.component.html',
  styleUrl: './tow-sum.component.scss'
})
export class TowSumComponent {
  inputBinding:string = ''
  targetBinding:any
  result:any
  constructor(){

  }
  getValue(){
    let input = JSON.parse(this.inputBinding)
    let target = +this.targetBinding
    const hashMap = new Map()
    for (let i = 0; i < input.length; i++) {
        let result = target - input[i]
        if (hashMap.has(result)) {
            this.result =  [hashMap.get(result), i]
            return
        } else {
            hashMap.set(input[i], i)
        }
    }
    this.result = []
  }
}
