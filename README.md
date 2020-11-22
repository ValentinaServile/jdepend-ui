# jdepend-ui

Small Javascript tool that generates an HTML visualization for JDepend XML reports.

The output of this will be an `index.html` page which you can open and interact with in the browser, to visualize some of the metrics.

For instructions on what JDepend does, how to install or how to generate reports, visit the official repo: https://github.com/clarkware/jdepend

# Sample output

![Sample output](https://raw.githubusercontent.com/ValentinaServile/jdepend-ui/main/sample-output.png)

# How to use

* Clone this repo

* `npm install`

* Make sure you have a report file somewhere (and that it's in XML format)

* `npm run jdepend-ui`, making sure to pass the path to your XML report as a first argument, and the prefix of your packages as a second argument.

* Your `index.html` file should be ready. Open it in web browser and have fun.

```
npm run jdepend-ui <path-to-xml-report> <your-packages-prefix>

  <path-to-xml-report>: You can generate a report with `java jdepend.xmlui.JDepend -file report.xml <your-java-project>/build

  <your-project-prefix>: Example: org.mycompany.myservice. This will be used to filter irrelevant results
```

# Disclaimer

This is code that I did in my spare time and in a hurry, wishing to extract some data ASAP.
It is ~~a piece of sh*t~~ not reflective of my standards for production quality code.
I am sharing it so that others can be free to use it and improve it, but don't judge me too hard, and especially don't use it in production!
