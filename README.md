
# Introduction 

This app displays User Location based on IP address and allows the user to add a note to the database for his/her current location .


## Implicit requirements/Assumptions

* User authentication not supported
* Automatically detect User's current location when making an entry
* Take input of username and remark to write to database
* Data will be saved to a local DB called UserNote
* Dynamically update user notes list when searching for note


## Limitations/proposed improvements

* Getting location based on IP address is not very accurate. ANother alternative would be to use a suitable
  npm package such as google maps that will get user location based on the browser. This will require the user 
  to give the app relevant permission in the browser
* Dynamically update list when user adds a note
* Add option to edit/delete notes from database
* Add aditional column to denote time note was written
* Validate form when user adds a note
* Add success message when note has been successfully added
