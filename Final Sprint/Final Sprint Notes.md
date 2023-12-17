Final Sprint

I'm able to connect to the mysql server, but my sologameplay.tsx file isn't working as expected. I ran into an issue with my NextJS weather dashboard web page that required use of the CORS module because the server running on Port 3001 doesn't want to accept connections from my main react native server running on port 3000. This is called Cross Origin Resource Sharing or CORS. I installed the CORS module using "npm install cors."

I then needed to update my server.js file to use cors module by adding this import statement at the top of my file: "const cors = require('cors');" I then added this line to enable CORS for all routes: "app.use(cors());"

I also added a row of data to the mysql database table game_data using this instruction:
INSERT INTO game_data (user_id, play_date, play_time, plays)
VALUES (1, NOW(), 10, 1);

This provided me with at least 1 row of data that I could retreive. 
I then decided to simplify what I was trying to accomplish. I only want to add data to the database for now and once that works I can focus on retreival. I decided to remove the plays column by issuing the following instruction: 
ALTER TABLE game_data DROP COLUMN plays;
Then I ran this instruction to make sure it was removed:
SHOW COLUMNS FROM game_data;

I ended up finding out in my testing that since the code for my front-end is running in an Android emulator, using Localhost or 127.0.0.1 will not reach my server running on port 3001 because the Android device thinks that is it's own loopback or localhost address. I changed the address to my local IP for my workstation and it worked!

I went back to the mysql server ran this instruction: SELECT * FROM game_data; to get all rows and I was able to see my most recent entry was logged in the database. 

Now I added back a route called getRecentData to call the api to get the most recent database entry based on this user's user ID and I am able to display the most recent game play data like the duration of the timer, and what date/time it was last played. 

I finished up by adding some inspirational language to the top of the game play screen and update the main app screen where the play button is with some additional language. 

I then added some styling updates with the help of ChatGPT before calling it done.

It's not exactly what I planned to build at the beginning of the semester. Not being able to get the sensors module working was a big setback, but after a creative suggestion from Dr. Hoffman, I realized I could still build the same app but it wouldn't be as fancy. It also made me rethink the idea of a leaderboard which truly is counter to the idea behind this app. I want users to compete against themselves and only have a few simple data points to go on. Maybe in the future I would add support for a leaderboard since I'm storing all the data in a database and no locally on the users' phones, but for now I like the simplicity. 

One of the parts of this project I didn't realize I would enjoy as much was learning how to setup a database. I've never had to setup a database outside of a class using Access so this was really cool. I also got to learn some neat SQL commands and I feel much more comfortable doing this again in the future. 
