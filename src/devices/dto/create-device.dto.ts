import { Device_type } from "../entities/device.entity";

export class CreateDeviceDto {
  profile_id: number;

  device_type: Device_type;

  device_name: string;

  os: string;

  last_seen_at: Date;
}
