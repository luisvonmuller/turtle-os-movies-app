# Movies App
To run the App just type: 

$ npm run start. 

## Firestore Helper (Folder: firestore_helper)
This small project had the intend to populate the dataset in a structure that could support the Search Field in the most perfect way possible. It would had do all the integration tests and unitary as well but I hadn't time to work on them all, so theres just a few tests there. 


## If I had more time...
- I would finish writing test for the FireStore Integration as well to assure fetching Data.
- Would locally cache and real-time check for new comments on the collection between multiple clients.
- For sure Write storybook tests.
- Switch to the React Context API (This was kinda a mistake, just realized after that it would fit better then passing states over components 😅).


### Other Comments 👀
I spend a lot of time dealing with the "Search" field, firestore do not have a SQL like "like" statement that is fully able to pull out substring in everyplace, like on the movie "Magic Mike XXL", when queried for just mike, the common implementation of the firestore way to do things wont fetch the movie, so I wrote a Keyword system to be able to fetch it anyways. That added some boiler plate and made me do a side project as helper to populate it in the better way possible. 

I'm used to use Jira to orient the commmits and devlog, I need to get used to the TurtleOS, but I've tryed in my last few minutes left to create a ticket oriented commit system like I'm used to do. 

Also, I left the "firebase service account keys" in the folder to repopulate things if neeeded (but all the collection are populated and you could just run the project itself).
