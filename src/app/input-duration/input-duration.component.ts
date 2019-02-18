import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-duration',
  templateUrl: './input-duration.component.html',
  styleUrls: ['./input-duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputDurationComponent implements OnInit {

  @Input() duration!: string;

  constructor() { }

  ngOnInit() {
  }

}
