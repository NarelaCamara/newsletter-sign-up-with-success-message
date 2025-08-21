import iconList from "./src/assets/icon-list.svg";

import iconSuccess from "./src/assets/icon-success.svg";

module.exports = {
  theme: {
    extend: {
      listStyleImage: {
        "icon-list": `url(${iconList})`,
        "icon-success": `url(${iconSuccess})`,
      },
    },
  },
};
