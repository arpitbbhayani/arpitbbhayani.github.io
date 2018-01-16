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

## The Request Response Paradigm

During the course of evolution of computing, one thing remained constant and
stood as is, _The Request Response Paradigm_.

In every single phase of evolution there is always someone rather some
machines who has the information required by some seeker. So there is
always a __Client__ who asks for some information from the __Server__.

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

GraphQL server exposes just one endpoint which will be the entry point for all
queries that can be made to the server.

### GraphQL Schema

The GraphQL server adheres to a GraphQL Schema that defines how a client
can query this server and get the response. GraphQL schema is a strongly typed
schema that has

 - Types
 - Query
 - Mutations
 - [others](http://graphql.org/learn/schema)

A schema for a Todo application looks something like this

{% highlight js %}
type Todo {
    id: String
    todo: String
    created_at: String
    is_complete: Boolean
}

type Query {
    todos(is_complete: Boolean!, limit: Int): [Todo]
    todo(id: String): Todo
}

type Mutation {
    createTodo(todo: String!, tags: [String]): Todo
}
{% endhighlight %}

In above schema there is one user defined type named `Todo` that has `id`,
`todo`, `created_at` as Strings and `is_complete` as a boolean.

There is root type named `Query` that contains all types of queries that can
be made on the endpoint. Let us disect the types of queries that can be made to
the endpoint

 - fetch todos by their state and limit
 - fetch a single todo by its `id`.

As you can observe, while defining the queries we have also defined the return
type to each and this enables us to make nested requests if we want to fetch
extra information.

There is another root type named `Mutation` that defines how you can mutate
data, in simple terms insert/delete/modify. In above example we have just one
mutation that defines the way we can create a todo.

More details can be obtained [here](http://graphql.org/learn/queries/).

### GraphQL Types

Since GraphQL is strongly typed, you will have to create types for every single
entity. Every type that you define will have fields and each field will have a
scalar or another user defined type associated with it.

#### GraphQL Scalar Datatypes

 - `Int`: A signed 32‐bit integer.
 - `Float`: A signed double-precision floating-point value.
 - `String`: A UTF‐8 character sequence.
 - `Boolean`: true or false.
 - `ID`: The ID scalar type represents a unique identifier, often used to refetch an object or as the key for a cache. The ID type is serialized in the same way as a String; however, defining it as an ID signifies that it is not intended to be human‐readable.

### GraphQL Query

A GraphQL query is a string that is sent to a server to be interpreted
and fulfilled, which then returns JSON back to the client. Every query also
provides a shape to be returned, this way you always know what you are getting.

GraphQL Query not only fetches data from the server but it also mutates and
subscribes; hence it depends on the query passed.

_There are some amazing features of GraphQL that I will not discuss here
and will be part of some advanced tutorials._

## GraphQL Execution

Each field in a GraphQL query has to be backed by a [Resolver Function](http://graphql.org/learn/execution/#root-fields-resolvers) that will
have the logic of performing the task and returning the value. The value
returned can be either a scalar value or a GraphQL type. If a field produces a
scalar value, then the execution completes. However if a field produces an
object value then the query will contain another selection of fields which
apply to that object. This continues until scalar values are reached. GraphQL
queries always end at scalar values.

To imagine this situation, just think of it like a Tree traversal where we keep
on visiting the child nodes and return back when we find leaf node.

### Resolver Function

Every resolver function will receive 3 arguments

 - `obj` The previous object, which for a field on the root Query type is often not used.
 - `args` The arguments provided to the field in the GraphQL query.
 - `context` A value which is provided to every resolver.

{% highlight js %}
const resolvers = {
    Dog: {
        speaks: function(obj, args, context) {
            return "Bow Bow " + args.word;
        }
    }
}
{% endhighlight %}

Whenever a query that asks for speaks field of Dog type then the above resolver
function is called and it would return the text `"Bow Bow " + word`.

This is great feature because, if some field is never asked it's resolver
function is never called and thus it becomes super efficient as you would
never resolve and fetch information for the field that is never asked.

## Features of GraphQL

### Shape

The main attraction of GraphQL is the data shape i.e. you get what you asked
for, nothing more and definitely nothing less. In the query you made you also
specify the shape and you get the exact thing back in the response.

### Strongly Typed

Other prominent feature of GraphQL is its strong typed nature because of which
everything becomes coupled and predictable.

### Protocol, not storage

GraphQL is not tied with any specific backend or database; it is much more than
that. It works on application layer can perfectly work with your existing
code.

### Version Free

One major highlight of the using GraphQL is that it is version free. This is
a bit tricky to understand but bear with me. When new features are added to the
product, additional fields are added to the response and since in GraphQL
client ask for the field that it requires from the server, other fields will
never be picked up and resolve and thus eliminating the need of versioning.

In addition to this you can also deprecate the field that you no longer need
and client need not be changed and whole functionality will continue to work.

### Documentation is right there

One can just look at the schema and understand what is what without any need
of extra documentation what so ever.

## A Todo Application

Let us create a todo application that would do the following

 - Create a todo
 - Create a Tag
 - Mark a todo as complete
 - Unmark a completed todo as incomplete
 - Get all todos by its completion status
 - Get one single todo

and each todo will have

 - id
 - task
 - creation time
 - tags

and each tag will have

 - name
 - color (hex code)

Additionally each tag will also have a reverse mapping of posts that belongs to
the tag.

### Types

First let us define type `Todo` that will represent one Todo in the application.

{% highlight js %}
type Todo {
    id: String
    todo: String
    created_at: String
    is_complete: Boolean
}
{% endhighlight %}

Other type we will define is `Tag` that represents a Tag.

{% highlight js %}
type Tag {
    id: String
    name: String
    color: String
}
{% endhighlight %}

But we also want that when someone queries for a tag, he/she may also fetch the
todos that belongs to the tag and hence there will be a field named `todos` that
will hold list of `Todo`.

{% highlight js %}
type Tag {
    id: String
    name: String
    color: String
    todos: [Todo]
}
{% endhighlight %}

NOTE: Since GraphQL only defines how your data looks at the application level
we are totally free to persist information as we like in our databases.


### Mutations

We will require following mutations

{% highlight js %}
type Mutation {
    createTodo(todo: String!, tags: [String]): Todo
    createTag(name: String!, color: String): Tag
}
{% endhighlight %}

### Query

{% highlight js %}
type Query {
    todos(is_complete: Boolean!): [Todo]
    todo(id: String): Todo
    tags: [Tag]
}
{% endhighlight %}

### The Final GraphQL Schema

The final GraphQL schema will look something like this

{% highlight js %}
type Tag {
    id: String
    name: String
    color: String
    todos: [Todo]
}

type Todo {
    id: String
    todo: String
    created_at: String
    is_complete: Boolean
    tags: [Tag]
}

type Query {
    todos(is_complete: Boolean!, limit: Int): [Todo]
    todo(id: String): Todo
    tags: [Tag]
}

type Mutation {
    createTodo(todo: String!, tags: [String]): Todo
    createTag(name: String!, color: String): Tag
}
{% endhighlight %}

### Backend Code

For a GraphQL server to handle the mutations and the queries, you just need
to write resolvers for each of them. Just find a suitable GraphQL library
for your favourite language and start writing resolvers.

I have used NodeJS and have written this application, you can find the complete
code in [this repository](https://github.com/arpitbbhayani/todo-dooby-doo).

### Graphiql

There is an amazing utility called Graphiql that give a nice interface to make
queries to a GraphQL server. Just set up in the server that serves GraphQL
endpoint and you are good to go.

### Call GraphQL Endpoint with any HTTP client

Make HTTP `POST` request to GraphQL endpoint with the valid GraphQL
Query, as you provide in Graphiql, and content type set as `application/json`
and you will get back the response as you get in Graphiql.

A sample curl request to understand things better

{% highlight bash %}
curl \
    -X POST \
    -H "Content-Type: application/json" \
    --data '{ "query": "{ todos { todo } }" }' \
    https://localhost:8082/graphql
{% endhighlight %}

### In Conclusion

GraphQL is really an amazing utility that can make you life a lot easier. there
are lots of amazing features in GraphQL which I have not discussed here. Stay
tuned to this blog and you would surely see some tutorial coming up.
