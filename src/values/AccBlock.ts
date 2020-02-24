export default class AccBlock{
  timestamp: number;

  battery: number;

  temperature: number;

  samples: number[][];

  rate: number;

  range: number;

  constructor(timestamp: number,
    battery: number,
    temperature: number,
    samples: number[][],
    rate: number,
    range: number) {
    this.timestamp = timestamp;
    this.battery = battery;
    this.temperature = temperature;
    this.samples = samples;
    this.rate = rate;
    this.range = range;
  }
}
