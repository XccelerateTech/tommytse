# Tommy Tse's personal website

## Introduction
>This is a personal website about Tommy Tse. 

>The main contents include the about me section, dreams and hobbies. And a
pagination gallery of daily funny moments and lives.


## Menu
>The menu is constructed by bootstrap 4 navigation bar
with background set to dark and position set to fixed at the top
of the website. The opacity is set to 0.7 (a little bit transparent) for fancy looking.

>The nar-items include Home, about, album and contact.

>When mouse is clicked on the buttons (created by unordered list) , the a-href element is triggered and direct to the corresponding contents marked by its id.

>For instance, the a-href for button "Home is #, which means a clicked action for the button will direct the page to it's top.
>For the a-href for button album with #album, it will direct to the element with id=album, which is the pagination gallery at the bottom of the page.

> A dropdown button is tried to created. For the list item "About" in the unordered list in narbar. A dropdown toggler is added to the class and when the button is clicked, a dropdown menu should be showed under the button and when the button is clicked again, the dropdown menu should be hide.However, unknown bug exists and the button is not working properly.

>The contact button should be linked to the contact section. But since the contact section is not created yet. It is empty for future use.

## Jumbotron

>A jumbotron is created under the navigation bar

>When The mouse moves to the header **Hi, I'm Tommy Tse**, A jqery effect is triggered, adding the .color-black class ( setting the color to black and font-size larger) to the header element (using the .toggleClass() method ). When the mouse leave the header, the .color-black class is removed.

>The quote and the author name under the welcoming header is animated using the css animation. The animation duration 10s, and the animation iteration count is infinite. The @keyframes mymove selector is set to the color of the quote changing in 4 colors: red, yellow, blue and green. Dancing script is used for the font-family styling by copying the reference link from Google-font website.

>The background-image is the captivating night view of Salt Lake City, which is the place I'm planning to migrate to. It is set by linking the url to the background-image property.

>A __touch me__ bubble is created and positioned initially on the bottom left of the jumbotron section. The css position is set to fixed and opacity set to 0.7, so it will kept displaying when scrolling the page. When the button is hovered and clicked,
the mail-to link in a-href tag will create a mail to Tommy's email address with subject:Hello.

## About
> The section includes about, dreams and hobbies sub-sections.
> Each main-content contains the title and content division with proper padding and margin for nice looking.

>The ::after special selector is used to create the border line for nice looking of the header.

>The title is floated to left and content floated to right. overflow is set to auto in the main-content.

>The background color for each part is set to black and white for nice looking. In each content part, a relevant image is inserted using the img tag, when the image is hovered, its opacity will change to 0.7. When the image is clicked, it will direct to the url of the image in a new page.

## Pagination gallery

>The gallery is created using the css grid created by bootstrap.

>Under each image there is a description.



