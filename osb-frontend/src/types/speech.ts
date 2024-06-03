// Interface automatically generated by schemas-to-ts

import {
  SpeechComponent,
  SpeechComponent_NoRelations,
  SpeechComponent_Plain,
} from "./SpeechComponent";

export interface Speech {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    speeches: SpeechComponent[];
  };
}
export interface Speech_Plain {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  speeches: SpeechComponent_Plain[];
}

export interface Speech_NoRelations {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  speeches: SpeechComponent_NoRelations[];
}

export interface Speech_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  speeches: SpeechComponent_Plain[];
}
