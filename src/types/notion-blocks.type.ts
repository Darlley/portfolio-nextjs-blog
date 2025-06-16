export type BlocksResponseType = {
  object: string;
  results: BlockResultsType[];
  next_cursor: any;
  has_more: boolean;
  type: string;
  block: {};
  developer_survey: string;
  request_id: string;
};

export type BlockResultsType = {
  object: string;
  id: string;
  parent: {
    type: string;
    page_id: string;
  };
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  has_children: boolean;
  archived: boolean;
  in_trash: boolean;
  type: string;
  paragraph?: ParagraphBlockType;
  video?: VideoBlockType;
  bookmark?: BookmarkBlockType;
  breadcrumb?: BreadcrumbBlockType;
  bulleted_list_item?: BulletedListItemBlockType;
  numbered_list_item?: NumeredListItemBlockType;
  callout?: CalloutBlockType;
  code?: CodeBlockType;
  column_list?: ColumnListBlockType;
  column?: ColumnBlockType;
  embed?: EmbedBlockType;
  equation?: EquationBlockType;
  file?: FileBlockType;
  link_preview?: LinkPreviewBlockType;
  pdf?: PdfBlockType;
  table?: TableBlockType;
  table_of_contents?: TableOfContentsBlockType;
  image?: ImageBlockType;
  heading_1?: HeadingType;
  heading_2?: HeadingType;
  heading_3?: HeadingType;
  quote?: QuoteBlockType;
};

export type ParagraphBlockType = BaseBlockType & {
  rich_text: RichTextType[];
};

type BaseBlockType = {
  color: BlockColor;
};


type HeadingType= {
  rich_text: [
    {
      type: string;
      text: {
        content: string;
        link: null;
      };
    }
  ];
  color: BlockColor;
  is_toggleable: false;
};

export type RichTextType = {
  type: "text";
  text: {
    content: string;
    link: {
      url: string;
    } | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: BlockColor;
  };
  plain_text: string;
  href: string | null;
};

type VideoBlockType = {
  caption: RichTextType[];
  type: "external" | "file";
  file?: VideoBlockFileType
  external?: VideoBlockExternalType
};

type VideoBlockFileType = {
  url: string
  expiry_time: string
}
type VideoBlockExternalType = {
  url: string
}

type BookmarkBlockType = {
  caption: RichTextType[];
  url: string;
};

type BreadcrumbBlockType = {};

type BulletedListItemBlockType = {
  rich_text: RichTextType[];
  color: BlockColor;
  children: BlockResultsType[];
};

type NumeredListItemBlockType ={
  rich_text: RichTextType[]
  color: BlockColor
}

type CalloutBlockType = {
  rich_text: RichTextType[];
  icon: {
    emoji: string;
  };
  color: BlockColor;
};

type CodeBlockType = {
  caption: RichTextType[];
  rich_text: RichTextType[];
  language: string;
};

type ColumnListBlockType = {};

type ColumnBlockType = {};

type EmbedBlockType = {
  url: string;
};

type EquationBlockType = {
  expression: string;
};

type FileBlockType = {
  caption: RichTextType[];
  type: "external";
  external: {
    url: string;
  };
  name: string;
};

type LinkPreviewBlockType = {
  url: string;
};

type PdfBlockType = {
  type: "external";
  external: {
    url: string;
  };
};

type TableBlockType = {
  table_width: number;
  has_column_header: boolean;
  has_row_header: boolean;
};

type TableOfContentsBlockType = {
  color: BlockColor;
};

type ImageBlockType = {
  caption: [],
  type: string,
  file: {
    url: string
    expiry_time: string
  }
};

type QuoteBlockType ={
  rich_text: RichTextType[],
  color: BlockColor
}

export type BlockColor =
  | "blue"
  | "blue_background"
  | "brown"
  | "brown_background"
  | "default"
  | "gray"
  | "gray_background"
  | "green"
  | "green_background"
  | "orange"
  | "orange_background"
  | "yellow"
  | "pink"
  | "pink_background"
  | "purple"
  | "purple_background"
  | "red"
  | "red_background"
  | "yellow_background";
