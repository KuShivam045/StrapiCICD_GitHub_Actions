import type { Schema, Attribute } from '@strapi/strapi';

export interface CardsCard extends Schema.Component {
  collectionName: 'components_cards_cards';
  info: {
    displayName: 'card';
    icon: 'calendar';
  };
  attributes: {
    cardHeading: Attribute.Component<'content.heading', true>;
    cardDescription: Attribute.Component<'content.description', true>;
    cardCta: Attribute.Component<'feature-box.feature-box', true>;
  };
}

export interface ContentDescription extends Schema.Component {
  collectionName: 'components_content_descriptions';
  info: {
    displayName: 'Description';
    icon: 'strikeThrough';
    description: '';
  };
  attributes: {
    label: Attribute.Text;
  };
}

export interface ContentHeading extends Schema.Component {
  collectionName: 'components_content_headings';
  info: {
    displayName: 'heading';
    icon: 'book';
  };
  attributes: {
    label: Attribute.String;
    color: Attribute.String;
    isVisible: Attribute.Boolean;
    fontSize: Attribute.String;
  };
}

export interface ContentSubHeading extends Schema.Component {
  collectionName: 'components_content_sub_headings';
  info: {
    displayName: 'SubHeading';
    icon: 'strikeThrough';
  };
  attributes: {
    label: Attribute.String;
  };
}

export interface FeatureBoxFeatureBox extends Schema.Component {
  collectionName: 'components_feature_box_feature_boxes';
  info: {
    displayName: 'cta';
    icon: 'layout';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    color: Attribute.String;
    isHidden: Attribute.Boolean;
  };
}

export interface FeatureBoxImage extends Schema.Component {
  collectionName: 'components_feature_box_images';
  info: {
    displayName: 'image';
    icon: 'landscape';
  };
  attributes: {
    heroImages: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cards.card': CardsCard;
      'content.description': ContentDescription;
      'content.heading': ContentHeading;
      'content.sub-heading': ContentSubHeading;
      'feature-box.feature-box': FeatureBoxFeatureBox;
      'feature-box.image': FeatureBoxImage;
    }
  }
}
