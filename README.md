# Auto Delete All Facebook Messages

JavaScript utility that allows you to auto delete all your Facebook messages. Adds a feature to Facebook that should have already been added.

## Usage Instructions 

**The easiest way** to use this utility, is by putting it as a button in your bookmark bar. GitHub doesn't allow javasript links to be on README pages so **[click here](http://matthewdunham.net/del-fb-msgs.html)** and follow the simple one step instruction.

---

#### Alternatively you can create the bookmark manually:

Instructions for creating the bookmark:

* Press Control+D on your keyboard, this will open the "create a new bookmark" window.
* Title it "Delete FB Messages" 
* Then click the "Edit" button, because the URL of the bookmark will need to be changed.
* Set the URL of the bookmark to be the code below:

> javascript:!function(a){var b=function(){null!==a('div[aria-label="Conversation actions"]')?(a('div[aria-label="Conversation actions"]').click(),setTimeout(c,200)):console.log("There are no messages to delete")},c=function(){for(var b=document.evaluate('//span[text()="Delete"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),c=0;c<b.snapshotLength;c++)b.snapshotItem(c).click();setTimeout(d,200)},d=function(){a('em[data-intl-translation="Delete"]').parentNode.click(),null!==a('div[aria-label="Conversation actions"]')?setTimeout(b,400):console.log("No more messages to delete")};console.log("Deleting all Facebook messages - By: Matthew Dunham"),b();return false;}(function(a){return document.querySelector(a)});

For faster access make sure to save it to your "bookmark bar" so it is always visible and ready to clean up your inbox. 


Example of what your bookmark should look like before you actually save the new bookmark:

![Example Bookmark](http://matthewdunham.net/example1.jpg?t=2)

* * *

### Running it with-out a bookmark

You can also run this code using your web browser's console. First navigate to your Facebook messages page and then press Control+Shift+i on your keyboard. This will open your developer tools once it opens if you do not see the console which should be at the bottom of the window press the Escape key on your keyboard. Now you should see the console now simply copy all the code from the gist and paste it into the console and hit enter.

Here is what it should look like:

![Example Bookmark](http://matthewdunham.net/example2.jpg?t=1)

After you've pasted the code into the console don't forget to press the Enter key on your keyboard to run the code. When it runs the console will say "Deleting all Facebook messages - By: Matthew Dunham" this tells you that it is working, and your messages should start deleting. When the script has finished deleting all your messages it will say "No more messages to delete" in the console.

You can stop the delete process at anytime by closing your browser or simply refreshing the page or even just navigate away from your facebook messages page. 


* * *


### Security Info

If you see a warning that says Stop in all red don't worry it's just a precaution to stop people from accidentally XSS attacking themselves. This code does not make any external calls, and only contains 29 lines of code. If you are not comfortable running things from your web console then don't! Always read and know what any code will do before running anything in console. Regardless if you're on Facebook or some other site.



