import type { Schema, Attribute } from '@strapi/strapi';

export interface CardsBlogCards extends Schema.Component {
  collectionName: 'components_cards_blog_cards';
  info: {
    displayName: 'blogCards';
    icon: 'bold';
  };
  attributes: {
    blogImage: Attribute.Media;
    blogTitle: Attribute.Text;
    createdOn: Attribute.Date;
    author: Attribute.Text;
    authorImage: Attribute.Media;
  };
}

export interface CardsCard extends Schema.Component {
  collectionName: 'components_cards_cards';
  info: {
    displayName: 'card';
    icon: 'calendar';
    description: '';
  };
  attributes: {};
}

export interface CardsHeroCard extends Schema.Component {
  collectionName: 'components_cards_hero_cards';
  info: {
    displayName: 'heroCard';
    icon: 'alien';
  };
  attributes: {
    heading: Attribute.Text;
    subHeading: Attribute.Text;
    description: Attribute.Text;
    cta: Attribute.Text;
  };
}

export interface CardsIndustryCards extends Schema.Component {
  collectionName: 'components_cards_industry_cards';
  info: {
    displayName: 'industryCards';
    icon: 'briefcase';
  };
  attributes: {
    heading: Attribute.Text;
    description: Attribute.Text;
  };
}

export interface CardsOurPartners extends Schema.Component {
  collectionName: 'components_cards_our_partners';
  info: {
    displayName: 'ourPartners';
    icon: 'chartBubble';
  };
  attributes: {
    comment: Attribute.Text;
    link: Attribute.Text;
    linkUrl: Attribute.Text;
    logo: Attribute.Media;
  };
}

export interface CardsOurSuccessStoryCard extends Schema.Component {
  collectionName: 'components_cards_our_success_story_cards';
  info: {
    displayName: 'ourSuccessStoryCard';
    icon: 'command';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    comment: Attribute.Text;
    name: Attribute.Text;
    designation: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface CardsOverviewCard extends Schema.Component {
  collectionName: 'components_cards_overview_cards';
  info: {
    displayName: 'ourExpertiseCard';
    icon: 'folder';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface CardsServiceAndSolutionCard extends Schema.Component {
  collectionName: 'components_cards_service_and_solution_cards';
  info: {
    displayName: 'serviceAndSolutionCard';
    icon: 'cast';
  };
  attributes: {
    heading: Attribute.Text;
    subHeading: Attribute.Text;
    description: Attribute.Text;
    image: Attribute.Media;
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

export interface ContentOurValuesPoints extends Schema.Component {
  collectionName: 'components_content_our_values_points';
  info: {
    displayName: 'ourValuesPoints';
    icon: 'filter';
    description: '';
  };
  attributes: {
    heading: Attribute.Text;
    subHeading: Attribute.Text;
    ourValuesIcons: Attribute.Media;
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

export interface SectionHeroSection extends Schema.Component {
  collectionName: 'components_section_hero_sections';
  info: {
    displayName: 'heroSection';
    icon: 'archive';
    description: '';
  };
  attributes: {
    subTitle: Attribute.Text;
    title: Attribute.Text;
    cta: Attribute.String;
    heroImage: Attribute.Media;
    cta2: Attribute.Text;
  };
}

export interface SectionIndustries extends Schema.Component {
  collectionName: 'components_section_industries';
  info: {
    displayName: 'Industries';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    heading: Attribute.Text;
    subHeading: Attribute.Text;
    description: Attribute.Text;
    industriesCards: Attribute.Component<'cards.industry-cards', true>;
    image: Attribute.Media;
  };
}

export interface SectionJoinOurTeam extends Schema.Component {
  collectionName: 'components_section_join_our_teams';
  info: {
    displayName: 'joinOurTeam';
    icon: 'cloud';
    description: '';
  };
  attributes: {
    heading: Attribute.Text;
    subHeading: Attribute.Text;
    joinOurTeamPoints: Attribute.Component<'content.heading', true>;
    cta: Attribute.Text;
  };
}

export interface SectionOurValues extends Schema.Component {
  collectionName: 'components_section_our_values';
  info: {
    displayName: 'ourValues';
    icon: 'crown';
    description: '';
  };
  attributes: {
    heading: Attribute.Text;
    cta: Attribute.Text;
    ourValueImage: Attribute.Media;
  };
}

export interface SectionOverview extends Schema.Component {
  collectionName: 'components_section_overviews';
  info: {
    displayName: 'overview';
    icon: 'file';
  };
  attributes: {
    heading: Attribute.Text;
    subHeading: Attribute.Text;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface SectionWhoAreWe extends Schema.Component {
  collectionName: 'components_section_who_are_wes';
  info: {
    displayName: 'whoAreWe';
    icon: 'book';
    description: '';
  };
  attributes: {
    heading: Attribute.Text;
    subHeading: Attribute.Text;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cards.blog-cards': CardsBlogCards;
      'cards.card': CardsCard;
      'cards.hero-card': CardsHeroCard;
      'cards.industry-cards': CardsIndustryCards;
      'cards.our-partners': CardsOurPartners;
      'cards.our-success-story-card': CardsOurSuccessStoryCard;
      'cards.overview-card': CardsOverviewCard;
      'cards.service-and-solution-card': CardsServiceAndSolutionCard;
      'content.description': ContentDescription;
      'content.heading': ContentHeading;
      'content.our-values-points': ContentOurValuesPoints;
      'content.sub-heading': ContentSubHeading;
      'feature-box.feature-box': FeatureBoxFeatureBox;
      'feature-box.image': FeatureBoxImage;
      'section.hero-section': SectionHeroSection;
      'section.industries': SectionIndustries;
      'section.join-our-team': SectionJoinOurTeam;
      'section.our-values': SectionOurValues;
      'section.overview': SectionOverview;
      'section.who-are-we': SectionWhoAreWe;
    }
  }
}
