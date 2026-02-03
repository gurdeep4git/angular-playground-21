import { Component, inject } from '@angular/core';
import { StatsComponent } from './stats/stats.component';
import { SmartHomeService } from './smart-home.service';
import { DeviceComponent } from './device/device.component';

@Component({
  selector: 'app-smart-home',
  imports: [StatsComponent, DeviceComponent],
  templateUrl: './smart-home.component.html',
  styleUrl: './smart-home.component.scss',
})
export class SmartHomeComponent {
  smartHomeService = inject(SmartHomeService);

  onActivateAll(): void{
    this.smartHomeService.onActivateAll()
  }

  onEmergencyShutoff(): void{
    this.smartHomeService.onEmergencyShutoff()
  }
}
