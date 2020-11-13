import { Component, Input, OnInit } from '@angular/core';
import { IInfosTitle } from 'src/app/interfaces/IInfos';
import { IReport } from 'src/app/interfaces/IMeteoInfo';
import moment from 'moment';

@Component({
  selector: 'reunion-map-infos',
  templateUrl: './reunion-map-infos.component.html',
  styleUrls: ['./reunion-map-infos.component.scss']
})
export class ReunionMapInfosComponent implements OnInit {
  @Input()
  public report: IReport;

  public infosTitle: IInfosTitle;

  constructor() { }

  ngOnInit(): void {
    this.infosTitle = {
      title: this.report.sujet,
      date: moment(this.report.date).format('L'),
    };
  }
}
