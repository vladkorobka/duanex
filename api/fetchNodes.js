const data = [
  {
    name: "DiseaseAtlas",
    subitems: [
      {
        name: "components",
        subitems: [
          { name: "DiseaseAtlasAssociatedPopup.js" },
          { name: "DiseaseAtlasTreeFolder.js" },
        ],
      },
      {
        name: "store",
        subitems: [
          { name: "reducer.js" },
          { name: "saga.js" },
          { name: "selectors.js" },
        ],
      },
      {
        name: "backend",
        subitems: [{ name: "index.php" }, { name: "db.php" }],
      },
      {
        name: "nodejs",
        subitems: [
          {
            name: "api",
            subitems: [
              { name: "get.js" },
              { name: "post.js" },
              { name: "patch.js" },
            ],
          },
        ],
      },
      { name: "DiseaseAtlasPage.js" },
      { name: "DiseaseAtlasPage.css" },
      { name: "Utils.js" },
    ],
  },
  { name: "FindRelated" },
];

export const fetchNodes = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};
