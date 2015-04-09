# markdown-attr
Useful if one wants to include some more specific styling to Markdown. Pass in a Markdown string that has been converted to HTML and run this parser. An example would be to float an image to the right or put a class name for a specific code black. 

Pairs well with [marked](https://www.npmjs.com/package/marked). But should be able to take any markdown to html ouput and add attributes.

#Tags Supported
Currently only a few html tags are supported:
```html
<a>
<img>
<li>
<code>
```
#Install
`npm install markdown-attr`

#Usage
Usage in the browser:
```html
<script src="/path/to/markdown-attr.js"></script>
```
Usage for Node.js:
```javascript
var markdown_attr = requires('markdown_attr');
```

Eamples using `marked` and `markdown-attr`:
Call function asynchronously:
```javascript
var c = '`code`{style="background:LightBlue"}';
var content = '';

marked(e.value, function(e,c){
  markdown_attr.parse(c,function(e,c){
    content = c;
  });
});
```
Call function synchronously:
```javascript
var c = '`code`{style="background:LightBlue"}';
var content = '';
content = marked(markdown_attr.parse(c));
```


#Example Result
When writing Markdown a special `{` and `}` are used to capture the attribute input. 
* Classes can use the `.cls-name` format.
* Ids can use the `#id-name` format. 
* Other Attributes can use `attr="value"` format.

Passing markdown `marked` and `markdown-attr`:
```
`Error`{style="background:red".cls-Error.cls-ErrorBad#id-Error}
```
Will render:
```
<code id="id-Error" class="cls-Error cls-ErrorBad" style="background:red">Error</code>
```