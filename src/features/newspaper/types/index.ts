export interface Stat {
  sub: string;
  label: string;
  value: string;
}

export interface Experience {
  quote: string;
  name: string;
  role: string;
  date: string;
}

export interface Skill {
  title: string;
  items: string;
}

export type AnimationPhase =
  | "initial"
  | "sliding"
  | "rotating"
  | "zooming"
  | "expanded";
