/**
 * Auto Delete All Facebook Messages
 *
 * You can run this code from the console, but the best way to run it is by
 * saving it as bookmark in your bookmark bar. Look at the gists comments for
 * instructions on how to save it as a bookmark.
 *
 * @link   http://matthewdunham.net
 * @link   http://linkedin.com/in/matthewdunham
 * @author Matthew Dunham <matt@matthewdunham.net>
 */
(function($){
    var 
        stepOne = function(){
            if (null !== $('div[aria-label="Conversation actions"]')) {
                $('div[aria-label="Conversation actions"]').click();
                setTimeout(stepTwo, 250);
            } else {
                console.log('There are no messages to delete');
            }
        },
        stepTwo = function(){
            var elements = document.evaluate('//span[text()="Delete"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            for (var i = 0; i < elements.snapshotLength; i++) {
                elements.snapshotItem(i).click();
            }
            setTimeout(stepThree, 250);
        },
        stepThree = function(){
            $('em[data-intl-translation="Delete"]').parentNode.click();
            if (null !== $('div[aria-label="Conversation actions"]')) {
                setTimeout(stepOne, 420);
            } else {
                console.log('No more messages to delete');
            }
        };
    
    console.log('Deleting all Facebook messages - By: Matthew Dunham');
    stepOne();
})(function(selector){ return document.querySelector(selector); });