---
layout: post
title: Introduction to the Presepe project
author: Xed89
---
Recently we started working on a project for a local community. They have a fairly big presepe (Nativity set, in italian) with moving parts, background sound effects and lights and we.. *could not resist!*
<br/>
We were asked for advice to modernize the electronic part, both on hardware and software, and that matched perfectly with our need to have a well defined project with a clear goal. Plus there will be a show during Christmas when people will see our work, and that means gratification!

# The first goal
The existing setup is rather old, with a interesting mix of DOS, LPT ports and high AC voltage. We decided to procede with caution, since it's the first time with a project of this size and Christmas can't be postponed. Our first goal is to replace the low voltage control circuit and the DOS computer with a STM32F401 Nucleo board, and leave the rest for the next year unless we complete this part early enough.

# Hardware setup
We did a quite detailed analysis of the current hardware and produced some schematics to figure out the critical parts, and to make sure that some safety measures were in place. The mains voltage hardware needs some fixes and semplifications too, but we'll focus for the control circuits for now.<br>
The current circuit that needs to be controlled consists two boards: <br>
## Board #1: Relays for every need
32 relays controlled by 4 discrete PIPO registers, 8 relays each.<br>
**Input:**<br>
8x TTL parallel lines for data<br>
4x TTL chip selects<br>
1x TTL latch pulse.<br>
**Output:**<br>
32x 220Vac relays
## Board #2: Dim all the things!
8 TRIACs used as dimmers for 220Vac mains voltage.<br>
**Input:**<br>
8x gate signals to control TRIACs individually<br>
**Output:**<br>
8x 220Vac TRIACs<br>
1x TTL zero-cross sensing signal for TRIAC timing<br>

Sooo that makes a total of:<br>
8+4+1 <i>(Board #1)</i> + 8+1 <i>(Board #2)</i> = **22 GPIOs!**

We picked this Nucleo board because it's cheap and has enough ports and CPU power to handle pretty much everything we need... or we hope it does! 22 GPIOs are quite a few, but we already have some experience with this board and think it will sort out.<br>

The plans are to make it do quite a lot of things, so let's see if it all works out as planned!

<br>
<center class="center-text">Thank you for reading!</center>
<center class="center-text-small">...and see you soon :)</center>
<br><br><br>
