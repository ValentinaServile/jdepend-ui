const fs = require('fs');
const parser = require('fast-xml-parser');

const args = process.argv.slice(2);

if (!args[0] || !args[1]) {
  console.log("Usage: npm run jdepend-ui <path-to-xml-report> <your-packages-prefix>\n")
  console.log("  <path-to-xml-report>: You can generate a report with `java jdepend.xmlui.JDepend -file report.xml <your-java-project>/build`")
  console.log("  <your-project-prefix>: Example: org.mycompany.myservice. This will be used to filter irrelevant results\n\n")
  process.exit(1);
}

const xmlData = fs.readFileSync(args[0], 'utf8');

const parserOptions = {
  attrNodeName: "@_attrs",
  ignoreAttributes : false,
  parseAttributeValue : true,
  attributeNamePrefix : "@_"
}
const reportContent = parser.parse(xmlData, parserOptions);

const isNotErrorPackage = (package) => !package.error
const isNotExternalPackage = (package) => package["@_attrs"]["@_name"].includes(args[1])

const allPackages = reportContent.JDepend.Packages.Package;

const relevantPackages = allPackages.filter(isNotErrorPackage).filter(isNotExternalPackage);

const template = fs.readFileSync('./index.html.template', 'utf8');
const result = template.replace("%%points_placeholder%%", JSON.stringify(relevantPackages));

fs.writeFileSync('./index.html', result);

console.log("Your report has been written to index.html. Open the file with a web browser to visualize.");
