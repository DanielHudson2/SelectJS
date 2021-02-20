# SimpleSelectJS
## What Is SimpleSelectJS?
This is a simple JS project demonstrating replacing a browser rendered select element with a custom element that is easier to style.

## What Does SimpleSelectJS Solve?
Select elements are notoriously fiddly to style and are displayed inconsistently across browsers, SimpleSelectJS simply replaces the browser rendered select element with a custom one allowing much easier styling which is consistent across all browsers.

## How To Use SimpleSelectJS.
1. Download the repo.
2. Inside you will find 2 files that provide a demo of how the setup works 'demo.html' and 'demo.js' and a folder called 'simple-select-js' which contains the library files.
3. Choose whether you want the minified or unminifed files (this really depends on if you are planning on making changes to the files).
4. Copy the library files into your website however you choose.
5. Link the CSS file to your site.
6. Create a new script file to import the simpleSelect class with the following: 'import simpleSelect from "./simple-select.js"' (the file route will change depending on where you added the JavaScript file).
7. After importing the class you need to write some JavaScript to select the elements you want and then call a new 'simpleSelect' and pass in the selected element (if you are selecting more than one element you will need to loop through each calling the 'simpleSelect') - see demo.js in the repo for an example setup.
8. Link your new script file to your site as a 'type="module"' and SimpleSelectJS will replace any select elements found in your scripts file with a custom element that is much easier to style.
