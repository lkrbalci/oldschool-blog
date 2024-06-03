// Interface automatically generated by schemas-to-ts

export interface Contact {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    contact_text?: string;
  };
}
export interface Contact_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  contact_text?: string;
}

export interface Contact_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  contact_text?: string;
}

export interface Contact_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  contact_text?: string;
}
