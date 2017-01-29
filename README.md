# Auto Delete All Facebook Messages

JavaScript utility that allows you to auto delete all your Facebook messages. Adds a feature to Facebook that should have already been added.

## Usage Instructions 

**The easiest way** to use this code is by saving it as a bookmark on your browsers [bookmark bar](https://support.google.com/chrome/answer/95745?hl=en). GitHub doesn't allow javasript links to be on readme pages so **[click here](http://matthewdunham.net/del-fb-msgs.html)** and follow the simple one step instruction.

**If that doesn't work try the [manual method](#manual).**

### How to use the bookmark button

After you have the delete button in your bookmarks using the button is easy. Simply login to your Facebook and goto your "view all messages" page. Once the page loads all you have to do is click the bookmark you just created "Delete FB Messages". Stay on the messages page until all your messages are deleted. Once a message is deleted, it's gone. There is no undelete.

**To stop the delete process simply leave the messages page or just hit refresh.**

---

#### <a name="manual"></a>Alternatively, you can create the bookmark manually:

Instructions for creating the bookmark:

* Press Control+D on your keyboard, this will open the "create a new bookmark" window.
* Title it "Delete FB Messages" 
* Then click the "Edit" button, because the URL of the bookmark will need to be changed.
* Now delete everything that is in the URL field and replace it with the following:

> javascript:!function(e){var t=function(){null!==e('div[aria-label="Conversation actions"]')?(e('div[aria-label="Conversation actions"]').click(),setTimeout(o,200)):console.log("There are no messages to delete")},o=function(){for(var e=document.evaluate('//span[text()="Delete"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),t=0;t<e.snapshotLength;t++)e.snapshotItem(t).click();setTimeout(n,200)},n=function(){e('em[data-intl-translation="Delete"]').parentNode.click(),null!==e('div[aria-label="Conversation actions"]')?setTimeout(t,600):console.log("No more messages")};console.log("Deleting Facebook Messages"),t()}(function(e){return document.querySelector(e)});

*The code above is just a minified version of the delete-fb-messages.js file, but make sure the URL of the bookmark is exactly the code above. No http:// or www.*

For faster access make sure to save it to your "bookmark bar" so it is always visible and ready to clean up your inbox. 

Example of what your bookmark should look like before you actually save the new bookmark:

![Example Bookmark](http://matthewdunham.net/example1.jpg?t=2)




* * *

### Running it with-out a bookmark

You can also run this code using your web browser's console. First navigate to your Facebook messages page and then press Control+Shift+i on your keyboard. This will open your developer tools once it opens if you do not see the console which should be at the bottom of the window press the Escape key on your keyboard. Now you should see the console now simply copy all the code from the gist and paste it into the console and hit enter.

Here is what it should look like:

![Example Bookmark](http://matthewdunham.net/example2.jpg?t=1)

After you've pasted the code into the console don't forget to press the Enter key on your keyboard to run the code. When it runs the console will say "Deleting all Facebook messages - By: Matthew Dunham" this tells you that it is working, and your messages should start deleting. When the script has finished deleting all your messages it will say "No more messages to delete" in the console.

You can stop the delete process at anytime by closing your browser or simply refreshing the page or even just navigate away from your Facebook messages page. 


* * *


### Security Info

If you see a warning that says Stop in all red don't worry it's just a precaution to stop people from accidentally XSS attacking themselves. This code does not make any external calls, and only contains 29 lines of code. If you are not comfortable running things from your web console then don't! Always read and know what any code will do before running anything in console. Regardless if you're on Facebook or some other site.