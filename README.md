# SLACK-JIRA BOT (SAM)
# ODC December Hackathon 2018 (Denver)

A SLACK-JIRA bot with Natural language capabilities

# Team

Chetan

Kevin 

Brian

Vanessa

Xavier

# plus points

Diversed and cooperative team 

Each member on team learned and contributed to the project

written from scratch with on the spot learning (quick learning and adaptability)

tried new technologies which most of the team has never worked before

Very useful because

- don't have to remember any slack commands

- enjoy talking to JIRA in natural english

- don't have to switch to JIRA WEB UI

- can simultaneously talk to a real person and bot at the same time.



# tech stack

Nodejs + express + cloud firebase functions

dialogflow - NLP from google

slack Integration (Personal slack)

Can be inegrated with Voice commands https://bot.dialogflow.com/c180d840-61c6-4683-b7d0-b38fb1e3500a

(This feature has not been actively tested!)


# Learnings & challenges

learn dialogflow and train dialogflow by creating Intents, Entities, Contexts.

learn firebase functions - cloud based functions

learn slack integration

learn node js, express framework, rest API creation



# slack commands

How can I help you

get property of ticket
```
give me status of ticket JS-1001
give me assignee of ticket JS-1001
who is the developer on JS-2011
status of JS-1001 
assigned JS-1001
priority JS-1001
comment on JS-1001
title of JS-1001

```
or  get all tickets matching a property

```
give me tickets with labels jst3, developer Frida Kahlo
show me all tickets with developer Abraham Lincoln
what tickets are assigned to Abraham Lincoln
tickets with status code review
tickets with epic refactor
give me tickets with status closed
list all high priority tickets
list all closed status tickets

```
or  get all tickets matching multiple properties

```
tickets with release MR35, status release
tickets with epic refactor, status blocked
tickets with priority high, labels jst3
tickets with release MR35, status Closed
tickets with labels jst3, status Closed
tickets from components Adfinding, status Closed
Tickets with priority high, release mr35, status closed
```

# preview

