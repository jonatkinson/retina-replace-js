What is retina-replace.js?
==========================

- retina-replace.js is a jQuery plugin for replacing out css background-images and img tag src's for a high quality retina version
- Only runs on devices with a devicePixelRatio > 1
- Preloads images before updating to alleiviate flashing when replaced

By default ``_2x`` is appended to the image url so ``/img/foo.jpg`` would become ``/img/foo_2x.jpg``
both the suffix and retina url generating function can be overriden on intalization.

Once an element's image has been replaced with its retina version the attribute ``data-retina`` is set to ``complete`` for example ``<img src="/img/foo.png" data-retina="complete" />``


Using retina-replace.js
-----------------------

Simply call the retinaReplace function on the targeted elements

```
$('#foo, #bar').retinaReplace();
```

if using retina-replace.js to replace background images on elements then the add the following css to your stylesheet

```
[data-retina=complete] {
    -webkit-background-size: 100%;
    background-size:100%;
}
```


Options
-------

<table>
    <thead>
        <tr>
            <th>Name</td>
            <th>Type</td>
            <th>Default</td>
            <th>Descritpion</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>suffix</td>
            <td>string</td>
            <td>_2x</td>
            <td>The default string to append to the current image url</td>
        </tr>
        <tr>
            <td>generateUrl</td>
            <td>function</td>
            <td>appens the suffix value to the current url</td>
            <td>The method used to generate the url for the retina image. Retrives two arguments, the current `element` and `url` determined from ether the image src (if an image tag) or background-image on all other elemnts</td>
        </tr>
    </tbody>
</table>


Markup
------

To quickly mark a element to be replaced just add ``data-retina="true"`` and any image source or background image will be replaced on retina enabled devices

```
<img src="/img/foo.jpg" data-retina="true" width="40" height="30">
<div class="foo-with-background-image" data-retina="true"></div>
```


TODO
----

- Add some examples of overriding the url generator function
- Possibly llow replacement of images with svg images?
