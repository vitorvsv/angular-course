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
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
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
  // @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log("Called constructor!");
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
    console.log("Called ngOnInit!");
    console.log("paragraph Content: " + this.paragraph.nativeElement.textContent);
  }
  
  ngDoCheck() {
    console.log("ngDoCheck called!");
  }
  
  ngAfterContentInit() {
    console.log("ngAfterContentInit called!");
    console.log("paragraph Content: " + this.paragraph.nativeElement.textContent);
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
