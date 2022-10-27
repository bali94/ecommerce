export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "string",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
        name: "price",
        title: "Price",
        type: "number",
      },
      {
        name:'details',
        title:'Details',
        type:'string'
      }
  ],
};
