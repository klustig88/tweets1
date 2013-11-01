Tweets 1:

A simple application that will grab the most recent tweets based off a twitter handle that is given.

Utilizes the Twitter Gem to gain authentication for the twitter account to be able to pull in the 
most recent tweets of the twitter account.

We implement a caching system to speed up the process of rerendering the tweets we have already retrieved.  We also refresh
the cache every 15 minutes to make sure that the tweets are the most up to date and have are not stale.
