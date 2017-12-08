### CSS Week 3 Code Review - Epicodus

#Redesigning learnhowtoprogram.com site

### Author: Colin Worf

## Description



## Instructions

1. Clone project ```$ git clone https://github.com/cworf/copy-google.git ```
2. enter project by opening the repository and selecting index.html
3. view final project online by visiting https://cworf.github.io/copy-google/

## Thoughts and Feedback

Learning SASS this week was a lot of fun, having used css without sass for years it is a breath of fresh air being able to output dozens of lines of css using only ~5 of scss. during the two day project we definitely learned quite a bit about the process of setting up a sass project. we utilized HugoGiraudel's sass-boilerplate to provide our structure which turned out to be useful. we got very confused when we tried to load materialize into our project however because it was not in the same 7-1 format. It wasnt until after we attempted to move the scss files into the proper folders and everything began erroring out all over the place that we realized thats what the vendor folder was for. I got confused with 3rd party css vendors and vendor prefixes which I though that might be what that was used for... Other than that, we really didnt struggle too much with sass and taught ourselves how to use sketch to wireframe. it is very much like javascript in its structure so it was nice to revisit that logic and to see how much it benefits my experience with css!

## SASS elements used
|Element|Definition|Our Usage|
|-----|----|----|
|nesting|Nesting is used to organize sass layouts and is compiled into its hierarchical structure for use in the site|We used nesting to apply different styles to otherwise common html types like header and paragraph tags by nesting them inside different parent trees. This reduces the complexity of each selector and makes css easier to navigate |
|Variables|variables hold data that can be called anywhere within the scope|We used variables to specify the various brand colors of our site including text and background|
|for loop|the for loop provides an index number for each itteration which counts upwards from the specified start to the specified end, variables can also be used in these loops|We used for loops to create the css which outlined every possible grid format up to 12 columns, 12 spans, 12 offsets, and 4 gap sizes as well as media queries for all different breakpoints using less than 35 lines to output hundreds of lines of css. this was my favorite puzzle to solve on this project |
|mixin|mixins are like variables which contain either entire structures of sass or just a few lines of css and can be called anywhere within the scope|We used mixins on elements which might be used frequently to reduce repetitive sass. for example a mixin which contained the css necessary to center an object vertically and horizontally within its parent, or a mixin to create a gradient overlay on an object.|
|objects|these objects are very similar to javascript in that they include key/value pairs in an array like structure which can be looped through using the each function|we used this in our media query creation, by creating an object holding variables for each breakpoint we were able to durrastically reduce the number of lines of sass needed to output the proper media queries|

## Today's Approach

Today the main change will be to spend time organizing my sass structure before I start coding, starting with just the 2 elements I need from materialize, and adding more if I have need to or have the time. I will also be utilizing git ignore to fix the sass-cache problem. additionally I will try to figure out an even better way to create the grid structure.

## Copyright

Creative Commons
