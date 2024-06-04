import type { Schema, Attribute } from '@strapi/strapi';

export interface PagesPages extends Schema.Component {
  collectionName: 'components_pages_pages';
  info: {
    displayName: 'pages';
    icon: 'layout';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface SocialsSocials extends Schema.Component {
  collectionName: 'components_socials_socials';
  info: {
    displayName: 'socials';
    icon: 'earth';
    description: '';
  };
  attributes: {
    social_url: Attribute.String & Attribute.Required;
    social_img: Attribute.Media;
    hidden: Attribute.Boolean & Attribute.DefaultTo<false>;
    name: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'pages.pages': PagesPages;
      'socials.socials': SocialsSocials;
    }
  }
}
