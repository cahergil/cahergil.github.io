/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        //we traverse the allFeeds array and ensure that the property url of each
        //feed is defined and is not empty.
        it('feed url not empty',function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).toBeGreaterThan(0);
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        //idem as the test before but with name property
        it('feed name not empty',function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            });
        });

    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu',function () {

    
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        //using JQuery we take the body element and check whether it
        //has a class called menu-hidden, that means the slide bar is off the
        //the screen
        it(' element is hidden by default',function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         //we simulate 2 clicks on the hamburguer icon. The first
         //to show the menu and the second to hide it.
         //we test both scenarios,in the first, the body element should  
         //have a class called menu-hidden, whereas in the second it doesn't have it
         it(' changes visibility when clicked',function(){
            var menuIcon = $('.menu-icon-link');

            //menu visible
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            //menu hidden
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
            
            
         });
    });    

    
        
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries ',function () {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        //The feed is load for the menu element 0,i.e Udacity blog.
        //we test if the number of children of the element .feed is greater
        //than 0. That means the are articles in the feed.
        beforeEach(function(done){
            loadFeed(0,done);
            
        });

        it('have at lest one entry',function(done){
            let feedChildren = $('.feed').children();
            console.log(feedChildren);
            expect(feedChildren.length).toBeGreaterThan(0);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    //We have to load the feed twice, in the first load the articles are
    //are store in an array; firstFeed. Then the feed is loaded again with
    //the parameter done, to take into account the asynchronous nature of the 
    //load. In the text, the elements of firstFeed are compared with the articles
    //of the second load. If they are different the test should be true.
    describe('New Feed Selection ',function () {
        let feed = document.querySelector('.feed');
        let firstFeed = [];
  
        beforeEach(function(done){
            loadFeed(0);
            Array.from(feed.children).forEach(function(entry){
                firstFeed.push(entry.innerText);
            });
            loadFeed(1,done);
        });



        it(' content changes',function(done){
             Array.from(feed.children).forEach(function(entry,index) {
                  expect(firstFeed[index] !== entry.innerText).toBe(true);
             });
            done();
        });
    });
}());
