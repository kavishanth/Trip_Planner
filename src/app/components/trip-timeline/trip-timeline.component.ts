import { Component, Input } from '@angular/core';
import { Trip } from '../../models/trip.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trip-timeline',
  imports: [CommonModule],
  templateUrl: './trip-timeline.component.html',
  styleUrls: ['./trip-timeline.component.css']
})
export class TripTimelineComponent {
  @Input() trips: Trip[] = [];

  getXLine(index: number): number {
    console.log('getXLine', index);
    return index * 100 + 30;
  }

  getYLine(level: number): number {
    return 50 + level * 60;
  }

  getCurvePath(index: number): string {
    debugger;
    if (index === 0) return '';
    const prevX = this.getXLine(index - 1);
    const prevY = this.getYLine(this.trips[index - 1].level);
    const currX = this.getXLine(index);
    const currY = this.getYLine(this.trips[index].level);
    const midX = (prevX + currX) / 2;
    const curveY = prevY - 40;

    return `M${prevX},${prevY} Q${midX},${curveY} ${currX},${currY}`;
  }
}
