const neutral = 
{
    name: 'Neutral',
    Level: 1,
    stats:
    [   
        {
            health: 10,
            strength: 5,
            magic: 5,
            defense: 5,
            resistance: 5,
            agility: 5,
            luck: 5,
        }
    ],

    levelUp: function (levelsGained)
    {
        this.Level = this.Level + levelsGained

        const min = 0
        const max = 7
    
        let statBoost

        for (let currentLevel = 0; currentLevel < levelsGained; currentLevel++)
        {
            for (let count = 0; count < 3; count++)
            {
                statBoost = Math.floor(Math.random() * (max - min) + 1) + min

                this.stats.forEach(function (stat)
                {
                    if(statBoost == 1)
                    {
                        stat.health = stat.health + 1
                    }
                    else if (statBoost == 2)
                    {
                        stat.strength = stat.strength + 1
                    }
                    else if (statBoost == 3)
                    {
                        stat.magic = stat.magic + 1
                    }
                    else if (statBoost == 4)
                    {
                        stat.defense = stat.defense + 1
                    }
                    else if (statBoost == 5)
                    {
                        stat.resistance = stat.resistance + 1
                    }
                    else if (statBoost == 6)
                    {
                        stat.agility = stat.agility + 1
                    }
                    else if (statBoost == 7)
                    {
                        stat.luck = stat.luck + 1
                    }
                })
            }
        }
    }
}

const fighter = 
{
    // Strength and Defense stat growths are higher than normal; magic and resistance stat growths are lower than normal.
    name: 'Fighter',
    Level: 1,
    stats:
    [   
        {
            health: 10,
            strength: 5,
            magic: 5,
            defense: 5,
            resistance: 5,
            agility: 5,
            luck: 5,
        }
    ],

    levelUp: function (levelsGained)
    {
        this.Level = this.Level + levelsGained

        const min = 0
        const max = 10
    
        let statBoost
        let GrowthBoostS = 1.4
        let GrowthBoostD = 1.1
        let GrowthBoostM = 0.5
        let GrowthBoostR = 0.5

        const statCap = 100
        let statRedistribute

        for (let currentLevel = 0; currentLevel < levelsGained; currentLevel++)
        {
            for (let count = 0; count < 3; count++)
            {
                statBoost = Math.floor(Math.random() * (max - min) + 1) + min

                this.stats.forEach(function (stat)
                {
                    if(statBoost == 1)
                    {
                        stat.health = stat.health + 1
                    }
                    else if (statBoost == 2 || statBoost == 8 || statBoost == 9)
                    {
                        stat.strength = stat.strength + 1 * GrowthBoostS
                    }
                    else if (statBoost == 3)
                    {
                        stat.magic = stat.magic + 1 * GrowthBoostM
                    }
                    else if (statBoost == 4 || statBoost == 10)
                    {
                        stat.defense = stat.defense + 1 * GrowthBoostD
                    }
                    else if (statBoost == 5)
                    {
                        stat.resistance = stat.resistance + 1 * GrowthBoostR
                    }
                    else if (statBoost == 6)
                    {
                        stat.agility = stat.agility + 1
                    }
                    else if (statBoost == 7)
                    {
                        stat.luck = stat.luck + 1
                    }
                    if(stat.strength > statCap) // Redistributes excess stat points to other stats under the stat cap once, for each point that was over the cap.
                    {
                        const min = 0
                        const max = 5

                        statRedistribute =  Math.floor(Math.random() * (max - min) + 1) + min

                        for(let count = 0; count < (stat.magic - statCap); count++)
                        {
                            if(statRedistribute == 1)
                            {
                                stat.health = stat.health + 1
                            }
                            else if (statRedistribute == 2)
                            {
                                stat.strength = stat.magic + 1 * GrowthBoostS
                            }
                            else if (statBoost == 3)
                            {
                                stat.defense = stat.resistance + 1 * GrowthBoostD
                            }
                            else if (statBoost == 4)
                            {
                                stat.agility = stat.agility + 1
                            }
                            else if (statBoost == 5)
                            {
                                stat.luck = stat.luck + 1
                            }
                        }
                        stat.strength = statCap
                    }
                    if(stat.defense > statCap) // Redistributes excess stat points to other stats under the stat cap once, for each point that was over the cap.
                    {
                        const min = 0
                        const max = 5

                        statRedistribute =  Math.floor(Math.random() * (max - min) + 1) + min

                        for(let count = 0; count < (stat.magic - statCap); count++)
                        {
                            if(statRedistribute == 1)
                            {
                                stat.health = stat.health + 1
                            }
                            else if (statRedistribute == 2)
                            {
                                stat.strength = stat.magic + 1 * GrowthBoostS
                            }
                            else if (statBoost == 3)
                            {
                                stat.defense = stat.resistance + 1 * GrowthBoostD
                            }
                            else if (statBoost == 4)
                            {
                                stat.agility = stat.agility + 1
                            }
                            else if (statBoost == 5)
                            {
                                stat.luck = stat.luck + 1
                            }
                        }
                        stat.defense = statCap
                    }
                })
            }
        }
    }
}

const mage = 
{
    // Magic and Resistance stat growths are higher than normal; strength and defense stat growths are lower than normal.
    name: 'Mage',
    Level: 1,
    stats:
    [   
        {
            health: 10,
            strength: 5,
            magic: 5,
            defense: 5,
            resistance: 5,
            agility: 5,
            luck: 5,
        }
    ],

    levelUp: function (levelsGained)
    {
        this.Level = this.Level + levelsGained

        const min = 0
        const max = 10
    
        let statBoost
        let GrowthBoostM = 1.4
        let GrowthBoostR = 1.1
        let GrowthBoostS = 0.5
        let GrowthBoostD = 0.5

        const statCap = 100
        let statRedistribute

        for (let currentLevel = 0; currentLevel < levelsGained; currentLevel++)
        {
            for (let count = 0; count < 3; count++)
            {
                statBoost = Math.floor(Math.random() * (max - min) + 1) + min

                this.stats.forEach(function (stat)
                {
                    if(statBoost == 1)
                    {
                        stat.health = stat.health + 1
                    }
                    else if (statBoost == 2)
                    {
                        stat.strength = stat.strength + 1 * GrowthBoostS
                    }
                    else if (statBoost == 3 || statBoost == 8 || statBoost == 9)
                    {
                        stat.magic = stat.magic + 1 * GrowthBoostM
                    }
                    else if (statBoost == 4)
                    {
                        stat.defense = stat.defense + 1 * GrowthBoostD
                    }
                    else if (statBoost == 5 || statBoost == 10)
                    {
                        stat.resistance = stat.resistance + 1 * GrowthBoostR
                    }
                    else if (statBoost == 6)
                    {
                        stat.agility = stat.agility + 1
                    }
                    else if (statBoost == 7)
                    {
                        stat.luck = stat.luck + 1
                    }
                    if(stat.magic > statCap) // Redistributes excess stat points to other stats under the stat cap once, for each point that was over the cap.
                    {
                        const min = 0
                        const max = 5

                        statRedistribute =  Math.floor(Math.random() * (max - min) + 1) + min

                        for(let count = 0; count < (stat.magic - statCap); count++)
                        {
                            if(statRedistribute == 1)
                            {
                                stat.health = stat.health + 1
                            }
                            else if (statRedistribute == 2)
                            {
                                stat.strength = stat.strength + 1 * GrowthBoostS
                            }
                            else if (statBoost == 3)
                            {
                                stat.defense = stat.defense + 1 * GrowthBoostD
                            }
                            else if (statBoost == 4)
                            {
                                stat.agility = stat.agility + 1
                            }
                            else if (statBoost == 5)
                            {
                                stat.luck = stat.luck + 1
                            }
                        }
                        stat.magic = statCap
                    }
                    if(stat.resistance > statCap) // Redistributes excess stat points to other stats under the stat cap once, for each point that was over the cap.
                    {
                        const min = 0
                        const max = 5

                        statRedistribute =  Math.floor(Math.random() * (max - min) + 1) + min

                        for(let count = 0; count < (stat.magic - statCap); count++)
                        {
                            if(statRedistribute == 1)
                            {
                                stat.health = stat.health + 1
                            }
                            else if (statRedistribute == 2)
                            {
                                stat.strength = stat.strength + 1 * GrowthBoostS
                            }
                            else if (statBoost == 3)
                            {
                                stat.defense = stat.defense + 1 * GrowthBoostD
                            }
                            else if (statBoost == 4)
                            {
                                stat.agility = stat.agility + 1
                            }
                            else if (statBoost == 5)
                            {
                                stat.luck = stat.luck + 1
                            }
                        }
                        stat.resistance = statCap
                    }
                })
            }
        }
    }
}

neutral.levelUp(4)
fighter.levelUp(4)
mage.levelUp(4)

console.log(neutral)
console.log(fighter)
console.log(mage)