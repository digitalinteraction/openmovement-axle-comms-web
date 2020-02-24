interface IAxLE {
  deviceId: string;
  serialNumber: string;
  battery: Promise<string>;
  deviceTime: Promise<number>;
  eraseData: Promise<EraseData>;
  connectionInterval: Promise<number>;
  cueing: Promise<boolean>;
  cueingPeriod: Promise<number>;
  epochPeriod: Promise<number>;
  goalPeriodOffset: Promise<number>;
  goalPeriod: Promise<number>;
  goalThreshold: Promise<number>;

  authenticate(password: string): Promise<boolean>;
  setPassword(password: string): Promise<void>;
  resetPassword(): Promise<void>;

  vibrateDevice(): Promise<void>;
  ledFlash(): Promise<void>;

  confirmUserInteraction(timeout: number): Promise<boolean>;

  writeRealTime(time: Date): Promise<void>;

  writeBitmap(file: string): Promise<void>;
  writeBitmap(data: Int8Array, offset: number): Promise<void>;
  clearDisplay(): Promise<void>;
  displayIcon(offset: number, start: number, height: number): Promise<void>;
  paintDisplay(offset: number, startCol: number, startRow: number, cols: number, rows: number, span: number): Promise<void>;

  startAccStream(rate: number, range: number): Promise<void>;
  stopAccStream(): Promise<void>;
  accStream:[ (block: AccBlock) => void ];

  readBlockDetails(): Promise<BlockDetails>;
  syncCurrentEpochBlock(): Promise<EpochBlock>;
  syncEpochData(lastBlock: number, lastRTC?: number, lastSync?: Date): Promise<EpochBlock[]>;
  syncEpochData(readFrom: number, readTo: number, startRTC?: number, startTime?: Date): Promise<EpochBlock[]>;

  debugDump(): Promise<string>;
}

export default IAxLE;
