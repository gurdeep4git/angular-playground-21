import { Component, inject, input } from '@angular/core';
import { Devices, SmartHomeService } from '../smart-home.service';

@Component({
  selector: 'app-device',
  imports: [],
  templateUrl: './device.component.html',
  styleUrl: './device.component.scss',
})
export class DeviceComponent {
  smartHomeService = inject(SmartHomeService);
  device = input.required<Devices>();

  onDeviceClick(id: number): void{
    this.smartHomeService.deviceToggle(id)
  }
}
