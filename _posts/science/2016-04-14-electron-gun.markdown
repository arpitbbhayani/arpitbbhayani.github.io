---
title: The Electron Gun | Way to wipe electrons off the atom
img: http://arpitbhayani.me/static/images/electron-gun/electron-gun.png
layout: post
comments: true
tags:
 - science
 - how-it-works
 - particle-physics
categories: science
seo:
 tags:
  - how electron gun works
  - thermionic emission
  - electron
  - cathode ray tube
  - crt
 description: Can we isolate electrons from an atom? Can we have a gun that shoot electrons? Evidently we had such thing in our homes. Let's find out how, where and what!
type: dummy
---

An atom is composed of three sub-atomic particles, namely

- electrons
- protons
- neutrons

To our curiosity, let's see how we can isolate electrons from an atom; what we could do with these isolated electrons; and how we can leverage this energy and make a gun out of it.

# The history
--------------------------------------------------
Human race has always been very curious about everything around. The epitome of this curiosity has led to a number of amazing discoveries and inventions. One of the major discoveries include __discovery of electron__. Until 1897, it was believed that the atom was indivisible and was considered to be the fundamental unit of matter. But [Sir J. J. Thomson](https://en.wikipedia.org/wiki/J._J._Thomson) discovered a particle that nobody had ever seen, it was an __Electron__.

Let's take it a step further and see how we can make a gun that shoot electrons.


## Let's get the electrons out
--------------------------------------------------
Metal atoms have a tendency to lose electron(s) and create positively charge ions hence it should be fairly easy to remove electrons from metals. A small bolt of energy should suffice in breaking the potential barrier and make electrons move out of the atom. So if we supply some energy, let's say heat energy, should and will pop out of atoms. This process is called as __Thermionic Emission__ and the amount of energy required to remove an electron from the atom is called its __Ionization Energy__.

So we take a piece to metal (a thin filament) and heat it to a very high temperature; this will make electrons within it break the potential barrier and will start to move around in the lattice structure.

#### Thermionic Emission
--------------------------------------------------
Thermionic emission is an flow of charge (positive or negative) which is induced by thermal energy. Hence when we supply heat energy to metals, the potential barrier breaks and electrons are removed from the atom and are free to move around, and positively charged ions are left behind in lattice.

## Accelerate electrons
--------------------------------------------------
A gun is something which shoots an object at a very high speed. So an Electron Gun should shoot out electrons at a very high speed. This implies we need to provide some kind of acceleration to the electrons to create a gun out of it. Let's use electrostatic force of attraction for this.

Electrons are negatively charged particle, so if we have something positively charged near them, electrons will feel a very high force of attraction and will get acceleration. The anode (positively charged rod) is created by connecting an electrode to the positive terminal of a power supply and the hot piece of metal is connected to its negative terminal.

<a href="/static/images/electron-gun/accelerating-electrons.png" data-lightbox="/static/images/electron-gun/accelerating-electrons.png" data-title="{{page.title}}">
    <img class="ui large centered stylish image" src='/static/images/electron-gun/accelerating-electrons.png' alt='{{page.title}}'/>
</a>

Lets calculate at what speed these electrons will move.

Electrical energy of one electron, $$ E_e $$ is given by

$$
    E_e = charge . voltage \\
    \therefore E_e = e.V
$$

where,

- $$ e $$, Charge on electron,
- $$ V $$, accelerating voltage (difference between the cathode and the anode)

when this electron is moving, the energy $$ E_e $$ is converted into kinetic energy $$ K.E. $$,

$$
    \therefore E_e = K.E \\
    \therefore e.V = \frac{m.v^2}{2} \\
    \therefore v = \sqrt{ \frac{2.e.V}{m} }
$$

where,

- $$ e $$, Charge on electron,
- $$ V $$, Voltage applied across anode and cathode,
- $$ m $$, Mass of the electron

Thus we now have high speed electrons coming off metal surface.

## Let's make it stronger and sharper
---------------------------------------------------
If we put a positively charged rod near heated metal then electrons will only be accelerated towards the rod, each will feel attraction and will start to move towards positivity. Needless to say, such thing will not be useful. What we always need is something that can make a wild impact i.e. something which is stronger and sharper.

#### Stronger
---------------------------------------------------
Strength of the electron beam is directly proportional to the number of electrons that come out of metal surface. Thus higher the temperature, higher will be the kinetic energy of electrons and higher will be probability of electrons breaking the potential barrier and moving out and thus making the beam stronger.

#### Sharper
---------------------------------------------------
Making the beam sharper implies somehow converging these electrons and narrowing down beam into a thin sharp ray. In order to do that, we need some kind of force that will make this happen, some force that will make electrons move away from it. Yes that's right! the __electrostatic force of repulsion__. What if we make these electrons pass through a ring which is negatively charged? __repulsion__. Thus we get a narrower and sharper beam of electrons.

## Let's make a gun
---------------------------------------------------
If we combine everything mentioned above we get a narrow sharp beam of electrons originating from hot metal place, converging along the way and getting attracted towards the positively charged rod (anode). But where is the gun? We do not want the electrons to be attracted to anode and get absorbed. We want them to be projected out. So what do we do? Yes! we create a hole in the rod and let the beam of electrons pass through it.

Bingo! we now have an Electron Gun!

<a href="/static/images/electron-gun/electron-gun-working.png" data-lightbox="/static/images/electron-gun/electron-gun-working.png" data-title="{{page.title}}">
    <img class="ui large centered stylish image" src='/static/images/electron-gun/electron-gun-working.png' alt='{{page.title}}'/>
</a>

### Why electrons do not cling to anode
---------------------------------------------------
An important question here to ask is, if rod is positively charged then, when an electron is passing through the hole, why don't it cling to the rod? The answer is some electrons do cling to the rod. But if electrons have very high speed (high kinetic energy), the force of attraction has to be very large for electrons to cling and not pass through the hole. Typically electrons travel with speed equalling $$ \frac{1}{10} th $$ of speed of light which is $$ 3 * 10^7 m/s $$.

## Where have I seen that before?
---------------------------------------------------
Electron gun sees its household application in

- Old TV sets used to render images on screen using such electron gun.
- Computer screens also used this technology to raster images on screen.

Because of the high energy electron beam that it is, electron gun has some amazing engineering application like welding and accurate measurement. It is also used as a catalyst in ionization process.

# References
----------------------------------------------------
- [Electron Gun Wiki](https://en.wikipedia.org/wiki/Electron_gun)
- [Practical Physics](http://www.nuffieldfoundation.org/practical-physics/electron-guns)
- [School Physics](http://www.schoolphysics.co.uk/age14-16/Atomic%20physics/text/Electron_gun/index.html)
