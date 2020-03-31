# CSS 

Cascading Style Sheets or CSS for short are the rules and directives that are used to style an html page. Think of the .html file as
providing the structure for a web page, in that what elements should appear on a page, a children of what other element in which
section (header or body) and so on. The CSS then adds `style` to that structure: How should the elements on the page be positioned
in a layout, what color should the elements have, should they have borders, should they have background colors and the like.

[What is CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works)

There are various topics that are important to understanding CSS's which are touched upon below. For a more comprehensive reference,
please refer to the Mozilla Developers Network site found in the resources section below.


## Syntax
CSS rules need to be specified using their own specific syntax. A rule consists of a **selector** and a **CSS declaration** that is 
typically specified in a .css file.

The selector determines the set of elements of the DOM to which the CSS declaration should be applied. 

The CSS declaration consists of a **property** that specifies the property of the element whose value to set, and a **value** which is the
value to which the property must be set. Typically CSS declarations contain multiple property/value pairs, which are put together to
form a **CSS declaration Block**.

[CSS Syntax](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Syntax)

## Selectors
CSS Selectors can be specified in a variety of ways and are in themselves very powerful. Think of them as like a regex pattern that 
when applied to the HTML DOM results in a sub-set of elements whose style properties you want to manipulate. Popular Javascript 
languages like **JQuery** are written based on CSS Selectors.

[CSS Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors)


## CSS Declaration Values
The CSS Declaration contains the property of the selected elements and the values that those properties should be set to. The values
that can be used in CSS are typically specified in **pixels**, when you want to provide absolute values, or in **percentages** 
when you want to provide relative values.

[CSS Values and Units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units)

## Box Model
The Box model is fundamental to how elements are laid out on page. To understand layout we need to first go through the details of
the CSS box model

[CSS Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model)

## Styling Text
At its core, CSS provides a ton of options to style the text elements on the page. We will go over some of them at the resource
below

[CSS Styling Text](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals)

## Styling Boxes
Following on from the Box model, there are several ways in which you can style boxes on your page

[Styling Box Backgrounds](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Backgrounds)

[Styling Box Borders](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Borders)

[Box Styling Effects](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Advanced_box_effects)


## Layout
CSS offers a multitude of options to specify how the elements of a page should be laid out. This will drive the flow of elements
as they appear positioned on a web page, their alignment with one another, the spacing etc.

[CSS Layouts](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction)



## Resources
[MDN CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)