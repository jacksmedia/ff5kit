                                          FINAL FANTASY V
                                        SUPER CUSTOM CLASSES
                                         v1.00 (Mar 3 2021)

Quick Find: Press Ctrl + F and type in the keyword, then press Enter to search for the section.

Changes: Job equipment, Job Abilities
3-slots for all Jobs



      TABLE OF CONTENTS
     Disclaimer .. [DSC1]
     Overview .... [OVR2]
     Changelog ... [CHG4]
     Credits ..... [CRD5]

====================================================================================================
Disclaimer [DSC1]
==========
- Final Fantasy V (c) Square Enix. All rights reserved.

- No ownership is claimed by FlamePurge over Final Fantasy V or the franchise from which it
   originates. Commercial use of this patch, including but not limited to reproduction, sale, etc.
   is strictly prohibited.

- This unofficial, fan-made patch is provided "as-is" on a voluntary (i.e. non-profit) basis.
   FlamePurge is not liable for damage incurred to the end-user, their OS, or their hardware while
   using this patch.

- Apply this patch only to an Unheadered "Final Fantasy V (J) [!].sfc" with the following
   specifications:
     Hashes: CRC32 - C1BC267D
               MD5 - D69B2115E17D1CF2CB3590D3F75FEBB9
              SHA1 - E937B54FFF99838E2E853697E4F559359AA91FD6

- While targeted at the Japanese original ROM, this patch is compatible with any unofficial fan
   translation to other languages.

- Players are encouraged to keep a backup of their original game file in case an error occurs.

----------------------------------------------------------------------------------------------------

Final Fantasy V's Job system is highly lauded, but the majority of Jobs force the !Fight and !Item
commands on top of the command specific to the Job itself, e.g. !Guard or !Throw. For FFV Advance,
Ludmeister made a mod called Custom Classes that allows players more control over character ability
customization. To quote Ludmeister, "You are allowed the maximum leeway granted by the game's engine
to assign commands and abilities that you have earned as you progress through the game."

Myself, I vastly prefer the SNES original to any other version of FFV, so I'd always wanted someone
to port Custom Classes to SNES. And as that old adage says, "If you want something done right,
do it yourself."

You may notice that many of Ludmeister's "under the hood" upgrades did not make it in. It may seem
strange to label something "Super" while being a functional downgrade over its prior incarnation,
but the name is simply inspired by the many SNES games titled with the word "Super."
====================================================================================================

====================================================================================================
Overview
========
- [Applied Patch] Three Slots (HatZen08), which allows a Job to have 3 customizable command slots.

- Rearranged Job command lists as they're laid out in Custom Classes; !Fight can now be removed from
   most Jobs' lists.

- [Applied Patch] Always Learning (Tzepish), so all Jobs learn Blue Magic innately.

- Shuffled around the Blue Mage's learned Ability list so players don't waste time acquiring
   Learning, now a useless Ability.

- [Applied Patch] Galuf Mimic Sprite (Grond).

- [Applied Patch] Sprite Touch-ups (Chicken Knife), cleaning up many of the battle sprites for all
   Jobs.

- Many Jobs can use more types of equipment for variety.

- !MgSword can now be used with katana.
====================================================================================================

====================================================================================================
Changelog
=========
v1.0 (Mar 3 2021)
- [Applied Patch] Three Slots (HatZen08)
   This frees the latter 3 command slots of each Job for deeper customization.


- Most Job command lists no longer have !Fight up top by default. Instead, the Job-associated
   command takes that spot. !Fight and !Item are still automatically assigned upon choosing a new
   Job, but they can both be changed. For example, a Knight will have:
    !Guard
    !Fight [auto-assigned, removable/customizable]
    [blank, customizable]
    !Item [auto-assigned, removable/customizable]
   !Fight and !Item will now appear in the Abilities pool.


- [Applied Patch] Always Learning (Tzepish)
   All Jobs will be able to learn Blue Magic without needing Passive Ability Learning equipped.


- The Blue Mage's learned Abilities are now different, as Learning is now worthless. Further,
   spending 250 ABP to acquire !Analyze was always an awful mastery reward.
    LV 1 ( 1 ABP) - Learning
    LV 2 (10 ABP) - !Observe
    LV 3 (20 ABP) - !Analyze
    LV 4 (70 ABP) - !Blue


- [Applied Patch] Galuf Mimic Sprite (Grond)
   This gives Galuf a visible sprite for his Mimic Job. While serving no functional purpose, it's
   useful for those attempting a Four Job Fiesta type playthrough.


- [Applied Patch] Sprite Touch-ups (Chicken Knife)
   The sprites of all Jobs have many errors and inconsistencies, famously Bartz's right-handed
   swinging sprite as a Blue Mage. Job sprites are nicely tidied up with this patch.


- !MgSword can be used with katana. (Thanks: Chronosplit)


- Ludmeister's Custom Classes allows all Jobs to equip things they weren't able to in the original
   game. For the most part, I've ported these over.

-------------------------------------------------------------------
JOB           | ORIGINAL                 | CUSTOM CLASSES
-------------------------------------------------------------------
Knight        | Knives       Swords      | Swords       Greatswords
              | Greatswords  Shields     | Axes         Hammers
              | Heavy Helms  Light Armor | Shields      Heavy Helms
              | Heavy Armor              | Light Armor  Heavy Armor
-------------------------------------------------------------------
Monk          | Light Helms  Light Armor | Tossblades   Light Helms
              |                          | Light Armor
-------------------------------------------------------------------
Thief         | Knives       Tossblades  | Knives       Ninjablades
              | Light Helms  Light Armor | Swords       Bows
              |                          | Tossblades   Shields
              |                          | Light Helms  Light Armor     
-------------------------------------------------------------------
Dragoon       | Knives       Spears      | Swords       Greatswords
              | Shields      Heavy Helms | Spears       Shields
              | Light Armor  Heavy Armor | Heavy Helms  Light Armor
              |                          | Heavy Armor
-------------------------------------------------------------------
Ninja         | Knives       Ninjablades | Knives       Ninjablades
              | Light Helms  Light Armor | Tossblades   Light Helms
              |                          | Light Armor
Note: Disallowed Katana from OG Custom Classes.
-------------------------------------------------------------------
Samurai       | Knives       Katana      | Katana       Swords
              | Shields      Heavy Helms | Greatswords  Spears
              | Light Armor  Heavy Armor | Tossblades   Shields
              |                          | Heavy Helms  Light Armor
              |                          | Heavy Armor
Note: Disallowed Ninjablades from OG Custom Classes.
-------------------------------------------------------------------
Berserker     | Knives       Axes        | Greatswords  Axes
              | Hammers      Shields     | Hammers      Shields
              | Heavy Helms  Light Armor | Heavy Helms  Light Armor
              | Heavy Armor              | Heavy Armor
-------------------------------------------------------------------
Hunter        | Knives       Bows        | Knives       Spears
              | Light Helms  Light Armor | Axes         Bows
              |                          | Tossblades   Shields
              |                          | Light Helms  Heavy Helms
              |                          | Light Armor
Note: Disallowed Swords from OG Custom Classes.
-------------------------------------------------------------------
Mystic Knight | Knives       Swords      | Knives       Ninjablades
              | Shields      Heavy Helms | Katana       Swords
              | Light Armor  Heavy Armor | Greatswords  Tossblades
              |                          | Shields      Heavy Helms
              |                          | Mage Helms   Light Armor
              |                          | Heavy Armor
-------------------------------------------------------------------
White Mage    | Staves       Mage Helms  | Hammers      Staves
              | Mage Armor               | Shields      Heavy Helms
              |                          | Mage Helms   Heavy Armor
              |                          | Mage Armor
-------------------------------------------------------------------
Black Mage    | Knives       Rods        | Knives       Rods
              | Mage Helms   Mage Armor  | Staves       Mage Helms
              |                          | Mage Armor   Ribbon Gear
-------------------------------------------------------------------
Time Mage     | Knives       Rods        | Knives       Rods
              | Staves       Mage Helms  | Staves       Bells
              | Mage Armor               | Mage Helms   Mage Armor
              |                          | Ribbon Gear
-------------------------------------------------------------------
Summoner      | Knives       Rods        | Knives       Rods
              | Mage Helms   Mage Armor  | Staves       Whips
              |                          | Mage Helms   Mage Armor
              |                          | Ribbon Gear
-------------------------------------------------------------------
Blue Mage     | Knives       Swords      | Knives       Swords
              | Rods         Light Helms | Rods         Whips
              | Mage Helms   Light Armor | Light Helms  Mage Helms
              | Mage Armor               | Light Armor  Mage Armor
Note: Disallowed Katana from OG Custom Classes.
-------------------------------------------------------------------
Red Mage      | Knives       Swords      | Knives       Swords
              | Rods         Staves      | Greatswords  Rods
              | Light Helms  Mage Helms  | Staves       Shields
              | Light Armor  Mage Armor  | Light Helms  Heavy Helms
              |                          | Mage Helms   Light Armor
              |                          | Mage Armor
-------------------------------------------------------------------
Mediator      | Knives       Whips       | Knives       Spears
              | Light Helms  Light Armor | Whips        Heavy Helms
              |                          | Light Helms  Light Armor
-------------------------------------------------------------------
Chemist       | Knives       Staves      | Knives       Hammers
              | Light Helms  Mage Helms  | Staves       Bells
              | Light Armor  Mage Armor  | Light Helms  Mage Helms
              |                          | Light Armor  Mage Armor
-------------------------------------------------------------------
Geomancer     | Knives       Bells       | Knives       Swords
              | Mage Helms   Mage Armor  | Axes         Bells
              |                          | Shields      Light Helms
              |                          | Mage Helms   Light Armor
              |                          | Mage Armor
-------------------------------------------------------------------
Bard          | Knives       Harps       | Knives       Bows
              | Mage Helms   Mage Armor  | Harps        Tossblades
              |                          | Light Helms  Mage Helms
              |                          | Light Armor  Mage Armor
-------------------------------------------------------------------
Dancer        | Knives       Light Helms | Knives       Ninjablades
              | Mage Helms   Light Armor | Spears       Katana
              | Mage Armor   Ribbon Gear | Staves       Whips
              |                          | Tossblades   Light Helms
              |                          | Mage Helms   Light Armor
              |                          | Mage Armor   Ribbon Gear
-------------------------------------------------------------------
Mimic         | Knives       Rods        | Knives       Ninjablades
              | Staves       Tossblades  | Spears       Rods
              | Shields      Heavy Helms | Staves       Tossblades
              | Light Helms  Mage Helms  | Shields      Heavy Helms
              | Heavy Armor  Light Armor | Light Helms  Mage Helms
              | Mage Armor               | Heavy Armor  Light Armor
              |                          | Mage Armor
Note: Disallowed Whips, Bows, Ribbon Gear from OG Custom Classes.
      Allowed Heavy Helms, Heavy Armor like in OG FFV.
-------------------------------------------------------------------


- Did not shuffle around which Jobs are gained at each Crystal as in OG Custom Classes. I wouldn't
   have implemented this even if I were able.


- Did not implement the "global Passive Abilities" feature of OG Custom Classes. It felt
   overpowered.


- Did not recalculate character stats as OG Custom Classes did.


- Did not change how Abilities establish a minimum stat rating, as OG Custom Classes did.


- Did not alter starting equipment as OG Custom Classes did.


- Did not alter any Job's ABP costs as OG Custom Classes did, aside from Blue Mage which was
   changed by my decision.


- Did not alter any shop inventories as OG Custom Classes did.


- Did not modify weapon efficacy as OG Custom Classes did.


- Was unable to properly give Normal !White L.1 and !Black L.1, despite that I badly wanted to. FFV
   doesn't seem to initialize this correctly upon starting a New Game.
====================================================================================================

====================================================================================================
Credits
=======
- Ludmeister: Custom Classes

- HatZen08: Three Slots

- Samurai Goroh: FFV Editor

- Chicken Knife: Sprite Touch-ups

- Tzepish: Always Learning

- Grond: Galuf Mimic Sprite

- Chronosplit: Idea to mark katana as !MgSword OK

...And all you Final Fantasy fans out there!
====================================================================================================