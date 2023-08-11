type Meta = {
  id: string;
  title: string;
  date: string;
  description: string;
  views: number;
};

type BlogPost = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};
