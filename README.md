CenterBoxes
===========

Jquery plugin to center content boxes horizontally and vertically within the browser window.

Usage
=====

CenterBoxes sizes the outer div ```.container``` to be the browser window size, then positions the inner div```.centerbox``` in the direct center of screen. 

HTML Structure
===========
In it's most simple form your html should look something like this
```html
<div class="container">
<div class="centerbox">Some Content Here</div>
</div>
```
The elements can be styled however needed. You'll probably want to declare some kind of width on the ``` .centerbox ```. It's not necessary though if you dont want it to center horizontally.

this works well for popups, or single page site where you want the conent of each section to fill the screen.


