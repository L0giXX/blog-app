type Meta = {
  id: string;
  title: string;
  date: string;
  description: string;
};

type BlogPost = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};
