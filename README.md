## Select To Datalist

Convert a `<select>` element into an `<input>` with a `<datalist>`.
This is for progressive enhancement if the HTML `<datalist>` element is supported.

Add `select-to-datalist.js` to html

```html
<script src="path/to/select-to-datalist.js"></script>
```

Then convert the relevant element with `selectToDatalist`

```javascript
var selectElement = document.getElementById("id");
selectToDatalist(selectElement);
```