---
title: Building the Potterverse search engine
img:    https://arpitbhayani.me/static/images/potterverse/potterverse-search-engine.jpg
layout: post
comments: true
tags:
 - potterverse
categories: blog
seo:
 tags:
  - harry potter
  - potterverse
  - voldemort
  - search engine
  - elasticsearch
  - vuejs
  - google app engine
  - python
  - jupyter
  - golang
 description: After deciding on the tech stack for Potterverse, it was time for me to get started with building something nice.
---

After deciding on the [tech stack]({% post_url blog/2018-09-11-tech-stack-for-potterverse %})
for [Potterverse](http://potterverse.arpitbhayani.me/), it was time for me to
start building something nice. The process started with creating the first design, downloading
and processing the dataset, extracting the required information and dumping everything into
elasticsearch.

### The first design
The very first product design I had in mind looked like this

<div class="ui hidden divider"></div>
<div class="ui image">
    <img src="/static/images/potterverse/design-001.jpg" />
</div>
<div class="ui hidden divider"></div>

The left half of the page contains the search results for the given term
and right half contains a small preview of the page that is selected/tapped. If the user
taps on the title of the result, it opens the source page in a new tab. Each item in the result
contains some information about the page, like `Title`, `SmallExcerpt`, `SourceLink`, and
`ShortPreview`.

The short preview of the page will help the user get a snippet of information about the
entity that is tapped. After reading the snippet, if the user want to read more from
the page, there is a `Read More` link which would open the source page in new tab.

The result page also shows the time taken for the search to perform and approximate number of
relevant documents for the given search query.

### Downloading and processing the dataset
The very basic version of Potterverse is built on top of the
[Harry Potter Wikia Dataset](http://harrypotter.wikia.com/wiki/Help:Database_download) from Wikia.
The dataset is very similar to Wikipedia dataset and is also in [Mediawiki format](https://www.mediawiki.org/wiki/MediaWiki)
which makes my life much simpler as I have already written a [SAX Parser](https://en.wikipedia.org/wiki/Simple_API_for_XML) for my [very first search engine](http://github.com/arpitbbhayani/wikise) built on top of Wikipedia data.

With slight modifications in the code, I converted the entire dataset in
[JSON format](http://www.json.org/) which is loved by both Python and Elasticsearch. Along with extracting
basic information like `DocumentID`, `Title`, `Body` the parser also extracts `Infobox`, `Categories`,
`InternalLinks`, `ExternalLinks` explicitly. The entire detail is JSONed and dumped in files, one
file per document.

The dataset contains tonnes of documents that are not significant, like `Talk` documents, `File` documents,
etc. which are filtered out before processing. After filtering we are left with around **13350** documents,
and this now becomes the very first corpus on top of which the first version of Potterverse
search engine is built.


### Indexing the data in Elasticsearch
The list of information that si required to show on interface includes
 - `Title`
 - `SourceLink`
 - `ShortExcerpt`
 - `ShortPreview`

Since Elasticsearch should behold everything required on the interface, hence we need to compute,
process and dump information beforehand. Let's see what we have and what we don;t

 - `Title` is present in dump file as is.
 - `SourceLink` is base url of Wikia with `Title` appended to it.
 - `ShortExcerpt` is first 256 characters from `Body`
 - `ShortPreview` is first 3000 characters from `Body`

So a sample document dumped in Elasticsearch index will look something like this

{% highlight json %}
{
    "Title": "Harry Potter",
    "Body": "Harry James[57] Potter (b. 31 July, 1980[1]) was a half-blood[2] ... ...",
    "Excerpt": "Harry James[57] Potter (b. 31 July, 1980[1]) was a half-blood[2] ... ...",
    "SourceLink": "http://harrypotter.wikia.com/wiki/Harry Potter"
}
{% endhighlight %}

Here `Title` is the title of the document picked as is from the dump file and `Excerpt` is the
first 3000 characters from `Body` and the `Body` itself. I persist `Excerpt` so that, while
querying the elasticsearch I need not fetch the entire `Body` of the page, instead I can only
select `Excerpt`; inturn saving a lot of network bandwidth.

The mapping for the index is raw and default, with default analyzer, default tokenizers and
default settings, in short no customizations.

### Querying the data
For the first version of search engine, the query to be fired on Elasticsearch is a very basic
one with boost given to `Title` match none given to `Body`. Fuzziness is set
to `AUTO` for both fields, which ensures that the search engine is also Typo Tolerant.

For the query `Harry Potter` elasticsearch query that is fired looks like this

{% highlight json %}
{
  "query": {
    "function_score": {
      "query": {
        "bool": {
          "should": [
            {
              "match": {
                "Title": {
                  "query": "Harry Potter",
                  "boost": 100
                }
              }
            },
            {
              "match": {
                "Body": {
                  "query": "Harry Potter"
                }
              }
            }
          ]
        }
      }
    }
  }
}
{% endhighlight %}

Above query when fired on Elasticsearch returns nice results; which are okay
to be driving the first version of search engine. The default
[tf-idf](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) scoring
works well and results are quite relevant.

### In conclusion
With very minimal efforts this is how I spun up a nice looking Harry Potter based search
engine. It was not difficult and took very little time for entire setup. As and when
some modifications will be made to Potterverse, a blog will be published detailing
the changes, improvements and results that have been made and achieved.

Stay tuned!

PS: In case you have any suggestions about [Potterverse](http://potterverse.arpitbhayani.me/),
feel free to tweet me [@arpit_bhayani](https://twitter.com/arpit_bhayani)
