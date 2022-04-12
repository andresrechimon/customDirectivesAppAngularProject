import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {
  htmlElement:ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _message: string = 'Este campo es obligatorio';
  @Input() set color(value:string){
    this._color = value;
    this.setColor();
  }
  @Input() set message(value:string){
    this._message = value;
    this.setMessage();
  }
  @Input() set valid(value:boolean){
    if(value){
      this.htmlElement.nativeElement.classList.add('hidden');
    }else{
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor(private el:ElementRef<HTMLElement>) { 
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setStyle();
    this.setColor();
    this.setMessage();
  }

  setStyle():void{
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor():void{
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMessage():void{
    this.htmlElement.nativeElement.innerHTML = this._message;
  }
}
