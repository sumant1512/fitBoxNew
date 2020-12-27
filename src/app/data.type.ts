// This is type for emiting event when selecting any page or opening and closing header for mobile and I-pad view
export interface ToggleStatusEmit {
  toggleStatus: boolean;
  selectedPage?: string;
}

export interface ScrollType {
  isPrevious?: boolean;
  selectedPage: string;
}
