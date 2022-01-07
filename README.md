# The Over-thought Baseball Opening Day Countdown Clock

This project is for-fun and intended to be a practice and portfolio project. Just doing a simple countdown clock is too easy so I'm thinking about over-complicating it for funzies with team selection, JSON (or possibly FireBase) data sourcing, fancy visual menu, and visual theme adaptation. If you are reading this and think "hey, what they could have done better was XYZ!" then please message me on GitHub or via my website at maniacalindustries.com.

For the time being it will remain a simple countdown clock for Major League and Minor League opening days.

In The Future TO - DO List:

Team selection by either:
 - Automatically by location. This should be a button to opt-in for location retrieval. The location info will be used to search the JSON doc for the closest team.

 - Search by city, state. Simple form to search the JSON doc and return the correct team if one exists for that city, state.

 - Visual Menu. First choose MLB or MiLB, then choose Division, then choose Team. Note: This will likely be the first functionality for v1.0 with the others being saved for updates.

 Once selected, the countdown clock will change to the exact expected time of the first pitch for that team, the colors of the clock will change from generic to the primary and secondary colors of the selected team, and the title will change to "<yourteam> will play ball in:"

 Things to consider: 

 Setting up the data with JSON to more easily transfer to a noSQL database on purpose. If I move this project past v1.0 then a database will be better.

 Setting up a cookie, with permissions, is new to me but just in case anyone comes back to the site or uses it as a phone app it's important from the outset. And, welp, should learn more about cookies anyway.

 Adding more complicated search functionality is also newer to me. Finding the closest team to city, state info should be interesting but is required for both by location and by form entry search. Otherwise it could be super frustrating for users near a team but not in the exact same town.

 - Might include background images from the actual field associated with the selected team.

 - Could add animations to the transitions

 - Could add "Take me out to the ballgame" audio but even as I write this it sounds cheesy.

 - Could add ticket links to the chosen team's ticket system. Will require some further research as I'm not sure all of the teams use anything with a proper API, esp. the minor teams.
