// Interface automatically generated by schemas-to-ts

import { AdminPanelRelationPropertyModification } from "./AdminPanelRelationPropertyModification";
import { Media, Media_Plain } from "./Media";

export enum Status {
  Draft = "draft",
  Published = "published",
  Archived = "archived",
}

export interface Post {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    title: string;
    content?: string;
    slug: string;
    yt_link?: string;
    is_featured?: boolean;
    status?: Status;
    featured_image?: { data: Media };
    description?: string;
    keywords?: string;
    rich_text_blocks?: any;
  };
}
export interface Post_Plain {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  title: string;
  content?: string;
  slug: string;
  yt_link?: string;
  is_featured?: boolean;
  status?: Status;
  featured_image?: Media_Plain;
  description?: string;
  keywords?: string;
  rich_text_blocks?: any;
}

export interface Post_NoRelations {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  title: string;
  content?: string;
  slug: string;
  yt_link?: string;
  is_featured?: boolean;
  status?: Status;
  featured_image?: number;
  description?: string;
  keywords?: string;
  rich_text_blocks?: any;
}

export interface Post_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  title: string;
  content?: string;
  slug: string;
  yt_link?: string;
  is_featured?: boolean;
  status?: Status;
  featured_image?: AdminPanelRelationPropertyModification<Media_Plain>;
  description?: string;
  keywords?: string;
  rich_text_blocks?: any;
}
