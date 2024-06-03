// Interface automatically generated by schemas-to-ts

import { SpeechComponent } from '../../../../components/speech/interfaces/SpeechComponent';
import { SpeechComponent_Plain } from '../../../../components/speech/interfaces/SpeechComponent';
import { SpeechComponent_NoRelations } from '../../../../components/speech/interfaces/SpeechComponent';

export interface Speech {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    speeches: SpeechComponent[];
  };
}
export interface Speech_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  speeches: SpeechComponent_Plain[];
}

export interface Speech_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  speeches: SpeechComponent_NoRelations[];
}

export interface Speech_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  speeches: SpeechComponent_Plain[];
}