---
title: Finding out Gravitational Constant - The Cavendish Experiment
img: http://arpitbhayani.me/static/images/cavendish-experiment/cavendish-experiment-intro.jpg
layout: post
comments: true
tags:
 - science
 - how-was-it-measured
 - gravity
categories: science
seo:
 tags:
  - how was gravitational constant calculated
  - how was G calculated
  - gravity
  - how was it calculated
  - cavendish experiment
  - henry cavendish
  - force of attraction
 description: The gravitational force was discovered by Sir Isaac Newton, but he was not the one who calculated the Gravitational Constant. Finding out G was stroke of genius and was discovered by a British scientist Henry Cavendish in 1797–1798.
type: dummy
mathjax: true
---

The gravitational force was discovered by [Sir Isaac Newton](https://en.wikipedia.org/wiki/Isaac_Newton), but he was not the one who calculated the __Gravitational Constant__ ($$ G $$). Finding out $$ G $$ was a stroke of genius and was first discovered by a British scientist [Henry Cavendish](https://en.wikipedia.org/wiki/Henry_Cavendish) in 1797–1798, but no where in his publication he mentioned anything about this instead he was just __"Weighing the Earth"__.

But an interesting by-product of the experiment came out as the value __Gravitational Constant $$ G $$__. The value that was obtained from the experiment was having an error of just $$ 1\% $$. So let's not anymore take value of $$ G $$ for granted, and find out how it was calculated in the first place.

# First step
--------------------------------------------------
Going with the intuition let's jot down the formula of gravitational force.

$$
    F = G (\frac{m_1.m_2}{r^2})
$$

To calculate $$ G $$ all we need are the values of variables except $$ G $$. Lets see what we have got or can get easily

- $$ m_1 $$: The mass can be measured with any regular weighing machine.
- $$ m_2 $$: The mass can be measured with any regular weighing machine.
- $$ r $$: Regular ruler or measuring device can help us measure the distance.
- $$ F $$: Measuring gravitational force, now should be tricky (◔ૂ◔)

The experiment that calculated the Gravitational force of attraction between two bodies was the __Cavendish experiment__.

_Please note that I am simplifying the experiment apparatus for better understanding. The original experimental apparatus was pretty gigantic and complex. If you want to go into details of that please see the reference links below._

# The prerequisite
--------------------------------------------------
Before we know the apparatus, we should know what a __torsion spring__ is.

### Torsion Spring
---------------------------------------------------
A torsion spring is a spring that works on the principle of twisting. When this spring is twisted, it exerts a torque which is proportional to the angle of the twist.

$$
    \tau_s \propto F_s \propto \theta
$$

where

- $$ \tau_s $$: Torque exerted on spring
- $$ F_s $$: Force component of torque
- $$ \theta $$: angle with which the spring is twisted

# The setup
---------------------------------------------------
There is a torsion spring $$ S $$ fixed at the top and there is a horizontal bar with identical lead balls, each of mass $$ m_2 $$, connected on its ends. The bar and the torsion spring are connected with very thin but strong bar. This assembly is free to rotate along vertical axis. A small mirror $$ M $$ is mounted on this thin bar. Now two very huge identical lead balls, each of mass $$ m_1 $$, are then mounted to the ground in the position as shown in the image.

<a href="/static/images/cavendish-experiment/cavendish-experiment-setup.jpg" data-lightbox="/static/images/cavendish-experiment/cavendish-experiment-setup.jpg" data-title="{{page.title}}">
    <img class="ui large centered stylish image" src='/static/images/cavendish-experiment/cavendish-experiment-setup.jpg' alt='{{page.title}}'/>
</a>

There is a light source $$ L $$ that incidents a laser beam on mirror $$ M $$ and the reflected light is captured on surface $$ C $$.

## What are we trying to do here?
---------------------------------------------------
We are trying to measure the gravitational force of attraction between these lead balls.

## How it works
---------------------------------------------------
At time $$ t = 0 $$, all the 4 balls are co-planar. and lines joining identical balls are perpendicular to each other. The laser beam is turned on and the beam then hits the mirror $$ M $$ and is reflected back at point $$ P_1 $$ on surface $$ C $$. Now after some time, the gravitational force of attraction between balls $$ m_1 $$ and $$ m_2 $$ will generate a torque; and eventually will create a twist in the spring $$ S $$.

As the spring twists, the mirror, that is mounted on the vertical bar, rotates along vertical axis. Since the light source did not move but the mirror did rotate hence the incident light will now be reflected at some different angle i.e. it will now reflect back to a different point $$ P_2 $$ on surface $$ C $$.

<a href="/static/images/cavendish-experiment/cavendish-experiment-working.jpg" data-lightbox="/static/images/cavendish-experiment/cavendish-experiment-working.jpg" data-title="{{page.title}}">
    <img class="ui large centered stylish image" src='/static/images/cavendish-experiment/cavendish-experiment-working.jpg' alt='{{page.title}}'/>
</a>

The angle with which the spring was twisted can now be calculated easily with this observation. Since this twist was only because of the Gravitational Force of attraction, hence at __equilibrum__ the twisting force will be equal to gravitational force of attraction.

## Calculation
---------------------------------------------------
From the above procedure we have __Angle of twist $$ \theta $$__. To exactly calculate the value of $$ G $$, few more parameters are required, one important being __Torsion Coefficient__, which is the measure of resistance provided by spring during twisting.

The torsion coefficient can be easily calculated, using period of oscillation due to inertia of smaller lead balls. The final equation that gives the __Torsion Coefficient__ is

$$
    K = \frac{2\pi^2.m_2.L^2}{T^2}
$$

where

- $$ K $$: Torsion Coefficient
- $$ m_2 $$: Mass of smaller lead ball
- $$ L $$: Length of horizontal bar on which smaller balls are mounted
- $$ T $$: Period of oscillation of horizontal bar

The final equation with which we can easily calculate $$ G $$ is

$$
    G = \frac{K.\theta.r^2}{L.m_1.m_2}
$$

where

- $$ G $$: Gravitational constant
- $$ K $$: Torsion Coefficient
- $$ \theta $$: Angle of twist
- $$ r $$: Distance between balls at equilibrium
- $$ L $$: Length of horizontal bar on which smaller balls are mounted
- $$ m_1 $$: Mass of larger lead ball
- $$ m_2 $$: Mass of smaller lead ball

[Derivation of above equations](http://www.school-for-champions.com/science/gravitation_cavendish_experiment_derivation.htm)


# Interesting Resources
----------------------------------------------------
- [Knowing more about Henry Cavendish](https://www.youtube.com/watch?v=2PdiUoKa9Nw)

# References
----------------------------------------------------
- [Cavendish Experiment Wiki](https://en.wikipedia.org/wiki/Cavendish_experiment)
- [Cavendish experiment in brief](http://ffden-2.phys.uaf.edu/211_fall2010.web.dir/Smith_Elliot/Cav_World.html)
- [Demonstration of cavendish method](https://www.youtube.com/watch?v=4JGgYjJhGEE)
- [Cavendish and the Value of G](http://www.physicsclassroom.com/class/circles/Lesson-3/Cavendish-and-the-Value-of-G)
