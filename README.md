# restaurant one page

## Plugins

### [Retina.js](http://imulus.github.io/retinajs/)
- An open source script that makes it easy to serve high-resolution images to devices with retina displays.

### [OWL Carousel](http://owlgraphic.com/owlcarousel/)
- Touch enabled jQuery plugin that lets you create beautiful responsive carousel slider.

### [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/)
- Responsive lightbox & dialog script with focus on performance and providing best experience for user with any device
(for jQuery or Zepto.js).

### [Formstone](https://formstone.it/)
- A collection of thoughtfully crafted front-end components.
- [components](https://formstone.it/components/)

### [Animate.css](https://daneden.github.io/animate.css/)
- A cross-browser library of CSS animations. As easy to use as an easy thing.
- https://github.com/daneden/animate.css/

### [classie - class helper functions](https://github.com/desandro/classie)
```js
classie.has( element, 'my-class' ) // returns true/false
classie.add( element, 'my-new-class' ) // add new class
classie.remove( element, 'my-unwanted-class' ) // remove class
classie.toggle( element, 'my-class' ) // toggle class
```

### [jQuery easing](https://jqueryui.com/easing/)
- Apply an easing equation to an animation.

### [On-Scroll Animated Header](https://github.com/codrops/AnimatedHeader)
- A fixed header that will animate its size on scroll. The inner elements will also adjust their size with a transition.
- Dependency: classie.js

### [Mixitup](https://mixitup.kunkalabs.com/)
- [docs](https://mixitup.kunkalabs.com/docs/)

==

## Font pairings
```html
  <!-- Basic -->
  <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,600,500,700,800,900' rel='stylesheet' type='text/css'>

  <!-- Modern Style -->
  <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Cardo:400,400italic,700' rel='stylesheet' type='text/css'>

  <!-- Vintage Style -->
  <link href='http://fonts.googleapis.com/css?family=Sanchez:400italic,400' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Cardo:400,400italic,700' rel='stylesheet' type='text/css'>
```

==

## Smooth scrolling

```js
// Make sure that DOM is loaded.
document.addEventListener('DOMContentLoaded', function() {

    // Smooth Scrolling: Smooth scrolls to an ID on the current page.
    // Usage
    // - Add a link that links to an ID, and
    // - Add the .page-scroll class to the link itself.
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
});
```
