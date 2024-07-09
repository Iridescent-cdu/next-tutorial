import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  metrics = [
    {
      cpu: 0.5,
    },
  ]
  getMetrics() {
    return this.metrics
  }

  setMetrics(metrics: (typeof this.metrics) extends Array<infer T> ? T : never) {
    this.metrics.push(metrics)

    return this.metrics
  }
}
