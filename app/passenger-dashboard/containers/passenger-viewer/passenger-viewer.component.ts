import { Component, Input } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: `
  <div>
    <form>
    Form!
    <div>
      {{ detail | json }}
    </div>
    </form>
  </div>
  `,
})

export class PassengerViewerComponent {
  constructor(private passengerService: PassengerDashboardService) {}
  @Input()
  detail: Passenger;
}
