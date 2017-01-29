Simple Method

An easier way to run the script is by simply creating a bookmark in your browser using the following:

Completely, safe.

Bookmark Name: Delete All FB Conversation
Bookmark Url : javascript:!function(){var e=function(o){var n=function(e){var o=function(){var o=document.querySelector("#webMessengerHeaderName").innerText,n=function(e){for(var n=0;n<e.length;n++){var t=e[n];if(-1!==t.innerHTML.indexOf("Delete Conversation"))return console.log("Deleting Messages From: "+o),t.click(),!0}return!1};if("No Selection"===o)return void l();if(!0===n(document.querySelectorAll('a[role="menuitem"]')))setTimeout(t,500);else{var r=document.querySelector('button[data-tooltip-content="Actions"]');if(!r)return void console.log("Unable to locate the delete button");r.click(),setTimeout(e,2e3)}},n=function(){var e=document.querySelector("div.uiScrollableAreaWrap.scrollable");return"undefined"==typeof e||!1===e.hasOwnProperty("scrollHeight")?(console.log("Unable to locate the messages scroll region"),!1):void(e.scrollTop=e.scrollHeight)},t=function(e){var o=document.querySelectorAll('div[role="dialog"] a[action="cancel"]');"undefined"==typeof e&&(e=!1);for(var n=0;n<o.length;n++){var t=o[n];if(-1!==t.innerHTML.indexOf("Delete Conversation")){console.log("Deleting Messages - Confirming Now"),e=!0,t.click();break}}!0===e?l():console.log("Unable to locate the confirm delete button")},l=function(){setTimeout(function(){var o=document.querySelectorAll("._k_");return o.length||!1!==n()?(o[0].click(),void setTimeout(e,1e3)):(console.log("Unable to locate any messages"),!0)},250)};o()};n(e)};e(0)}();

Then navigate to https://www.facebook.com/messages and simply click on the bookmark you just created.