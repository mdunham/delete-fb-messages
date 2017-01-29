/**
 * Auto Delete All Facebook Messages
 * 
 * Usage:
 *   1. Navigate to your messages page https://www.facebook.com/messages
 *   2. Open the console in dev tools
 *   3. Paste all of the code below, and hit enter
 * 
 * ---> Does not work on mobile chrome <---
 * 
 * @author  Matthew Dunham <matt@matthewdunham.net>
 */
(function(){
	
	var 
	
		// Recursive Method
		_reInit = function(count){ 	

			// Holds the business logic
			var _init = function(reInit){
				
				var 

					// Clicks the delete convo button that activate the confirmation
					_startDelete = function(){
						var 
							nameFrom    = document.querySelector('#webMessengerHeaderName').innerText,
							_findDelete = function(elements){
								for (var i = 0; i < elements.length; i++) { 
									var ele = elements[i];
									if (-1 !== (ele.innerHTML).indexOf('Delete Conversation')) {
										console.log('Deleting Messages From: ' + nameFrom);
										ele.click();
										return true;
										break;
									}
								}
								
								return false;
							};

						if ('No Selection' === nameFrom) {
							_nextConvo();
							return;
						}

						if (true === _findDelete(document.querySelectorAll('a[role="menuitem"]'))){
							setTimeout(_confirmDelete, 500);
						} else {
							var actLink = document.querySelector('button[data-tooltip-content="Actions"]');
							if (actLink) {
								actLink.click();
								setTimeout(reInit, 2000);
							} else {
								console.log('Unable to locate the delete button');
								return;
							}
						}
					},

					// Triggers more messages to load
					_scrollLoad = function() {
						var _scrollRegion = document.querySelector('div.uiScrollableAreaWrap.scrollable');

						if ('undefined' === typeof _scrollRegion || false === _scrollRegion.hasOwnProperty('scrollHeight')) {
							console.log('Unable to locate the messages scroll region');
							return false;
						}

						_scrollRegion.scrollTop = _scrollRegion.scrollHeight;
					},

					// Clicks the button in the dialog box
					_confirmDelete = function(found){
						var eles = document.querySelectorAll('div[role="dialog"] a[action="cancel"]');

						if ('undefined' === typeof found) {
							found = false;
						}

						for (var i = 0; i < eles.length; i++) { 
							var ele = eles[i];
							if (-1 !== (ele.innerHTML).indexOf('Delete Conversation')) {
								console.log('Deleting Messages - Confirming Now');
								found = true;
								ele.click();
								break;
							}
						}

						if (true === found){
							_nextConvo();
						} else {
							console.log('Unable to locate the confirm delete button');
						}
					},

					// Selects the next conversation to delete
					_nextConvo = function(){
						setTimeout(function(){ 
							var nextConvo = document.querySelectorAll('._k_');
							if ( ! nextConvo.length) {
								if (false === _scrollLoad()) {
									// Probably done at this point, or in error
									console.log('Unable to locate any messages');
									return true;
								}
							}

							nextConvo[0].click(); 
							setTimeout(reInit, 1000);
						}, 250);
					};

				// Starts the process - step 1
				_startDelete();
			};

			_init(_reInit); 
		};

		_reInit(0);
	})();