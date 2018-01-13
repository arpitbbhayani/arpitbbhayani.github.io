---
title: Introduction to GraphQL
img:    https://cdn-images-1.medium.com/max/1000/1*IvCDlfi3vQfgyKO1eFv4jA.png
layout: talks-post
comments: true
tags:
 - graphql
 - beginner
 - introduction
given_at:
 - Amazon (for Weekly Learning Series)
categories: talks
seo:
 tags:
  - graphql
  - talk
  - facebook
  - beginner
 description: As our applications grow larger, our REST architecture often becomes unmanageable. Custom endpoints and over/under fetching all become part of your life as a developer. Leave that behind and welcome GraphQL, a declarative and hierarchal way to fetch data, with just one endpoint to rule them all.
---

<div class="ui center aligned basic very padded segment">
    <a class="ui primary huge button"
       href="{% post_url 2017-12-14-introduction-to-graphql-presentation %}">
        Link to presentation
    </a>
</div>


This is the detailed explanation and elaboration of the talk. Since all the
information cannot be communicated through presentation, I have jot the things
down here.

## How Things Evolved

Grab on to your seats, we are going way back!

Initially when computers were developed there was just one computer operator
that dealt with the computer and performed the operation required.

<IMG OF ONE USER ONE COMPUTER>

Then with the advancements in technology networking was introduced in these
gigantic machines which grave rise to the __Intranet__ and now multiple users
can access a single computer so long as they belong to the same intranet.

<IMG OF MULTIPLE USERS ONE COMPUTER>

We know humans are very greedy and hence we wanted MORE ... hence we
created the __Internet__ though which many computers were linked to form a
dense network of connected computers and many users were able to access them
simultaneously.

<IMG OF MULTIPLE USERS MULTIPLE COMPUTERS>

Then came the most influential revolution ... the revolution of Smartphones
and wearables; because of which the connected devices which were only computers
can now even be your mobile phone, your watch and even your pants.

<IMG OF MULTIPLE USERS MULTIPLE DEVICES>

## The Request Response Paradigm

If you closely observe, during this complete course of evolution of computing,
one thing did not change and stood as is, _The Request Response Paradigm_.

In every single phase there is always someone rather some machines who has the
information required by some seeker. So there is always a __Client__ who
asks for some random information from the __Server__.

There were lots of protocols that were designed and developed to meet the needs.
Some are

 - Native Sockets
 - Remote Procedure Calls
 - SOAP
 - REST

## REST

REST is most widely accepted of all protocols to be used to Request Response
and communication between client and server. Be it from any device, computer,
wearable and now even sensors to any machine residing in cloud, the unanimous
way of having the communication is over REST.

The primary reason of REST becoming huge was its

 - Simplicity
 - Ease of extension
 - Use of HTTP as a channel


## But! There are problems with REST

"What! You did not just say that ..." must be reaction of most of you but
just wait for some time and let me explain.

### Endpoint Explosion

As your application grows, you keep on adding more and more endpoints that
serves different purposes; and thus when a client wants to get some things
done then it has to hit that exact endpoint with the exact HTTP verb to get the
the job done.

### Rely and Maintain A Good Documentation

Once you have a lot of endpoints, then you have to have a really good document
that describes each endpoint, what it does, what params it expects and etc.
It is a well known fact that maintaining document is probably the hardest
thing for a programmer.

### Multiple Requests

Often it happens that you have to make multiple requests to get to the
information that is really required. Generally you make one request to get the
`id` and other to fetch the actual information.

### Over Fetching

Over-fetching is when you make a call to the server and receive response that
has information that you require but it also contains information that you
do not require. But why is this a problem, you may ask. This is a problem
because when your user is on a slow network device then every bit of information
matters and if the response from your API has information that will never be
shown to user we are just wasting the bandwidth.

### Under Fetching

Under-fetching is exact opposite to over-fetching. In Under-fetching you make
a call to server and server returns a response that does not have the
information you require. In most general case you either

 - create a new endpoint with required information
 - make second request to fetch additional information

### Special Endpoints For Specific Purpose

You may also need to create special endpoints for special purpose. For example
you already had an endpoint to fetch a todo

```
GET /todos
```

Above endpoint returns you all the todos (full detailed information) for
the user. For some specific purpose you may only want `id`s of the todos
instead and hence you will created a specific endpoint that returns only ids

```
GET /todosOnlyIds
```

or pass a query parameter and process it on server side

```
GET /todos?with=id
```

But as your application grows this becomes a huge problem because now you
have tonnes of endpoints that are serving specific purposes and all of the
above problems make things worse.

## The GraphQL

As always, where there is a problem, there comes a superhero to save the day.
This time that superhero or the super library that comes to the rescue is
GraphQL. GraphQL stands for __Graph Query Language__ and it does not deal
with Graph Databases :)

GraphQL is a query language for APIs and in simple terms

> What SQL does with databases, GraphQL does with APIs.

## Brief History of GraphQL

Facebook started using GraphQL in 2012 and have open sourced it in 2015.
Facebook originally developed this in support for their mobile application
but then they realized the impact it created internally and thus decided
to make it publicly available.

GraphQL was developed as an alternative to REST and is nothing but a
specification and thus any language can just adopt it and build a library
that adheres to the specification and any client that can talk GraphQL will
be able to make calls and get the job done.

## Introduction

Every GraphQL server will expose just one GraphQL endpoint which accepts
a GraphQL Query that is specific to a GraphQL Schema. I know I have bombarded
a lot of GraphQL jargon here but bear with me I will explain each one in
detail here.

### GraphQL Server

> GraphQL server is any web server in any language that adheres to GraphQL
specifications.

GraphQL server exposes just one endpoint which will be entry point for all
queries that can be made to the server.

### GraphQL Schema

### GraphQL Query




## Journey of Todo Application

Let us take the easiest example and build a __Todo Application__ over REST.
The basic functionality of this application would be to

 - Create a todo
 - Get all todos
 - Get all incomplete todos
 - Get all completed todos
 - Get one single todo
 - Delete a created todo
 - Mark a todo as complete
 - Unmark a completed todo

and each todo will have

 - id
 - task
 - date and time when it was created

This seems easy and you would have `n` REST endpoints for `n` functionalities you
want. Your endpoints will be something like this

```
POST     /todos
GET      /todos
GET      /todos/incomplete
GET      /todos/complete
GET      /todos/:todoId
DELETE   /todos/:todoId
POST     /todos/:todoId/complete
POST     /todos/:todoId/incomplete
```

You have created the APIs in your favourite backend language, wrote unit tests
and deployed it in production. Then you started writing different clients for
this backend service because there has to be some interface through which user
will interact with the system.

You started with the simplest one and thus you created the website with great
interface and everything worked fine until there was a requirement to have
a Android and and iOS application for this. You quickly created the prototype
application for both devices, integrated it with the backend and shipped it.

Everything worked fine for some months, everyone was happy.

Then one day requirement changed and now while creating the todo item, user
can also attach tags to it.
