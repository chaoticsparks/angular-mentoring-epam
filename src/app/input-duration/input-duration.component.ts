import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-duration',
  templateUrl: './input-duration.component.html',
  styleUrls: ['./input-duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputDurationComponent implements OnInit {

  public duration = '';

  constructor() { }

  ngOnInit() {
  }

}
