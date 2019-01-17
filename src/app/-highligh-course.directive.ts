import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlighCourse]'
})
export class HighlighCourseDirective implements OnInit {

  constructor(private el: ElementRef) {
  }

  @Input('appHighlighCourse') creationDate!: Date;

  ngOnInit(): void {
    const creationDate = this.creationDate;
    const currentDate = new Date();
    const currentDateSubstracted = new Date();
    currentDateSubstracted.setDate(currentDateSubstracted.getDate() - 14);

    if (creationDate < currentDate && creationDate >= currentDateSubstracted) {
      this.el.nativeElement.classList.add('text-white', 'bg-success');
    } else if (creationDate > currentDate) {
      this.el.nativeElement.classList.add('text-white', 'bg-primary');
    }

  }

}
