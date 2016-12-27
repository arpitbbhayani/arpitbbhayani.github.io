---
title: Kinesis and SQS - Which one should you choose and when
img: http://arpitbhayani.me/static/images/kinesis-and-sqs/kinesis-and-sqs.jpg
layout: post
comments: true
tags:
 - devops
 - sqs
 - kinesis
 - aws
categories: techie
seo:
 tags:
  - devops
  - SQS and Kinesis
  - SQS
  - Kinesis
  - AWS
  - Amazon Web Services
 description: SQS and Kinesis have a lot of things in common. So people tend to think that they are similar and can be used interchangebly. But this is not true, both of them have been designed keeping a lot of things and specific usecases in mind. Even though they provide similar set of functionalities, each of the service is highly optimized for some of its functionalities. So lets dive deep into this
---

SQS and Kinesis have a lot of things in common. So people tend to think that they are similar and can be used interchangebly. But this is not true, both of them have been designed keeping a lot of things and specific usecases in mind. Even though they provide similar set of functionalities, each of the service is highly optimized for some of its functionalities. So lets dive deep into this:

## Difference between Messaging and Streaming
In order to choose between SQS and Kinesis let us first understand the difference between Messaging and Streaming.

SQS is a Distributed Message Queue, where user puts in a message and there are consumers that consumes them and start processing accordingly. Generally message systems are used when you want to perform some task asynchronously (deferred execution). So distributed messageing queues like SQS are ideal for scenarios where you have set of workers who handle your heavy duty processing and you want to avoid overloading your web-application with heavy duty tasks.

Streaming (Message or Data Streaming) on other other is where you want real time streaming of data that is produced by one of the producer and that data is to be consumed by various set of applications in real time for some real time analysis, storage, backup, caching, etc. This is where streams come into picture.

## What is SQS
According to [Amazon](https://aws.amazon.com/sqs/), Amazon Simple Queue Service (SQS) is a fast, reliable, scalable, fully managed message queuing service.

## What is Kinesis
According to [Amazon](https://aws.amazon.com/kinesis/), Amazon Kinesis is a platform for streaming data on AWS, offering powerful services to make it easy to load and analyze streaming data, and also providing the ability for you to build custom streaming data applications for specialized needs.


## Highlights of SQS
 - SQS is infinitely scalable.
 - SQS message queue can contain an unlimited number of messages.
 - You can set the limit on bytes that an Amazon SQS message can contain, between 1-256 KB.
 - You can also send messages larger than 256 KB (upto 2GB) by uploading to s3 and sending reference.
 - Retention period of messages is between 1 minute and 14 days.
 - SQS is reliable, highly scalable hosted queue for storing messages as they travel between computers.
 - Messages are automatically deleted once the message reaches its retention limit.
 - Standard queues provides at-least-once delivery. FIFO queues provide exactly-once processing.
 - SQS won't deliver the same message to another consumer after it has been read for a configurable period (VisibilityTimeout).

## Highlights of Kinesis
 - Made for heavy real-time processing.
 - Kinesis optimized for high-throughput.
 - You can read the same message from several applications
 - You can re-read messages in case you need to.
 - You can create a complex network of streams
 - Kinesis delivers all records for a given partition key to the same record processor
 - You can add data into Kinesis streams from hundreds of thousands of sources and within seconds.
 - The more shards you configure the faster you can write to and read from the queue.


## How to choose one
You should use Kinesis when
 - you want to route related records to the same record processor (as in streaming MapReduce).
 - you want ultiple applications to consume the same stream concurrently.
 - you want to consume records in the same order a few hours later.

 You should use SQS when
  - you want message-level ack/fail and visibility timeout.
  - you want to make message visible after certain delay.
  - you want to dynamically increase throughput at read time by adding multiple consumers.
  - you want to leveraging SQS’s ability to scale transparently.

## References
- [Amazon SQS - Message Queueing Service](https://aws.amazon.com/sqs/)
- [Amazon Kinesis](https://aws.amazon.com/kinesis/)
- [Amazon Kinesis Stream FAQs](https://aws.amazon.com/kinesis/streams/faqs/)
- [Amazon SQS FAQs](https://aws.amazon.com/sqs/faqs/)
- [Answer on Quora by Aditya Krishnan, Product manager at Amazon](https://www.quora.com/What-is-the-difference-between-Kinesis-and-SQS-It-seems-capable-of-serving-similar-use-cases-apart-from-the-shards-and-partition-keys)
 - [Stackoverflow - Why should I use Amazon Kinesis and not SNS-SQS?](http://stackoverflow.com/questions/26623673/why-should-i-use-amazon-kinesis-and-not-sns-sqs)
 - [Messaging on AWS](http://fbrnc.net/blog/2016/03/messaging-on-aws)
