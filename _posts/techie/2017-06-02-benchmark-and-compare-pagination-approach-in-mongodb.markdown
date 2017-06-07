---
title: Benchmark and compare the two approaches to paginate in MongoDB
img: http://arpitbhayani.me/static/images/mongodb-pagination/benchmark-and-compare.jpg
layout: post
comments: true
tags:
 - mongodb
 - scalability
categories: techie
seo:
 tags:
  - mongodb
  - pagination
  - benchmark
  - results
 description: Benchmark results for two pagination approaches for MongoDB.
---

[MongoDB](https://www.mongodb.com/) is a document based data store and hence pagination is one of the most common use case of it. So when do you paginate the response? The answer is pretty neat; you paginate whenever you want to process result in chunks. Some common scenarios are

- Batch processing
- Showing huge set of results on user interface

There are multiple approaches through which you can [paginate your result set in MongoDB]({% post_url techie/2017-06-06-fast-and-efficient-pagination-in-mongodb %}). This blog post is dedicated for results of benchmark of two approaches and its analysis, so here we go ...

## Preset
Benchmark has been done over a non-indexed collection. Each document of the collection looks something like this
{% highlight js %}
    {
        "_id" : ObjectId("5936d17263623919cd5165bd"),
        "name" : "Lisa Rogers",
        "marks" : 34
    }
{% endhighlight js %}

All records of a collection are fetched page-wise. Size of each page is fixed during fetch of the collection. Time to fetch one “page” is recorded.

Following image shows the how two approach fares against each other.

<img class="ui huge centered stylish image" src='/static/images/mongodb-pagination/mongo-pagination-benchmark-results.png' alt='Benchmark results'/>

A key observation to note is that, till 500-600 count, both the approaches are comparable, but once it crosses that threshold, there is sudden rise in response time for one approach than other. I tried running this test on different machines with different disks but results were similar. I think diving deep in MongoDB's database drivier will yield better information about this behavior.

You would see some spikes in the response times, that are because of Disk Contention.

In short:
 - For huge result set, paginating using `_id` and `limit` is far better than using `skip` and `limit`.
 - For smaller result set, it does not matter, but prefer skip and limit.

An interesting thing I observed is that after page size crosses 100, the gap between the two approach reduces to some extent. I am yet to perform detailed benchmark on that as such situation will never arise in practical applications.

## Source Code

You can find the Python code used for this benchmark [here](https://github.com/arpitbbhayani/mongo-pagination-benchmark). If you have any suggestion or improvement, do let me know.
