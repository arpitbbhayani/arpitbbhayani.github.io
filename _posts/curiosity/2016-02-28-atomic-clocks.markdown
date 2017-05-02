---
title: How atomic clock works | busting several myths about it
img: http://arpitbhayani.me/static/images/atomic-clocks/atomic-clocks.jpg
layout: post
comments: true
tags:
 - science
 - particle-physics
 - how-it-works
categories: curiosity
seo:
 tags:
  - how atomic clock works
  - how it works
  - atomic clocks
  - working principle of atomic clock
  - working principle
  - engineering
  - use of cesium
 description: The accuracy of atomic clock is not because of its radioactivity or atomic decay ... lets find out the truth behind it.
---

The accuracy of atomic clock is not because of its radioactivity or atomic decay ... lets find out the truth behind it.

There are some very common myths about atomic clocks, the most most famous are

1. Atomic clocks are radioactive
2. Atomic clocks works on principle of atomic decay

Lets see how our world is in sync with a clock so accurate that it **looses 1 second in 138 million years**.

# Time keeping before atomic clocks
--------------------------------------------------
I will not go into a very long history of time keeping but will surely try to put it in some other post. So lets take a step backward and start our journey of keeping time using **Quarts Crystal**.

Let me tell you in brief how it worked. **Quarts Crystal** has a spacial property that it is [piezoelectric][piezoelectric], which means that

<img class="ui medium right floated image" src='/static/images/atomic-clocks/quartz-piezoelectric.jpg' alt='{{page.title}}'/>

1. When you apply pressure to it it generates tiny electric current.
2. When you pass electricity through it, it vibrates at a precise frequency.

Because of this piezoelectric property of quartz, it is widely used in building clocks. When a battery is applied across a quartz crystal and because it vibrates at precise frequency of **32,768 Hz**, so applying a counter we can precisely know when time lapsed 1 second. But there is a big drawback of this...

## Issue with battery operated Quartz Crystal
--------------------------------------------------
As quartz crystal vibrates, it looses energy and it slows down and looses time. Hence it requires an electric pulse to reconfigure its vibrations again at that its natural frequency. How can we solve this? Yes! A **FEEDBACK LOOP**.

But we need to create this feedback loop very very accurately. Atomic clocks do this very neatly and with amazing accuracy. Lets see how

# Lets get some basics right
--------------------------------------------------
Before we start digging into working principle of an Atomic clock and eventually clearing our minds off the myths, we first need to clear our basics and some fundamental concepts

### Atomic structure of Cesium

Atomic number of cesium is 55, hence it has in all 55 electrons distributed in 6 orbits. Distribution of electrons in shells is something like this 2-8-18-18-8-1, having 1 electron in its outermost shell.

<img class="ui medium centered image" src='/static/images/atomic-clocks/cesium-atom.jpg' alt='{{page.title}}'/>

### Hyperfine interaction

The interaction between nucleus and its surrounding environment is known as **hyperfine interaction**. The magnitude of these interactions are very very small but enough to shift energy levels.

<img class="ui medium right floated image" src='/static/images/atomic-clocks/hyperfine-interactions.jpg' alt='{{page.title}}'/>

Consider the representation above, the interaction between nucleus and electron is hyperfine interaction. This interaction is a combination of the following

1. electrostatic force of attraction,
2. magnetic field of spinning nucleus and
3. gravity pull between the two.

The energies of the hyperfine interaction occur in the radio and microwave region. The resultant force acts as a spring with minute amount of tension and hence electron while moving around the nucleus oscillates slightly.

### Resonant frequency of atoms

Every atomic system or molecular system has a resonant frequency. In simple terms, when a electromagnetic radiation is incident on a atomic or molecular system then it interacts with the system in certain ways. The radiations consists of waves and each wave has a frequency. If the frequency of the radiation matches with the resonant frequency of the system, then the system vibrates with maximum amplitude and the energy is absorbed the atoms and molecules of the system.

This oscillatory behavior is used to explain for various phenomenon like light absorption, light dispersion and radiation and is responsible for change of energy states of an atom. You can read more about resonance [here][resonance].

### Special case of cesium atom

Cesium atom can be in two energy states: Low energy state and high energy state. In case of cesium atom, the resonant frequency is **9,192,631,770 cycles per second**, so if a radiation of same frequency is applied then atom will resonate and start moving from one energy state into another.


# Working
--------------------------------------
Basics done! let's jump into the working of it.

An atomic clock consists of a traditional **Quartz Crystal** which is used for marking mechanical pulse just like in closed based on [battery operated quartz crystal][quartz-clock]. The main advancement required was in creating a feedback loop across Quartz Crystal so that whenever the crystal looses it energy it will be shot by an electric pulse so that the crystal regains it energy and thus always maintains a period.

<img class="ui medium right floated image" src='/static/images/atomic-clocks/effect-of-magnetic-field-on-cesium.jpg' alt='{{page.title}}'/>

Properties of Cesium atoms we care about:

1. Cesium atoms can be present in two states: Low energy and High energy.
2. They can be separated by applying magnetic field.
3. Low energy cesium atoms can be converted into high energy by applying external radiation.

First the Cesium chloride is heated in an oven, this creates a gaseous stream of cesium ions. This stream contains both the low and high energy ions. Now first magnetic filter is applied to this stream. The application of magnetic field to this stream bifurcates the stream into two sub-streams. One containing low energy cesium and other containing high energy cesium.

Now the low energy cesium stream is passed through a radiation chamber in which the a radiation of frequency **9,192,631,770 cycles per second** is bombarded on it. This will make the low energy cesium to go into high energy state.

Now emerging from the radiation chamber we have a stream of high energy cesium ions; but not all are converted to high energy state if there is an offset in radiation frequency. Hence to know how many cesium atoms jumped into high energy state another magnetic filter is applied. Hence we deduce that, **closer the radiation frequency is to resonant frequency of cesium, higher will be conversion rate of low energy cesium to high energy cesium**.

The stream is again divided into two and now the sub-stream of high energy cesium ions is redirected to a detector.

<img class="ui large centered stylish image" src='/static/images/atomic-clocks/feedback-loop-atomic-clock.jpg' alt='{{page.title}}'/>

Now comes the catch: The purpose of the detector is to convert high energy cesium ions into electricity. **Higher the number of ions incident on it higher will be the current generated**.

This current is passed to **Quartz Oscillator** with which we mark one pulse. This oscillator is responsible to control wavelength (in turn frequency) of incident radiation.

Suppose the quartz oscillator looses its energy. As soon as this happens, the radiation in the chamber weakens. Hence number of cesium atoms jumping into high energy state drops. This tells another electric circuit to zap the oscillator and correct the period of oscillation. And thus locking its frequency in a very narrow range. This locked frequency is then divided by 9,192,631,770 which results in the familiar one pulse per second.

Now we see how we overcame the drawback of traditional Quartz Clock and created a much much accurate atomic clock which **looses 1 second in 138 million years**.

This is how an atomic clock works. In above working principle of this we found that

1. There was no radioactivity
2. There was no atomic decay
3. It really had Quartz Oscillator in it, so we did not move out of it.
4. Using interaction happening at such a scale of nanometers we could solve one of the biggest problem.


# For more info:
-----------------------------------------------
1. [Resonance][resonance]
2. [Piezoelectric Effect][piezoelectric]
3. [Mechanism of Quartz Clock][quartz-clock]
4. [How does a practical cesium atomic clock works?](http://science.howstuffworks.com/atomic-clock3.htm)
5. [Atomic Clocks: What Time is it, Really?](http://www3.nd.edu/~techrev/Archive/Winter2002/a4.html)
6. [Hyperfine interactions](http://www.cmp.liv.ac.uk/frink/thesis/thesis/node14.html)


[resonance]: https://en.wikipedia.org/wiki/Resonance
[piezoelectric]: https://en.wikipedia.org/wiki/Piezoelectricity
[quartz-clock]: https://en.wikipedia.org/wiki/Quartz_clock
