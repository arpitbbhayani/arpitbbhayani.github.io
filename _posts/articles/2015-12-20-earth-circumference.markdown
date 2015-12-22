---
title: How big is our Earth?
img:    http://arpitbbhayani.github.io/static/images/earth-circumference/earth.jpg
layout: post
comments: true
tags:
 - science
 - geometry
 - planets
---

Is it really hard to find out surface area of the Earth ourselves? Not much actually! All we need is little bit of Geometry. Lets find out how ...

# The Assumptions
--------------------------------------------------
Before we start calculating, we need to assume few things, which will help us apply concepts of geometry in our calculations. These assumptions are:

* Earth is a perfect sphere.
* Since Sun is very very far and big, so the rays reaching Earth are parallel.
* The objects we are using (pole) are perpendicular to the ground.

# Construction
--------------------------------------------------
Suppose we have two objects (prefereably a pole) present in two cities that are preferably north-sourth to each other. If city constraint is not met then the answer that you will get might have higher error rate.

<div class="ui image">
    <img src="http://arpitbbhayani.github.io/static/images/earth-circumference/1.jpg" />
</div>

Suppose $$ WX $$ and $$ YZ $$ are two poles present in two cities. Sun rays are incident on that pole and rays $$ DC $$ and $$ BA $$ casts a shadow $$ XC $$ and $$ ZA $$ at an angle $$ \theta_{1} $$ and $$ \theta_{2} $$ with top of the poles respectively.

Now some geometrical construction:

* Extend $$ WX $$ and $$ YZ $$ to meet at $$ O $$, the center of the Earth. Let $$ \theta $$ be the angle between.
* Extend line $$ BA $$ to meet $$ WO $$ at $$ A' $$.

Since poles are perpendicular to the ground so if we extend the poles they will meet at the center of the Earth.

# Derivation
-----------------------------------------------------
Lines $$ DC $$ and $$ BA' $$ are parallel and $$ WA' $$ acts as a transversal so we can say that

> $$
    \angle CWA' = \angle BA'W = \theta_{2} \\
    \equiv  \angle CWA' = \angle YA'X = \theta_{2}
$$

Since $$ \angle YA'X = \theta_{2} $$ so we can say that

> $$
    \angle YA'O = 180^{o} - \theta_{2}
$$

Now let us consider $$ \triangle OA'Y $$, we know sum of all angles of a triangle is $$ 180^{o} $$, hence

> $$
    \angle YA'O + \angle A'OY + \angle OYA' = 180^{o} \\
    \therefore (180^{o} - \theta_{2}) + (\theta) + (\theta_{1}) = 180^{o} \\
    \therefore \theta = \theta_{2} - \theta_{1}
$$

Now all we need are the angles made by sun rays at top of the pole. This is pretty simple by the use of trigonometry.

> $$
    \theta_{1} = tan^{-1}(\frac{l(CX)}{l(WX)}) and \theta_{2} = tan^{-1}(\frac{l(AZ)}{l(YZ)})
$$

<table class="ui very basic table">
    <thead>
        <th>Distance</th>
        <th>What it represents</th>
    </thead>
    <tbody>
        <tr>
            <td>l(CX)</td>
            <td>Length of the shadow of pole WX</td>
        </tr>
        <tr>
            <td>l(WX)</td>
            <td>Length of pole WX</td>
        </tr>
        <tr>
            <td>l(AZ)</td>
            <td>Length of the shadow of pole YZ</td>
        </tr>
        <tr>
            <td>l(YZ)</td>
            <td>Length of pole YZ</td>
        </tr>
    </tbody>
</table>

Note that these lengths are to be calculated nearly at the same time because with time the lengths of the shadows will change because of change in apparent position of Sun. Since we have all the ingredients we can now find out $$ \theta $$.

Now time for some extrapolation. If you observe the figure above, it is clear that an angle measuring $$ \theta $$ at the center of the Earth spans a distance $$ l(XZ) $$ at its circumference, which is nothing but the distance between two poles. So we can say that the circumference will be equal to the distance spanned when $$ \theta = 360^{o} $$.

> $$
    \frac{360^{o}}{\theta} = \frac{Circumference}{l(XZ)} \\
    \therefore \frac{360^{o}}{\theta} = \frac{2 \pi R}{l(XZ)} \\
    \therefore R = \frac{360^{o} * l(XZ)}{2 \pi \theta}
$$

The only thing unknown in above equation is $$ l(XZ) $$, which is the distance between poles. To make our lives simpler we will use some GPS for this. If we know the latitude and longitude of the two poles then the distance between them can be calculated very easily. For quick calculations on this you can follow this [link](http://www.movable-type.co.uk/scripts/latlong.html)


# Find how big is our Earth
-------------------------------------------------
As we now have the Radius of the Earth $$ R $$ from above calculations, and if we assume that earth is a perfect sphere, we can find out

* Total surface area $$ 4 \pi R^{2} $$
* Volume $$ \frac{4}{3} \pi R^{3} $$

Actual values are in the table below just to cross check your results

<table class="ui very basic table">
    <thead>
        <th>Measure</th>
        <th>Value</th>
    </thead>
    <tbody>
        <tr>
            <td>Radius of Earth</td>
            <td>6,371 km</td>
        </tr>
        <tr>
            <td>Surface area of Earth</td>
            <td>509805890 km<sup>2</sup></td>
        </tr>
        <tr>
            <td>Volume of Earth</td>
            <td>1.08321×10<sup>12</sup> km<sup>3</sup></td>
        </tr>
        <tr>
            <td>l(YZ)</td>
            <td>Length of pole YZ</td>
        </tr>
    </tbody>
</table>


# The History
--------------------------------------------------
The method was first proposed by Eratosthenes way back in **250 BC**. Lets see how it was done back then ...

In ancient Egypt there was a city named Syene. Eratosthenes was told that in a well during [Summer Solstice](https://en.wikipedia.org/wiki/Summer_solstice) at noon time if he tries to look down a well he will be blocking the reflection of sun from the water, which actually implies the Sun was directly overhead. Syene was present on Tropic Of Cancer and to its north was a city called Alexandria. It is believed that Eratosthenes hired a man to calculate the distance between Syene and Alexandria. The hired man went from Syene to Alexandria and back walking finding out the distance to be **5,000 stadia** (stadia was the unit of measurement back then in ancient Egypt, its conversion to metric system is 1 stade = 185 m)

> Eratosthenes calculated the circumference of Earth to be equal to **46,620 km**.

Obviously he was off by some margin, but we should give him credit for coming up with this back in 250 BC, about 2300 years ago.

What do you think about this? I would love to hear from you guys.
