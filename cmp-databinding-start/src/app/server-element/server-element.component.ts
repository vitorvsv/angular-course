import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges,
  DoCheck,
  AfterViewInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None
})

export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
{

  // By default all proprietates of a component are restricted access
  // 
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name : string;

  constructor() {
    console.log("Called constructor!");
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
    console.log("Called ngOnInit!");
  }
  
  ngDoCheck() {
    console.log("ngDoCheck called!");
  }
  
  ngAfterContentInit() {
    console.log("ngAfterContentInit called!");
  }  
  
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!");
  }  
  
  ngAfterViewInit() {
    console.log("ngAfterViewInit called!");
    
  }
  
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!");
  }
  
  ngOnDestroy() {
    console.log("ngOnDestroy called!");
  }

}
