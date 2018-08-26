# Feed Reader with Jasmine Overview

In this project the students are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where we come in.

## Running this app

&nbsp; To load this application simply download the materials in this repo, then run the `index.html` file in the main directory. This file includes the SpecRunner information from the Jasmine Framework.


## Tests

7 Tests were implemented in this web application 
* Test suite "RSS Feeds"
  *  a test to ensure  that allFeeds object  is defined and that it is not empty. 
  * a test to ensure  that allFeeds object  has a name defined and that the name is not empty. 
  * a test to ensure  that allFeeds object  has a URL defined and that the URL is not empty.
* Test suite "The menu"
  * a test that ensures the menu element is hidden by default.
  * a test that ensures the menu changes visibility when the menu icon is clicked.
* Test  suite  "Initial Entries"
  * a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
* Test suite  "New Feed Selection"
  * a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
  

## Dependencies

&nbsp; This app relies on:
* Google Feed Reader API
* jQuery
* Jasmine Framework
* Handlebars Templating

## License

MIT License

Copyright (c) 2018 Carlos Hernández Gil

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### Front-End Web Developer Nanodegree
<br><br>

<p align="center">
<img width="420" src="udacity_logo.svg">
</p>

