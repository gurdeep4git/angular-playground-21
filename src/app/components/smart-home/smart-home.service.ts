import { computed, Injectable, signal } from '@angular/core';

export interface SmartHomeState {
  devices: Devices[];
  armSystemStatus: boolean;
  activateAll: boolean;
}

export interface Devices {
  id: number;
  title: string;
  status: boolean;
  load: number;
}

@Injectable({
  providedIn: 'root',
})
export class SmartHomeService {
  private initValue: SmartHomeState = {
    devices: [
      {
        id: 1,
        status: false,
        load: 15,
        title: 'Living Room',
      },
      {
        id: 2,
        status: false,
        load: 15,
        title: 'Kitchen',
      },
      {
        id: 3,
        status: false,
        load: 15,
        title: 'Bed Room',
      },
      {
        id: 4,
        status: false,
        load: 15,
        title: 'Study Room',
      },
    ],
    activateAll: false,
    armSystemStatus: false,
  };

  private smartHomeState = signal<SmartHomeState>(this.initValue);

  devices = computed(() => this.smartHomeState().devices);
  totalLoad = computed(() =>
    this.smartHomeState()
      .devices.filter((i) => i.status)
      .reduce((acc, d) => acc + d.load, 60),
  );
  activateAll = computed(()=>this.smartHomeState().activateAll);
  activeDevicesCount = computed(()=>this.smartHomeState().devices.filter(i=>i.status).length)

  deviceToggle(id: number): void {
    this.smartHomeState.update((state) => {
      return {
        ...state,
        devices: state.devices.map((d) =>
          d.id === id ? { ...d, status: !d.status } : d,
        ),
      };
    });
  }

  onActivateAll(): void {
    this.smartHomeState.update((s) => {
      return {
        ...s,
        activateAll:true,
        devices: s.devices.map((d) => ({ ...d, status: true })),
      };
    });
  }

  onEmergencyShutoff(): void {
    this.smartHomeState.update((s) => {
      return {
        ...s,
        activateAll:false,
        devices: s.devices.map((d) => ({ ...d, status: false })),
      };
    });
  }
}
