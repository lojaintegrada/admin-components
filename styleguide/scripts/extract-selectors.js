const listSelectors = require("list-selectors");
const fs = require("fs");

listSelectors(
  ["./dist/tailwind.css"],
  { include: ["classes"] },
  ({ classes }) => {
    fs.writeFileSync(
      "./dist/usedCSSClasses.json",
      JSON.stringify(
        classes.map(c =>
          c
            .substring(1)
            .split("\\")
            .join("")
        )
      )
    );
  }
)
