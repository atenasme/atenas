module.exports = [
  {
    name: "cn-setar",
    code:
      `
$setGuildVar[cn;$mentionedChannels[1]]

$title[Canal de contagem setado!]
$description[O canal de contagem foi setado para <#$mentionedChannels[1]>!
A partir de agora, apenas neste canal será possível contar os números.]
$color[FF0000]

$footer[Contador de números]
$addTimestamp
$onlyIf[$mentionedChannels[1]!=;{newEmbed:{title:Erro}{description:Você precisa mencionar um canal!}{color:FF0000}}]
$onlyPerms[administrator;{newEmbed:{title:Erro}{description:Você precisa ter a permissão de \`Administrador\` para usar este comando!}{color:FF0000}}]

      `
  },
  {
    name: "$alwaysExecute",
    $if: "old",
    code:
      `
$if[$getChannelVar[number]==$message[1]]
$addCmdReactions[✅]
$setChannelVar[number;$sum[$getChannelVar[number];1]]
$else
$addCmdReactions[❌]
$setChannelVar[number;1]
$title[Contagem resetada!]
$description[A contagem foi resetada! O membro <@$authorID> errou a contagem.]
$color[FF0000]
$addTimestamp
$endif

$onlyIf[$channelID==$getGuildVar[cn];]
$onlyIf[$isNumber[$message[1]]==true;]
      
      
      `
  },
];