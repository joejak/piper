import { TestBed } from '@angular/core/testing';

import { UsbIOService } from './usb-io.service';

describe('UsbIOService', () => {
  let service: UsbIOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsbIOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
