export type DatabaseResponseType = {
  object: string;
  results: DatabaseResultsType[];
  next_cursor: any;
  has_more: boolean;
  type: string;
  page_or_database: {};
  developer_survey: string;
  request_id: string;
};

export type DatabaseResultsType = {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by: {
    object: string
    id: string
  }
  last_edited_by: {
    object: string
    id: string
  }
  cover: {
    type: string
    external: {
      url: string
    }
  }
  icon: any
  parent: {
    type: string
    database_id: string
  }
  archived: boolean
  in_trash: boolean
  properties: DatabaseResultPropertiesType,
  url: string
  public_url: any
}

export type DatabaseResultPropertiesType = {
  ID: {
    id: string
    type: string
    unique_id: {
      prefix: string
      number: number
    }
  }
  URL: {
    id: string
    type: string
    formula: {
      type: string
      string: string
    }
  }
  "Criado em": {
    id: string
    type: string
    created_time: string
  }
  "Última atualização em": {
    id: string
    type: string
    last_edited_time: string
  }
  Featured: {
    id: string
    type: string
    files: Array<{
      name: string
      type: string
      file: {
        url: string
        expiry_time: string
      }
    }>
  }
  Summary: {
    id: string
    type: string
    rich_text: Array<{
      type: string
      text: {
        content: string
        link: any
      }
      annotations: {
        bold: boolean
        italic: boolean
        strikethrough: boolean
        underline: boolean
        code: boolean
        color: string
      }
      plain_text: string
      href: any
    }>
  }
  Status: {
    id: string
    type: string
    status: {
      id: string
      name: string
      color: string
    }
  }
  Titulo: {
    id: string
    type: string
    title: Array<{
      type: string
      text: {
        content: string
        link: any
      }
      annotations: {
        bold: boolean
        italic: boolean
        strikethrough: boolean
        underline: boolean
        code: boolean
        color: string
      }
      plain_text: string
      href: any
    }>
  }
}