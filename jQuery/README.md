# SUMMARY

## NOTES
I've only added those concepts that I find more tricky because the entire course is teached with slides in Spanish. If you are a jQuery beginner, this might not be the best place to look at. I highly recommend checking the [official documentation](https://api.jquery.com/) or the [W3 tutorial](https://www.w3schools.com/jquery/default.asp) instead 

## 3. CSS: Attributes and styles

### 3.3. Playing with attributes and properties

It's important to know that attributes are present in the opening tag of an element, such as `<div **class="container"**>…</div` whereas properties doesn't necessarily have to be present in the tag.

For example, given the element `<input id="user" value="Pepe">`:
```
console.log($("#user").attr("value");) // Pepe
console.log($("#user").prop("value");) // Pepe
/* ------------------------------------------ */
console.log($("#user").attr("disabled");) // undefined -> Not present as an attribute in the element
console.log($("#user").prop("disabled");) // false -> Not present in the element but is an implicit property of the element
/* ------------------------------------------ */
$("#user").val("Manuel");
console.log($("#user").attr("value");) // Pepe -> Value of the attribute **value**
console.log($("#user").prop("value");) // Manuel -> Actual value
``` 

Functions related to attributes are `attr()` and `removeAttr()`.
Functions related to properties are `prop()` and `removeProp()`.

### 3.4. Label values and content

- `empty()`, `html()` and `text()`:

| METHOD | DESCRIPTION | EXAMPLE |
| :----- | :---------- | :------ |
| `empty()` | Removes all child nodes of an element | `$(".article li:nth-child(3)").empty();` |
| `html()` | Gets all the HTML code of a given element | `var htmlContent = $("#item1").html();` |
| `html([SELECTOR])` | Replaces the content of a selected element with the passed element | `$("ul").html("<li>HI</li>");` |
| `html(function(index, oldText) { … })` | Accesses the index and the HTML content of a given element |  |
| `text()` | It's like `html()` with the difference that it takes the content as text instead of HTML | `var text= $("#item1").text();` |

- `append()`, `prepend()`, `appendTo()`, `prependTo()`:

| METHOD | DESCRIPTION | EXAMPLE |
| :----- | :---------- | :------ |
| `append([ELEMENT])` | Adds a new element to the **beginning** of an element | `$("li").append("<span>HI</span>");` |
| `prepend([ELEMENT])` | Adds a new element to the **end** of an element | `$("li").prepend("<span>HI</span>");` |
| `appendTo([ELEMENT])` | The inverse order of `append()` | `$("<li>Hola</li>").appendTo("ul");` |
| `prependTo([ELEMENT])` | The inverse order of `prepend()` | `$("<li>Hola</li>").prependTo("ul");` |

- `wrap()`, `unwrap()`, `wrapAll()`, `wrapInner()`:

| METHOD | DESCRIPTION | EXAMPLE |
| :----- | :---------- | :------ |
| `wrap([SELECTOR])` | Wraps the selected element with a given element | `$("article").wrap("<div class="article_outer"></div>");` // This will output `<div class="article_outer"><article>…</article></div>` |
| `wrap(function(index) { … })` | Returns the element wrapping a certain element |  |
| `wrapInner([SELECTOR])` | Wraps the internal content of the selected element | `$("article").wrapInner("<div class="article_inner"></div>");` // This will output `<article><div class="article_outer">…</div></article>` |
| `unwrap()` | Removes the wrapper element of another element | `$("article").unwrap();` |
| `unwrap([SELECTOR])` | Same as `unwrap()` but this lets us check if a certain element is wrapping another. This is, if the element with the class `.article_outer` in the example is not wrapping the element `article`, then it won't get unwrapped. | `$("article").unwrap(".article_outer");` |

### 4.2. Mouse and keyboard events

#### Keyboard

| EVENTS | DESCRIPTION |
| :----- | :---------- |
| `keydown()` | Fires when any key is pressed down. Triggered first, and always before the browser processes the key. |
| `keyup()` | Fires when the user releases the key. |
| `keypress()` | Fires when a key that produces a character value is pressed down. Triggered after `keydown()` and before the browser processes the key. |

`keydown()` listens to *special keys* such as <kbd>Tab</kbd> and is case insensitive, whereas `keyup()` does not include *special keys* and is case sensitive.

#### Mouse

| EVENTS | DESCRIPTION |
| :----- | :---------- |
| `mouseenter()` | Triggered when the mouse pointer enters the selected element |
| `mouseover()` | Triggered if a mouse pointer enters an element or any child elements of it |
| `mousedown()` | Triggered when a user presses a mouse button over an element |
| `mouseleave()` | Triggered if a mouse pointer leaves an element |
| `mouseout()` | Triggered when the mouse pointer leaves an element or any child elements of it |
| `mousemove()` | Triggered when the mouse pointer is moving inside a given element |

`mouseenter()` and `mouseover()` can be used together. The same happens with `mouseout()` and `mouseleave()`.

#### Event properties

| PROPERTIES | DESCRIPTION |
| :----- | :---------- |
| `e.pageX` | Position of the mouse in the X axis. |
| `e.pageY` | Position of the mouse in the Y axis. |
| `e.which` | Code of the key or mouse button pressed. |
| `e.type` | Holds the name of the event triggered. |
| `e.metaKey` | Returns `true` if the user presses on Windows key or Command key. Otherwise, returns `false`. |

### 4.4. Associating and creating events

| METHODS | DESCRIPTION | EXAMPLE |
| :----- | :---------- | :---------- |
| `trigger([EVENT])` | Triggers an event on an element. Bubble propagation. | `$("div").trigger("click");` |
| `triggerHandler([EVENT])` | Triggers an event on an element. **NO** Bubble propagation and **NO** default behaviour. | `$("div").triggerHandler("click");` |

## 5. Moving through the DOM

### 5.1. Parents, children and siblings

| METHODS | DESCRIPTION | EXAMPLE |
| :----- | :---------- | :---------- |
| `children()` | Selects all the children of an element. | `$("div").children().css("color", "red");` |
| `next()` | Selects the next sibling of an element. | `$("div").first().next();` |
| `nextUntil([SELECTOR] [optional:, FILTER])` | Selects all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object. | `$("#item-1").nextUntil("#item-4").css("background-color", "red");` // `#item-1` nor `#item-4` will get selected |
| `nextAll()` | Selects all the next siblings of an element. | `$("div").children().first().nextAll();` // Selects all the children of the element `div` except the first one. |
| `prev()` | Selects the previous sibling of an element. | `$("div").last().prev();` |
| `prevUntil([SELECTOR] [optional:, FILTER])` | Selects all preceding  siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object. | `$("#item-4").prevUntil("#item-2").css("background-color", "red");` // `#item-4` nor `#item-2` will get selected |
| `prevAll()` | Selects all the previous siblings of an element. | `$("div").last().prevAll();` // Selects all the children of the element `div` except the last one. |
| `parent()` | Selects the parent of an element. | `$("#item-1").parent();` |
| `parents()` | Selects **ALL** the parents of an element all the way to the `<html>` element. | `$("#item-1").parent();` |
| `parentsUntil([SELECTOR] [optional:, FILTER])` | Selects the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object. | `$("li#item-1").parentsUntil("main").css("background-color", "red");` // `<main>` wouldn't get selected |
| `siblings()` | Selects all the siblings of an element. | `$("#item-1").siblings();` |

### 5.2. Selectors

| METHODS | DESCRIPTION | EXAMPLE |
| :----- | :---------- | :---------- | 
| `find([SELECTOR])` | Selects the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element. | `$("ul").find("li:contains('A')").css("background-color", "red");` |
| `filter([SELECTOR])` | Reduces the set of matched elements to those that match the selector or pass the function's test. | `$("ul").find(".no-disc").css("color", "white");` // Of all the `<ul>` elements, this will select only those with the class `no-disc`. |
| `filter(function(index) { … })` | Returns the elements that matches the condition. | `$("ul.iconized li").filter(function(index) { return (index === 1 \|\| index === 2); }).text("SELECTED");` // Of all the `<ul>` elements, this will select only those with the class `no-disc`. |
| `slice([START] [optional: , END])` | Reduces the set of matched elements to a subset specified by a range of indices. | `$("table tr").slice(0, 2).css("color", "blue");` // The third `tr` wouldn't be included. |

`find()` will select subset of elements from the selected element whereas `filter()` will select children of the selected element. [Visual example](https://stackoverflow.com/a/58857258).

### 5.4. Inserting elements

| METHODS | DESCRIPTION | EXAMPLE |
| :----- | :---------- | :---------- |
| `after([CONTENT])` | Inserts content, specified by the parameter, after the selected element | `$("#item-4").after("<li id="after">Item after</li>");` |
| `[after/before](function(index) { … })` | Receives the index position of the element in the set as an argument | `$("ul").after(function(index) { return index });` // Prints the index of each element in the DOM |
| `[after/before](function(index, html) { … })` | Receives the index position of the element in the set and the old HTML value of the element as arguments. | `$("tr").before(function(index, html) { return html });` // Clones the elements inside the `tr` elements. |
| `insertAfter([TARGET])` | Reverses the order of `after([CONTENT])` | `$(".origin").insertAfter("ul");` |
| `before()` | Inserts content, specified by the parameter, before the selected element | `$("#item-4").before("<li id="before">Item before</li>");` |
| `insertBefore()` | Reverses the order of `before([CONTENT])` | `$(".origin").insertBefore("ul");` |
| `clone([withDataAndEvents (default: false)] [optional: , deepWithDataAndEvents])` | Creates a deep copy of the set of matched elements. `withDataAndEvents` indicates whether event handlers should be copied along with the elements. `deepWithDataAndEvents` indicates whether event handlers and data for ALL CHILDREN of the cloned element should be copied. | `$(".hello").clone().appendTo(".goodbye");` |

`append()` inserts the parameter element inside the selector element's tag at the last index position,  whereas `after()` puts the parameter element after the matched element's tag. The same goes to the `before()` and `prepend()` methods.

### 5.5. Removing and replacing elements

| METHODS | DESCRIPTION | EXAMPLE |
| :----- | :---------- | :---------- |
| `remove()` | Removes the set of matched elements from the DOM. Very similar to `empty()` but `remove()` allows a filter parameter to remove a specific element. | `$("ul").remove();` |
| `remove([SELECTOR])` | With a filter to remove certain element(s). | `$("p").remove(":contains('Hello')");` |
| `detach()` | Same as `remove()` but this method returns the removed elements. | `const detatchedDivs = $("div").detach();` |
| `detach([SELECTOR])` | Same as `detach()` but with a selector as a parameter. | `const detatchedResults = $("div").detach("#results");`<br>`$("body").append(detatchedResults);` |
| `replaceAll([SELECTOR])` | Replaces the selected element(s) with another element(s). | `$("<td>X</td>").replaceAll("td");` |
| `replaceWith([SELECTOR])` | Reverses the order of `replaceAll()`. | `$("td").replaceWith("<td>X</td>");` |

## 6. Effects an animations

### 6.1. Effects and effects queue

| TYPE OF EFFECTS | RELATED FUNCTIONS |
| :----- | :---------- |
| DISPLAY | `hide()`<br>`show()`<br>`toggle()` |
| SLIDING | `slideDown()`<br>`slideUp()`<br>`slideToggle()` |
| FADING | `fadeIn()`<br>`fadeOut()`<br>`fadeToggle()`<br>`fadeTo()` |

All methods presented above can have two parameters:

- `duration`: A string or number determining how long the animation will run. Defaults to 400.
- `complete`: A function to call once the animation is complete, called once per matched element.

Beyond these parameters, every method can have specific parameters according to their purpose. You might want to check the [official documentation](https://api.jquery.com) for more insight into those parameters.

To prevent queuing an effect when the user triggers it, it's highly recommended to do the following:

```
$("#trigger-effect").on("click", function(event) {
	$("#to-animate").stop(); // Stopping the animation
	$("#to-animate").clearQueue(); // Cleaning the queue to avoid having more than 1 effects in queue
	$("#to-animate").fadeToggle(1000); // Then we execute the actual effect
});
```

If we want to finish all the queued effects, we can create an additional button with the following code:

```
$("#finish-effect").on("click", function(event) {
	$("#to-animate").finish();
	$("#to-animate").fadeToggle(3000);
});
```

To show the size of the queue, we can do:

```
const showSize = () => {
	const queuedEffects  =$("#to-animate").queue("fx");
	$("#effects-queue").text(queuedEffects.length);
	setTimeout(showSize, 100);
}
```

### 4.2. Animations

An animation in front-end development is the change of properties CSS during a certain period of time.

Only the CSS properties with numeric values can be animatable. Some animatables properties are `width/height`, `top/left/right/bottom`, `opacity`, `padding`…

Example:

```
$("img").animate({
	height: "+=50px",
	width: "+=50px",
}, 3000);
```