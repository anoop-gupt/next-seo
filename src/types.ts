export interface OpenGraphImages {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface OpenGraphVideos {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface OpenGraphVideoActors {
  profile: string;
  role?: string;
}

export interface OpenGraph {
  url?: string;
  type?: string;
  title?: string;
  description?: string;
  images?: ReadonlyArray<OpenGraphImages>;
  videos?: ReadonlyArray<OpenGraphVideos>;
  defaultImageHeight?: number;
  defaultImageWidth?: number;
  locale?: string;
  site_name?: string;
  profile?: OpenGraphProfile;
  book?: OpenGraphBook;
  article?: OpenGraphArticle;
  video?: OpenGraphVideo;
}

export interface OpenGraphProfile {
  firstName?: string;
  lastName?: string;
  username?: string;
  gender?: string;
}

export interface OpenGraphBook {
  authors?: ReadonlyArray<string>;
  isbn?: string;
  releaseDate?: string;
  tags?: ReadonlyArray<string>;
}

export interface OpenGraphArticle {
  publishedTime?: string;
  modifiedTime?: string;
  expirationTime?: string;

  authors?: ReadonlyArray<string>;
  section?: string;
  tags?: ReadonlyArray<string>;
}

export interface OpenGraphVideo {
  actors?: ReadonlyArray<OpenGraphVideoActors>;
  directors?: ReadonlyArray<string>;
  writers?: ReadonlyArray<string>;
  duration?: number;
  releaseDate?: string;
  tags?: ReadonlyArray<string>;
  series?: string;
}

export interface Twitter {
  handle?: string;
  site?: string;
  cardType?: string;
}

export interface BaseMetaTag {
  content: string;
}

export interface HTML5MetaTag extends BaseMetaTag {
  name: string;
  property?: undefined;
}

export interface RDFaMetaTag extends BaseMetaTag {
  property: string;
  name?: undefined;
}

export type MetaTag = HTML5MetaTag | RDFaMetaTag;

export interface NextSeoProps {
  title?: string;
  titleTemplate?: string;
  noindex?: boolean;
  description?: string;
  canonical?: string;
  openGraph?: OpenGraph;
  facebook?: { appId: string };
  twitter?: Twitter;
  additionalMetaTags?: ReadonlyArray<MetaTag>;
}

export interface DefaultSeoProps extends NextSeoProps {
  dangerouslySetAllPagesToNoIndex?: boolean;
  defaultOpenGraphImageWidth?: number;
  defaultOpenGraphImageHeight?: number;
  defaultOpenGraphVideoWidth?: number;
  defaultOpenGraphVideoHeight?: number;
}

export interface BuildTagsParams extends DefaultSeoProps, NextSeoProps {}
