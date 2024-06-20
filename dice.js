module.exports = [
  {
    name: "d",
    nonPrefixed: true,
    aliases: ["1d"],
    $if: "old",
    code: `
    
    $if[$checkContains[$message;+;*;-;/]==true]
\` $math[$get[dadoresult]$get[bonus]] \` ⭠ **\[$get[dadoresult]\]** __$message[1]__
$reply
  
$let[bonus;$replaceText[$replaceText[$message[1];,;.];$splitText[1];]]
  $let[dadoresult;$random[1;$get[dado];d;]]

$if[$checkContains[$message[1];1d]==true]
$let[dado;$replaceText[$splitText[1];1d;]]

$else
$let[dado;$replaceText[$splitText[1];d;]]
$endif


$textSplit[$advancedReplaceText[$message[1];+;//;-;//;*;//;/;//];//]


    

$else
\` $get[dadoresult] \` ⭠ **\[$get[dadoresult]\]**
$reply

$let[dadoresult;$random[1;$get[dado]]]
$if[$checkContains[$message[1];1d]==true]
$let[dado;$replaceText[$message[1];1d;]]
$else
$let[dado;$replaceText[$message[1];d;]]
$endif

$endif

$onlyIf[$charCount[$message[1];d]==1;]

$onlyIf[$and[$message!=d;$message!=dd;$message!=ddd;$message!=dddd;$message!=ddddd;$messaget!=dddddd;$message!=ddddddd;$message!=dddddddd;$message!=ddddddddd;$message!=dddddddddd;$message!=ddddddddddd;$message!=dddddddddddd;$message!=dddddddddddd]==true;]

$onlyIf[$checkContains[$message[1];a;b;c;e;f;g;h;i;j;k;l;m;n;o;p;q;r;s;t;u;v;w;x;y;z;A;B;C;D;E;F;G;H;I;J;K;L;M;N;O;P;Q;R;S;T;U;V;W;X;Y;Z]==false;]

$onlyIf[$checkContains[$message[1];1;2;3;4;5;6;7;8;9;0;-;*;+;/]==true;]

$onlyIf[$getChannelVar[blacklist]==false;{newEmbed: {title:❌ | Error}{description:Este canal está na blacklist!}{color:ff0000}}]

$onlyIf[$getGuildVar[dadoativado]==true;]
    `
  },
  {
    name: "ativar-dado",
    $if: "old",
    code: `
    $if[$getGuildVar[dadoativado]==false]
    $setGuildVar[dadoativado;true]

    ativado! $reply
    $else
    $setGuildVar[dadoativado;false]
    desativado! $reply
    $endif
    $onlyIf[$clientOwnerIDs==$authorID;]
    `
  }
];