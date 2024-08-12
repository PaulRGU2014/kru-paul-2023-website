import type { Schema, Attribute } from '@strapi/strapi';

export interface ReusableComponentLink extends Schema.Component {
  collectionName: 'components_reusable_component_links';
  info: {
    displayName: 'link';
    icon: 'code';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    target: Attribute.Enumeration<['_self', '_blank']>;
  };
}

export interface ReusableComponentFooter extends Schema.Component {
  collectionName: 'components_reusable_component_footers';
  info: {
    displayName: 'footer';
    icon: 'code';
  };
  attributes: {
    disclaimer: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'reusable-component.link': ReusableComponentLink;
      'reusable-component.footer': ReusableComponentFooter;
    }
  }
}
