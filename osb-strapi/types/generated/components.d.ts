import type { Schema, Attribute } from '@strapi/strapi';

export interface PagesPages extends Schema.Component {
  collectionName: 'components_pages_pages';
  info: {
    displayName: 'pages';
    icon: 'layout';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required & Attribute.Unique;
    name: Attribute.String & Attribute.Required & Attribute.Unique;
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
    social_url: Attribute.String;
    social_img: Attribute.Media;
    hidden: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SpeechSpeech extends Schema.Component {
  collectionName: 'components_speech_speeches';
  info: {
    displayName: 'speech';
    icon: 'emotionHappy';
  };
  attributes: {
    speech: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'pages.pages': PagesPages;
      'socials.socials': SocialsSocials;
      'speech.speech': SpeechSpeech;
    }
  }
}
