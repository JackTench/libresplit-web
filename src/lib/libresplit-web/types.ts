export interface Split {
  splitName: string;
  splitTime: string;
}

export interface LibreSplitFile {
  gameName: string;
  splits: Split[];
  width: number;
  height: number;
}
