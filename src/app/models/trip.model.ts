export interface Trip {
  startPoint: string;
  endPoint: string;
  level: number; // 1 or 2
  continued: boolean;
  sameAsPrevious: boolean;
}