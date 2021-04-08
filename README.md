# RPG Leveling System

**Basic Info:** 

This program is meant to represent an RPG leveling system, which should easy to modify and scale. The program was written in JavaScript, however, it can be copied to other languages (Java, C, Python, etc.) by making tweaks to its code.

Additonally, this program does not have to be used as an RPG leveling system exclusively, and can be modfied into any program with an intended function of random (or controlled) number distribution and/or mathematical operations, to be stored in variables that determined by specific criteria.

**How it Works:**

This leveling system works with respect to seven (7) stats:

Health: x

Strength: x

Magic: x

Defense: x

Resistance: x

Agility: x

Luck: x

'x' is variable representing a numeric value from one (1) to one hundred (100), however, the base stats and stat cap of a unit can be changed to any value(s).
Stats can be added or removed as the user desires, by adding or removing an object from the stat array. The level cap for any unit is one hundred (100) and once this level has been reached, it is intendted to be impossible to level-up further, however, this cap can be changed to any value.

**Stat Point Distribution:**

Each time a level-up occurs, a total of three (3) stat points are gained and then randomly distrubted to any stat.

Thus per each level-up, there is a chance that:

One stat can increase by three (3) points.
Two stats can increase; one stat by two (points) and another stat by one (1) point.
Three stats can increase by one (1) point each.

*The amount of stat points gained each level can be changed by increasing the range defined in the for loop of the forEach method for the stat array.*

**Stat Point Probability:**

There is a 1/15 (0.66%) chance of any stat increasing by three (3) points.

There is a 3/15 (20%) chance of any stat increasing by two (2) points and another stat increasing by one (1) point.

There is a 10/15 (66%) of three different stats increasing by one (1) point.

However, each unit has a growth rate which affects the chances of increasing a specfic stat by three (3) points.

**Units and Growth Rates:**

Included are three (3) basic RPG units described in this program, a neutral unit, a figther unit, and a mage unit.

The neutral unit gains all stat points at random and does not experience any special growth rates.

The fighter unit has an increased chance of gaining points in strength and defense, and experiences a growth multiplier of 1.4 and 1.1 for both stats respectively. This unit also a growth multipler of 0.5 for both magic and resistance.

The mage unit has an increased chance of gaining points in magic and resistance, and experiences a growth multiplier of 1.4 and 1.1 for both stats respectively. This unit also a growth multipler of 0.5 for both strength and defense.

*The growth mutlipliers can easily be changed for any unit by adding or removing them from the levelUp function.*

