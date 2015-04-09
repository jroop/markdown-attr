# markdown-attr
A simple parser to allow addition of HTML attributes when writing markdown. Useful if one wants to include some more specific styling to Markdown. An example would be to float an image to the right or put a class name for a specific code black. 

##Tags Supported
Currently only a few html tags are supported:
```html
<a>
<img>
<li>
<code>
```

##Usage
Usage in the browser:
```html
<script src="/path/to/markdown-attr.js"></script>
```
Usage for Node.js:
```javascript
var markdown_attr = requires('markdown_attr');
```

Call function on Markdown string asynchronously:
```javascript
var c = '`code`{style="background:LightBlue"}';

markdown_attr.parse(c,function(err,content){
  c = content;
});
```
Call function synchronously:
```javascript
var c = '`code`{style="background:LightBlue"}';
var content = '';
content = markdown_attr.parse(c);
```


##Example Result
When writing Markdown a special `{` and `}` are used to capture the attribute input. 
* Classes can use the `.cls-name` format.
* Ids can use the `#id-name` format. 
* Other Attributes can use `attr="value"` format.

Writing:
```
`Error`{style="background:red".cls-Error.cls-ErrorBad#id-Error}
```
Will render:
```
<code id="id-Error" class="cls-Error cls-ErrorBad" style="background:red">Error</code>
```