import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlighCourse]'
})
export class HighlighCourseDirective implements OnInit {

  constructor(private el: ElementRef) {
  }

  @Input('appHighlighCourse') creationDate!: string;

  ngOnInit(): void {

    const dateArr = this.creationDate.split('.');
    const creationDate = new Date(+dateArr[2], +dateArr[1] - 1, +dateArr[0]);
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
