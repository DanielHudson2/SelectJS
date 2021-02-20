# What Is SimpleSelectJS?
This is a simple JS project demonstrating replacing a browser rendered select element with a custom element that is easier to style.

# How To Use SimpleSelectJS
1. Download the repo
2. Inside you will find 2 files that provide a demo of how the setup works 'demo.html' and 'demo.js'
3. You will also find minified or non minifed versions of the library (minified files have '.min' in their filenames
4. Copy the library files into your website however you choose
5. Link the CSS file to your site
6. Create a new script file to import the simpleSelect class with the following: 'import simpleSelect from "./simple-select.js"' (the file route will change depending on where you added the JavaScript file)
7. After importing the class you need to write some JavaScript to select the elements you want and then call a new 'simpleSelect' and pass in the selected element (if you are selecting more than one element you will need to use a .forEach loop) - see demo.js in the repo for an example setup
8. Link your new script file to your site as a 'type="module"' and SimpleSelectJS will replace any select elements found in your scripts file with a custom element that is much easier to style
