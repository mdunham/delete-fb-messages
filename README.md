# Auto Delete All Facebook Messages

JavaScript utility that allows you to auto delete all your Facebook messages. Adds a feature to Facebook that should have already been added.

## Usage Instructions 

The easiest way to use this utility is by putting it as a button in your bookmark bar. GitHub doesn't allow javasript links to be on README pages so [Click here](http://matthewdunham.net/del-fb-msgs.html) and follow the simple one step instruction.



#### Alternatively you can create the bookmark manually:

Instructions for creating the bookmark:

* Press Control+D on your keyboard, this will open the "create a new bookmark" window.
* Title it "Delete FB Messages" 
* Then click the "Edit" button, because the URL of the bookmark will need to be changed.
* Set the URL of the bookmark to be the code below:

> javascript:!function(a)%7Bvar%20b%3Dfunction()%7Bnull!%3D%3Da(%27div%5Baria-label%3D%22Conversation%20actions%22%5D%27)%3F(a(%27div%5Baria-label%3D%22Conversation%20actions%22%5D%27).click()%2CsetTimeout(c%2C200))%3Aconsole.log(%22There%20are%20no%20messages%20to%20delete%22)%7D%2Cc%3Dfunction()%7Bfor(var%20b%3Ddocument.evaluate(%27%2F%2Fspan%5Btext()%3D%22Delete%22%5D%27%2Cdocument%2Cnull%2CXPathResult.ORDERED_NODE_SNAPSHOT_TYPE%2Cnull)%2Cc%3D0%3Bc%3Cb.snapshotLength%3Bc%2B%2B)b.snapshotItem(c).click()%3BsetTimeout(d%2C200)%7D%2Cd%3Dfunction()%7Ba(%27em%5Bdata-intl-translation%3D%22Delete%22%5D%27).parentNode.click()%2Cnull!%3D%3Da(%27div%5Baria-label%3D%22Conversation%20actions%22%5D%27)%3FsetTimeout(b%2C400)%3Aconsole.log(%22No%20more%20messages%20to%20delete%22)%7D%3Bconsole.log(%22Deleting%20all%20Facebook%20messages%20-%20By%3A%20Matthew%20Dunham%22)%2Cb()%3Breturn%20false%3B%7D(function(a)%7Breturn%20document.querySelector(a)%7D)%3B

For faster access make sure to save it to your "bookmark bar" so it is always visible and ready to clean up your inbox. 


Example of what your bookmark should look like before you actually save the new bookmark:

![Example Bookmark](http://matthewdunham.net/example1.jpg)

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



