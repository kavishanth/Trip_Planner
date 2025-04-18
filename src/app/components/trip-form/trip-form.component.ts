import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-trip-form',
  imports: [ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatButtonModule],
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.css']
})
export class TripFormComponent {
  @Output() tripAdded = new EventEmitter<{ startPoint: string; endPoint: string }>();
  @Output() clearLastTrip = new EventEmitter<void>();
  @Output() clearAllTrip = new EventEmitter<void>();
  tripForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.tripForm = this.fb.group({
      startPoint: [''],
      endPoint: ['']
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.tripForm.value);
    this.tripAdded.emit(this.tripForm.value);
    this.tripForm.reset();
  }
  clearPreviousTrip() {
    this.tripForm.reset();
    this.clearLastTrip.emit();
  }
  clearAllTrips() {
    this.tripForm.reset();
    this.clearAllTrip.emit(); // Optional: notify parent to clear the trip list
  }
}
