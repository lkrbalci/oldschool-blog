// Interface automatically generated by schemas-to-ts

import { Media } from "./Media";
import { Media_Plain } from "./Media";
import { AdminPanelRelationPropertyModification } from "./AdminPanelRelationPropertyModification";

export interface About {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    about_text?: string;
    about_media?: { data: Media };
  };
}
export interface About_Plain {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  about_text?: string;
  about_media?: Media_Plain;
}

export interface About_NoRelations {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  about_text?: string;
  about_media?: number;
}

export interface About_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  about_text?: string;
  about_media?: AdminPanelRelationPropertyModification<Media_Plain>;
}
