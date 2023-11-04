# QLOCKTWO-2 ⏰
<img src="https://raw.githubusercontent.com/iamjohnmeyers/QLOCKTWO-2/master/project%20images/qlocktwo%202.png" width=25% height=25%>

A QLOCKTWO is a modern horological art peice. Instead of looking at hands on a clock or reading numbers, you can simply read the time. Like this: It is five to seven.

<img src="https://github.com/iamjohnmeyers/QLOCKTWO-2/assets/25084859/3ade83fd-f040-401d-b8e8-f5b31de66ca4" width=100% height=100%>

I love the aesthetic of a QLOCKTWO. The problem: they are **very expensive**. I wanted to create something similar, but not spend thousands of dollars buying a QLOCKTWO. So I decided to make my own, with software.

![](https://github.com/iamjohnmeyers/QLOCKTWO-2/assets/25084859/057fa0bf-4e19-464f-bcf7-0162697d43c7)

## The Software
- A python webserver
- p5.js as a graphics engine
- LIFX API for theme integration
- Firefox running in kiosk mode
- Debian Linux

Originally, I only recreated a QLOCKTWO in p5.js

<img src="https://github.com/iamjohnmeyers/QLOCKTWO-2/assets/25084859/7e6f57ae-bdf3-465b-8da0-08de2f3aada9" width=40% height=40%>

But, once I decided I was going to buy a 16:9 TV, I wanted to create something more unique. I added more complications while staying true to the original QLOCKTWO aesthetic.

The laptop is running an instance of Debian Linux set to launch this web app (in kiosk mode) on startup. On startup the mouse is hidden, the desktop orientation is rotated, and a Python webserver is started to host the project. The web app was made using the p5.js graphics library. There is integration with the LIFX API to dynamically control the theme of the app using the lighting in my room.

The actual QLOCKTWO 2, is a bit of a façade. While I wanted to stay true to the original QLOCKTWO aesthetic, it was not possible to include dates unless I cheated a bit. There are actually 4 different layouts for the QLOCKTWO 2. Listed above each layout is the combination of dates used in the layout.

![](https://github.com/iamjohnmeyers/QLOCKTWO-2/assets/25084859/2435684d-0ebd-4527-a20e-cd034038cd6f)

## The Hardware

- A Cheap 43" Insignia TV from a Best Buy outlet center
- A smart WiFi outlet with Google Assistant integration
- A Lenovo laptop velcroed to the back of the TV

I originally used a Libre Computer Le Potato to run this application, but after experiencing issues with the GUI soft locking, I transitioned over to a cheap 11" Lenovo laptop with an Intel Atom chip. I haven't had problems since.

I the QLOCKTWO 2 will also shut down when lights are turned off in the room. This is done with a smart outlet and two Google Assistant automations.

<img src="https://github.com/iamjohnmeyers/QLOCKTWO-2/assets/25084859/eb3cf1cc-dca8-4cc6-8512-30c7c78d8558" width=25% height=25%>

## Legal
I should add, that I do not intend to infringe on QLOCKTWO's copyright. This product is not for sale and was created for my own personal use.

The font used for the project is called "Wordclock". It was created by Matthieu Rudelle on GitHub:
https://github.com/mrudelle/wordclock-stencil-mono

![](https://github.com/iamjohnmeyers/QLOCKTWO-2/assets/25084859/c55ddbb0-0d33-40f7-b22d-3e73885e5dd3)
