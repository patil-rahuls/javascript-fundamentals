//////////////////////////////////////////////////////////////
// THROTTLING  ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Throttling is controlling the rate of execution of a
// function.
// If a function is being called 100 times per second (like a
// user scrolling or a high-speed sensor sending data),
// throttling steps in and says: "I hear you, but we are only
// actually going to run this code once every 200 milliseconds."

// Throttling is used for "Observational" or
// "High-Frequency UI" data. This is data where the trend or
// the current state matters more than every single individual
// data point.

// for e.g. rendering a real time graph and sending its data
// to some server/logger service.


// 1. Real-Time Dashboard Updates (Stock Market/Crypto)
// Imagine you are building a dashboard that shows the price
// of Bitcoin. The price might change 500 times per second in
// the database.

// The Problem: If you try to update the user's browser 500
// times a second, the screen will flicker, the CPU will max
// out, and the user won't be able to read anything anyway.

// The Throttled Solution: Throttle the update to once every
// 200ms.
// Why it's okay to skip: The user only needs to see the
// current price. They don't need to see the 49 intermediate
// price micro-movements that happened in the last 0.1 seconds


// 2. Gaming Movement & Physics
// In a multiplayer online game, your character's position
// $(x, y)$ is being calculated 60 to 120 times per second.

// The Problem: Sending 120 packets per second per player to
// the server would destroy your bandwidth.

// The Throttled Solution: Send the position to the server
// only 20 times per second (every 50ms).
// Why it's okay to skip: The server uses "Interpolation" to
// guess the movement between points. Skipping a few
// coordinates doesn't break the game; it just saves the
// network.



// 3. "Last Seen" or "Presence" Heartbeats
// Apps like Slack or Discord need to show if you are "Online."
// Your app sends a "heartbeat" to the server to say "I'm
// still here!"

// The Problem: If a user is actively clicking around the app,
// you might trigger a "presence check" on every click.

// The Throttled Solution: Throttle the "Update Last Seen" API
// call to once every 30 seconds.
// Why it's okay to skip: Whether the database says you were
// last seen at 12:00:01 or 12:00:25 doesn't change the fact
// that you are "Online." The data in between is redundant.



// 4. Search Autocomplete (The "Halfway" Case)
// When a user types "JavaScript" into a search bar:

// The Problem: You don't want to hit your database for "J",
// then "Ja", then "Jas"...

// The Throttled Solution: (Though often debounced), some systems
// throttle this to provide "streaming" results while typing.
// Why it's okay to skip: If the user types fast, they don't
// care about the search results for "Jav"—they want the
// results for "JavaScript."
