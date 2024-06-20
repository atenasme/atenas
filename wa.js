module.exports = [
  {
  name: "start",
  code: `
  $setGlobalUserVar[started;true]
  $title[Your Journey is starting!]
  $description[
  Welcome! You are about to embark on a journey of adventure and discovery. Are you ready to begin?
  Your first character will be Gohan. Select the best slot for him.]
  $color[00ff00]
  $addButton[1;Slot 1;primary;slot1_$authorID;false;]
  $addButton[1;Slot 2;primary;slot2_$authorID;false;]

  $onlyIf[$getGlobalUserVar[started]==false;{newEmbed:{title:OOPS!}{description: You have already started your journey.}{color:ff0000}}]
  `
  },
  {
    type: "interaction",
    prototype: "button",
    code: `

    $setGlobalUserVar[quempegou;]
    $setGlobalUserVar[dquempegou;]
$setGlobalUserVar[qslot1;$getGlobalUserVar[quempegou]]
$setGlobalUserVar[dslot1;$getGlobalUserVar[dquempegou]]
$title[Sucess!]
$description[Your \`$getGlobalUserVar[quempegou]\` has been set at slot 1!
Damage: \`$getGlobalUserVar[dquempegou]\`]
$color[00ff00]

$onlyIf[$getGlobalUserVar[quempegou]!=;{newEmbed:{title:OOPS!}{description:An error has occurred.
Please, slow down or try again later.}{color:ff0000}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:OOPS!}{description:You can't use this button!}{color:ff0000}}{interaction}{ephemeral}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==slot1;]

    `
  },
  {
    type: "interaction",
    prototype: "button",
    code: `

    $setGlobalUserVar[quempegou;]
    $setGlobalUserVar[dquempegou;]
  $setGlobalUserVar[qslot2;$getGlobalUserVar[quempegou]]
  $setGlobalUserVar[dslot2;$getGlobalUserVar[dquempegou]]
  $title[Sucess!]
  $description[Your \`$getGlobalUserVar[quempegou]\` has been set at slot 2!
  Damage: \`$getGlobalUserVar[dquempegou]\`]
  $color[00ff00]

  $onlyIf[$getGlobalUserVar[quempegou]!=;{newEmbed:{title:OOPS!}{description:An error has occurred.
  Please, slow down or try again later.}{color:ff0000}}]

  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:OOPS!}{description:You can't use this button!}{color:ff0000}}{interaction}{ephemeral}]

  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==slot2;]

    `
  },
  {
    name: "resetadminset",
    code: `
    $resetGlobalUserVar[started]
    `
  },
  {
    name: "battle",
    aliases: ["b", "fight"],
    $if: "old",
    code: `
    $if[$getGlobalUserVar[mundo]==1]


    $addButton[1;Boar;danger;boar_$authorID;false;🐗]

    $addButton[1;Hippo;secondary;hippo_$authorID;false;🦛]

    $addButton[1;Peacock;success;peacock_$authorID;false;🦚]

    $title[Battle]
    $description[Who do you want to battle against? 
Peacock: 50 Life | 100~200 Money 

Hippo: 100 Life | 300~500 Money

Boar: 500 Life | 2000~4000 Money ]

$color[2ed22e]



$endif

$if[$getGlobalUserVar[mundo]==2]

$addButton[1;Tyrannosaurus;danger;tyrannosaurus_$authorID;false;🦖]

$addButton[1;Whale Shark;secondary;whaleshark_$authorID;false;🦈]

$addButton[1;Mandrill;success;mandrill_$authorID;false;🐒]

    $title[Battle]
    $description[Who do you want to battle against? 
Mandrill: 100 Life | 500~1.250 Money 

Whale Shark: 350 Life | 1.500~3.000 Money

Mafia Boss: 2.500 Life | 15.000~25.000 Money ]

$color[2ed22e]

$endif

$onlyIf[$getGlobalUserVar[started]==true;{newEmbed:{title:OOPS!}{description:You have not started your journey yet.}{color:ff0000}}]

    `
  },
  {
    type: "interaction",
    prototype: "button",
    $if: "old",
    code: `
$if[$advancedTextSplit[$interactionData[customId];_;1]==peacock]

$setGlobalUserVar[quemb;Peacock]
$setGlobalUserVar[vquemb;50]
$setGlobalUserVar[moneyquemb;$random[100;200]]



$interactionUpdate[;{newEmbed:{title:Battle}{description:You are fighting against the Peacock!
He has 50 life and will give you $random[100;200] money.
Attack him!}{color:2ed22e}};{actionRow:{button:Attack:secondary:attack_$authorID:false:⚔️}}]

$endif

$if[$advancedTextSplit[$interactionData[customId];_;1]==hippo]

$setGlobalUserVar[quemb;Hippo]
$setGlobalUserVar[vquemb;100]
$setGlobalUserVar[moneyquemb;$random[300;500]]



$interactionUpdate[;{newEmbed:{title:Battle}{description:You are fighting against the Hippo!
He has 100 life and will give you $random[300;500] money.
Attack him!}{color:2ed22e}};{actionRow:{button:Attack:secondary:attack_$authorID:false:⚔️}}]

$endif

$if[$advancedTextSplit[$interactionData[customId];_;1]==boar]

$setGlobalUserVar[quemb;Boar]
$setGlobalUserVar[vquemb;500]
$setGlobalUserVar[moneyquemb;$random[2000;4000]]



$interactionUpdate[;{newEmbed:{title:Battle}{description:You are fighting against the Boar!
He has 500 life and will give you $random[2000;4000] money.
Attack him!}{color:2ed22e}};{actionRow:{button:Attack:secondary:attack_$authorID:false:⚔️}}]

$endif

$if[$advancedTextSplit[$interactionData[customId];_;1]==mandrill]

$setGlobalUserVar[quemb;Mandrill]
$setGlobalUserVar[vquemb;100]
$setGlobalUserVar[moneyquemb;$random[500;1250]]



$interactionUpdate[;{newEmbed:{title:Battle}{description:You are fighting against the Peacock!
He has 50 life and will give you $random[100;200] money.
Attack him!}{color:2ed22e}};{actionRow:{button:Attack:secondary:attack_$authorID:false:⚔️}}]

$endif

$if[$advancedTextSplit[$interactionData[customId];_;1]==whaleshark]

$setGlobalUserVar[quemb;Whale Shark]
$setGlobalUserVar[vquemb;350]
$setGlobalUserVar[moneyquemb;$random[1500;3000]]



$interactionUpdate[;{newEmbed:{title:Battle}{description:You are fighting against the Whale Shark!
He has 100 life and will give you $random[300;500] money.
Attack him!}{color:2ed22e}};{actionRow:{button:Attack:secondary:attack_$authorID:false:⚔️}}]

$endif

$if[$advancedTextSplit[$interactionData[customId];_;1]==tyrannosaurus]

$setGlobalUserVar[quemb;Tyrannosaurus]
$setGlobalUserVar[vquemb;2500]
$setGlobalUserVar[moneyquemb;$random[15000;25000]]



$interactionUpdate[;{newEmbed:{title:Battle}{description:You are fighting against the Tyrannosaurus!
He has 500 life and will give you $random[2000;4000] money.
Attack him!}{color:2ed22e}};{actionRow:{button:Attack:secondary:attack_$authorID:false:⚔️}}]

$endif







    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:OOPS!}{description:You can't use this button!}{color:ff0000}}{interaction}{ephemeral}]
    `
  },
  {
    type: "interaction",
    prototype: "button",
    $if: "old",
    code: `
$if[$sub[$getGlobalUserVar[vquemb];$sum[$getGlobalUserVar[dslot1];$getGlobalUserVar[dslot2];$getGlobalUserVar[dslot3];$getGlobalUserVar[dslot4];$getGlobalUserVar[dslot5]]]<=0]

$setGlobalUserVar[vquemb;0]
$setGlobalUserVar[moneyquemb;0]
$setGlobalUserVar[quemb;]
$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$getGlobalUserVar[moneyquemb]]]

$interactionUpdate[;{newEmbed:{title:Battle}{description:You won the battle against the $getGlobalUservar[quemb]!
You got $getGlobalUserVar[moneyquemb] money!}{color:2ed22e}}]

$color[2ed22e]

$else

$setGlobalUserVar[vquemb;$sub[$getGlobalUserVar[vquemb];$sum[$getGlobalUserVar[dslot1];$getGlobalUserVar[dslot2];$getGlobalUserVar[dslot3];$getGlobalUserVar[dslot4];$getGlobalUserVar[dslot5]]]]

$interactionUpdate[;{newEmbed:{title:Battle}{description:You attacked the $getGlobalUservar[quemb]
He has $sub[$getGlobalUserVar[vquemb];$sum[$getGlobalUserVar[dslot1];$getGlobalUserVar[dslot2];$getGlobalUserVar[dslot3];$getGlobalUserVar[dslot4];$getGlobalUserVar[dslot5]]] life left.}{color:2ed22e}};{actionRow:{button:Attack:secondary:attack_$authorID:false:⚔️}}]

$endif






$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==attack;]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:
{title:OOPS!}{description:You can't use this button!}{color:ff0000}}{interaction}{ephemeral}]
    `
  },
  {
    name: "ev",
    code: `
    $eval[$message]
    $onlyIf[$authorID==682643732545536000;]
    `
  },
  {
    name: "status",
    aliases: ["st", "stats"],
    code: `

    $title[Status]
$description[
Money: \`$getGlobalUserVar[money]\`

* **Slot 1
 * Character: $getGlobalUserVar[qslot1;$authorID]
 * Damage: $getGlobalUserVar[dslot1;$authorID]

* Slot 2
 * Character: $getGlobalUserVar[qslot2;$authorID]
 * Damage: $getGlobalUserVar[dslot2;$authorID]

* Slot 3
 * Character: $getGlobalUserVar[qslot3;$authorID]
 * Damage: $getGlobalUserVar[dslot3;$authorID]

* Slot 4
 * Character: $getGlobalUserVar[qslot4;$authorID]
 * Damage: $getGlobalUserVar[dslot4;$authorID]

* Slot 5
 * Character: $getGlobalUserVar[qslot5;$authorID]
 * Damage: $getGlobalUserVar[dslot5;$authorID]**

* World: $getGlobalUserVar[mundo]]

$color[2ed22e]

`
  },
  {
    name: "roll",
    aliases: ["r", "spin"],
    $if: "old",
    code: `



$if[$getGlobalUserVar[money]<$getGlobalUserVar[ds]]
$title[OOPS!]

$description[You don't have enough money to spin!
You need $getGlobalUserVar[ds] money to spin.]

$color[ff0000]



$else

$title[Spin!]
$description[You rolled $getGlobalUserVar[quempegou]!
He/she has $getGlobalUserVar[dquempegou] damage.
Rarity: $getGlobalUservar[rar]]

$color[2ed22e]

  $addButton[1;Slot 2;primary;slot2_$authorID;false;]
  $addButton[1;Slot 1;primary;slot1_$authorID;false;]




$if[$getGlobalUserVar[mundo]==1]

$if[$getGlobalUserVar[chance]>=1&&$getGlobalUserVar[chance]<=500]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$getGlobalUserVar[ds]]]
$setGlobalUserVar[quempegou;Cricket]
$setGlobalUserVar[dquempegou;5]
$setGlobalUserVar[rar;Common]

$endif

$if[$getGlobalUserVar[chance]>=501&&$getGlobalUserVar[chance]<=700]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$getGlobalUserVar[ds]]]
$setGlobalUserVar[quempegou;Kangaroo]
$setGlobalUserVar[dquempegou;10]
$setGlobalUserVar[rar;Rare]

$endif

$if[$getGlobalUserVar[chance]>=701&&$getGlobalUserVar[chance]<=850]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$getGlobalUserVar[ds]]]
$setGlobalUserVar[quempegou;Ox]
$setGlobalUserVar[dquempegou;15]
$setGlobalUserVar[rar;Epic]

$endif

$if[$getGlobalUserVar[chance]>=851&&$getGlobalUserVar[chance]<=970]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$getGlobalUserVar[ds]]]
$setGlobalUserVar[quempegou;Bison]
$setGlobalUserVar[dquempegou;20]
$setGlobalUserVar[rar;Legendary]

$endif

$if[$getGlobalUserVar[chance]>=971&&$getGlobalUserVar[chance]<=995]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$getGlobalUserVar[ds]]]
$setGlobalUserVar[quempegou;Rhino]
$setGlobalUserVar[dquempegou;30]
$setGlobalUserVar[rar;Mythic]

$endif 

$if[$getGlobalUserVar[chance]>=996&&$getGlobalUserVar[chance]<=1000]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$getGlobalUserVar[ds]]]
$setGlobalUserVar[quempegou;Gorilla]
$setGlobalUserVar[dquempegou;100]
$setGlobalUserVar[rar;Secret]

$endif





$endif

$if[$getGlobalUserVar[mundo]==2]

$if[$getGlobalUserVar[chance]>=1&&$getGlobalUserVar[chance]<=500]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$getGlobalUserVar[ds]]]
$setGlobalUserVar[quempegou;Moth]
$setGlobalUserVar[dquempegou;10]
$setGlobalUserVar[rar;Common]

$endif

$if[$getGlobalUserVar[chance]>=501&&$getGlobalUserVar[chance]<=700]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$getGlobalUserVar[ds]]]
$setGlobalUserVar[quempegou;Toucan]
$setGlobalUserVar[dquempegou;20]
$setGlobalUserVar[rar;Rare]

$endif

$if[$getGlobalUserVar[chance]>=701&&$getGlobalUserVar[chance]<=850]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$getGlobalUserVar[ds]]]
$setGlobalUserVar[quempegou;Puppy]
$setGlobalUserVar[dquempegou;30]
$setGlobalUserVar[rar;Epic]

$endif

$if[$getGlobalUserVar[chance]>=851&&$getGlobalUserVar[chance]<=970]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$getGlobalUserVar[ds]]]
$setGlobalUserVar[quempegou;Chameleon]
$setGlobalUserVar[dquempegou;40]
$setGlobalUserVar[rar;Legendary]

$endif

$if[$getGlobalUserVar[chance]>=971&&$getGlobalUserVar[chance]<=995]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$getGlobalUserVar[ds]]]
$setGlobalUserVar[quempegou;Snapping Turtle]
$setGlobalUserVar[dquempegou;65]
$setGlobalUserVar[rar;Mythic]

$endif 

$if[$getGlobalUserVar[chance]>=996&&$getGlobalUserVar[chance]<=1000]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$getGlobalUserVar[ds]]]
$setGlobalUserVar[quempegou;Dragon]
$setGlobalUserVar[dquempegou;150]
$setGlobalUserVar[rar;Secret]

$endif

$endif


$endif

$setGlobalUserVar[chance;$random[1;1000]]

$if[$getGlobalUserVar[mundo]==1]

$setGlobalUserVar[ds;250]

$endif

$if[$getGlobalUserVar[mundo]==2]

$setGlobalUserVar[ds;2000]

$endif


    `
  },
  {
    type: "interaction",
    prototype: "button",
    code: `


$awaitExecute[roll]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==spin;]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:OOPS!}{description:You can't use this button!}{color:ff0000}}{interaction}{ephemeral}]
`
  },
  {
    name: "world",
    aliases: ["w"],
    code: `

    $title[Worlds!]
    $description[
* What are Worlds?
 * They are a way to get more money and stronger Pets.
* How to get Worlds?
 * You can get Worlds by clicking at the button below.]

$color[2ed22e]
$addButton[1;World;success;worlds_$authorID;false;🌎]

$onlyIf[$getGlobalUserVar[started]==true;{newEmbed:{title:OOPS!}{description:You have not started your journey yet.}{color:ff0000}}]

    `
  },
  {
    type: "interaction",
    prototype: "button",
    $if: "old",
    code: `
$setGlobalUserVar[mundo;$sum[$getGlobalUserVar[mundo];1]]
$setGlobalUserVar[mundomax;$sum[$getGlobalUserVar[mundomax];1]]
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$getGlobalUserVar[dm]]]

$interactionUpdate[;{newEmbed:{title:Worlds!}{description:You got a new World!
You have $getGlobalUserVar[mundomax] Worlds Unlocked.}{color:2ed22e}}]




$onlyIf[$getGlobalUserVar[money]>=$getGlobalUserVar[dm];{newEmbed:{title:OOPS!}{description:You don't have enough money to buy a new World!
You need \`$getGlobalUserVar[dm]\` money to buy a new World.}{color:ff0000}}]

$if[$getGlobalUserVar[mundomax]==1]
$setGlobalUserVar[dm;20000]
$endif

$if[$getGlobalUserVar[mundomax]==2]
$setGlobalUserVar[dm;250000]
$endif

$if[$getGlobalUserVar[mundomax]==3]
$setGlobalUserVar[dm;350000]
$endif

$if[$getGlobalUserVar[mundomax]==4]
$setGlobalUserVar[dm;10000000]
$endif

$onlyIf[$getGlobalUserVar[mundomax]<5;{newEmbed:{title:OOPS!}{description:You have reached the maximum amount of Worlds!}{color:ff0000}}{interaction}{ephemeral}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:OOPS!}{description:You can't use this button!}{color:ff0000}}{interaction}{ephemeral}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==worlds;]
    `
  },
  {
    name: "teleport",
    aliases: ["tp"],
    code: `
$setGlobalUserVar[mundo;$message[1]]
$title[Teleport]
$description[
You have been teleported to World $message[1]!]
$color[2ed22e]




$onlyIf[$message[1]<=5;{newEmbed:{title:OOPS!}{description:You can't teleport to World $message[1]!
You can only teleport to Worlds 1~5.}{color:ff0000}}]
$onlyIf[$message[1]>=1;{newEmbed:{title:OOPS!}{description:You can't teleport to World $message[1]!
You can only teleport to Worlds 1~5.}{color:ff0000}}]

$onlyIf[$message[1]<=$getGlobalUserVar[mundomax];{newEmbed:{title:OOPS!}{description:You can't teleport to World $message[1]!
You can only teleport to Worlds 1~$getGlobalUserVar[mundomax].}{color:ff0000}}]

$onlyIf[$isNumber[$message[1]]==true;{newEmbed:{title:OOPS!}{description:The World that you want to teleport to must be a number!}{color:ff0000}}]

$onlyIf[$message[1]!=;{newEmbed:{title:OOPS!}{description:You must specify a World to teleport to!}{color:ff0000}}]


`
  },
  {
    name: "upgrades",
    aliases: ["up", "upgrade"],
    code: `
$addButton[2;Cost: 500.000;secondary;inative2;true]
$addButton[2;Slot 4;primary;uppslot4_$authorID;false]

$addButton[1;Cost: 20.000;secondary;inative;true]
$addButton[1;Slot 3;primary;uppslot3_$authorID;false]   
$title[Upgrades]
$description[
* What are Upgrades?
 * They are a way to your journey be more easy, but at a cost.
* How to buy Upgrades?
 * You can buy Upgrades by clicking at the button below.]
$color[2ed22e]

`
  },
  {
    type: "interaction",
    prototype: "button",
    code: `
$setGlobalUserVar[gp1;true]
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];20000]]
$interactionUpdate[;{newEmbed:{title:Upgrades}{description:You bought the Slot 3 Upgrade!
Now you can equip more Pets!}{color:2ed22e}}]


$onlyIf[$getGlobalUserVar[money]>=20000;{newEmbed:{title:OOPS!}{description:You don't have enough money to buy this Upgrade!
You need \`20.000\` money to buy this Upgrade.}{color:ff0000}}{interaction}{ephemeral}]

$onlyIf[$getGlobalUserVar[gp2]==false;{newEmbed:{title:OOPS!}{description:You already bought this Upgrade!}{color:ff0000}}{interaction}{ephemeral}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:OOPS!}{description:You can't use this button!}}{interaction}{ephemeral}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==uppslot3;]
`
  },
  {
    type: "interaction",
    prototype: "button",
    code: `
  $setGlobalUserVar[gp2;true]
  $setGlobalUserVar[money;$sub[$getGlobalUserVar[money];500000]]
  $interactionUpdate[;{newEmbed:{title:Upgrades}{description:You bought the Slot 4 Upgrade!
  Now you can equip more Pets!}{color:2ed22e}}]


  $onlyIf[$getGlobalUserVar[money]>=500000;{newEmbed:{title:OOPS!}{description:You don't have enough money to buy this Upgrade!
  You need \`500.000\` money to buy this Upgrade.}{color:ff0000}}{interaction}{ephemeral}]


$onlyIf[$getGlobalUserVar[gp2]==false;{newEmbed:{title:OOPS!}{description:You already bought this Upgrade!}{color:ff0000}}{interaction}{ephemeral}]

$onlyIf[$getGlobalUserVar[gp1]==false;{newEmbed:{title:OOPS!}{description:You need ti buy the Slot 3 Upgrade first!}{color:ff0000}}{interaction}{ephemeral}]

  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:OOPS!}{description:You can't use this button!}}{interaction}{ephemeral}]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==uppslot4;]
  `
  },
  {
    name: "help",
    aliases: ["h", "commands", "command"],
    code: `
$title[Help]
$description[
* Battle
 * \`battle\` - Battle agains Pets to win money!
 * Aliases? \`b, fight,\`

* Shop
 * \`roll\` - Roll a random Pet to do more damage agains yours enemies!
 * Aliases? \`r\`

 * \`upgrades\` - Buy Upgrades to your journey!
 * Aliases? \`up, upgrade\`

* Inventory
 * \`inventory\` - See your Inventory, who shows your team and your money!
 * Aliases? \`inv, status, stats\`

* Worlds
 * \`world\` - Get a new World to your journey!
 * Aliases? \`w\`


 To start your journey, use \`&start\`!
]


$color[2ed22e]
`
  },
];