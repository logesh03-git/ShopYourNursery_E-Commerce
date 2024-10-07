export type item = {
  id: number;
  title: string;
  link: string;
};
export type footerDetailsProps = {
  id: number;
  title: string;
  items: item[];
};

export const footerDetails: footerDetailsProps[] = [
  {
    id: 1,
    title: "Products",
    items: [
      { id: 1, title: "Categories", link: "" },
      { id: 2, title: "Top Products", link: "" },
    ],
  },
  {
    id: 2,
    title: "Support",
    items: [
      { id: 1, title: "Support request", link: "" },
      { id: 2, title: "Contact", link: "" },
    ],
  },
  {
    id: 3,
    title: "About",
    items: [
      { id: 1, title: "Blogs", link: "" },
      { id: 2, title: "FAQ's", link: "" },
    ],
  },
  {
    id: 4,
    title: "Privacy policy",
    items: [{ id: 1, title: "Support request", link: "Terms & Conditions" }],
  },
];
