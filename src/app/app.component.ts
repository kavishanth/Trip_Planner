import { Component } from '@angular/core';
import { Trip } from './models/trip.model';
import { TripFormComponent } from './components/trip-form/trip-form.component';
import { TripTimelineComponent } from './components/trip-timeline/trip-timeline.component';

@Component({
  selector: 'app-root',
  imports: [TripFormComponent,TripTimelineComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  trips: Trip[] = [];
  title: any;

  onTripAdded({ startPoint, endPoint }: { startPoint: string; endPoint: string }) {
    const shortStart = startPoint.trim().substring(0, 3).toUpperCase();
    const shortEnd = endPoint.trim().substring(0, 3).toUpperCase();
    const lastTrip = this.trips[this.trips.length - 1];

    const continued = lastTrip?.endPoint === shortStart;
    const sameAsPrevious = lastTrip?.startPoint === shortStart && lastTrip?.endPoint === shortEnd;

    const trip: Trip = {
      startPoint: shortStart,
      endPoint: shortEnd,
      continued,
      sameAsPrevious,
      level: sameAsPrevious ? 2 : 1
    };

    this.trips.push(trip);
  }
  clearLastTrip() {
    this.trips.pop(); 
  }
  clearAllTrip() {
    this.trips = [];
  }
}
