# cookies

changed addShit() to addTotals.

discovered that if you enter a new store on the sales page and then generate an error (empty field, etc.) it will delete all of the previously user-generated data.  I'm pretty sure I can fix this by moving around the innerHTML = '' command or by adding a function call to where I create the new stores.

I tried to add a Home button to each page, but trying to figure out the buttons, event listeners, and linking to an html page from inside a js function became too time consuming so I'm back-burnering it for now.
