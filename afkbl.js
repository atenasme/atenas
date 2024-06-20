module.exports = [
  {
    name: "afk",
    code: `
    $setGlobalUserVar[afk;true]
    $setGlobalUserVar[motivoafk;$message]
    $title[1;💤 | AFK]
    $description[1;Você entrou em modo AFK!]
    $addField[1;Motivo:;$message]
    $color[1;4040ff]
    $footer[1;Utilizado por $username]
    $addTimestamp[1]
    $onlyIf[$getGlobalUserVar[afk]==false;{newEmbed: {title:❌ | Error} {description:Você já está em modo AFK!
Se deseja sair do modo AFK, aperte no botão abaixo.} {color:ff0000} {footer:Utilizado por $username} {timestamp}}{actionRow:{button:Sair do modo AFK:secondary:sairafk-$authorID:false}}]
    $onlyIf[$message!=;{newEmbed: {title:❌ | Erro}{description:Você precisa escrever o motivo do AFK!}{color:ff0000}}]
    $onlyIf[$getChannelVar[blacklist]==false;{newEmbed: {title:❌ | Error}{description:Este canal está na blacklist!}{color:ff0000}}]
    `
  },
  {
    name: "$alwaysExecute",
    code: `
    $title[💤 | AFK]
    $description[O usuário mencionado está AFK!]
    $addField[Motivo:;$getGlobalUserVar[motivoafk;$mentioned[1]]]
    $addField[Usuário Mencionado:;<@$mentioned[1]>]
    $color[4040ff]

    $onlyIf[$isMentioned[$mentioned[1]]==true;]
    $onlyIf[$getGlobalUserVar[afk;$mentioned[1]]==true;]
    `
  },
  {
    name: "$alwaysExecute",
    code: `
    $setGlobalUserVar[motivoafk;]
    $setGlobalUserVar[afk;false]
    $title[💤 | AFK]
    $description[Você saiu do modo AFK!
Caso queira que isso não aconteça, use o comando \`d!desativar\`!]
    $color[4040ff]
    $onlyIf[$getGlobalUserVar[desativarafk]==false;]
    $onlyIf[$getGlobalUserVar[afk]==true;]
    `
  },
  {
    name: "desativar",
    code: `
    $setGlobalUserVar[desativarafk;true]
    $title[💤 | AFK]
    $description[Você desativou o modo AFK Automático!
Caso queira ativalo novamente, use o comando \`d!ativar\`!]
$onlyIf[$getGlobalUserVar[desativarafk]==false;{newEmbed: {title:❌ | Error}{description:Você já desativou o modo AFK Automático!}}]
    $onlyIf[$getChannelVar[blacklist]==false;{newEmbed: {title:❌ | Error}{description:Este canal está na blacklist!}{color:ff0000}}]
    `
  },
  {
    name: "ativar",
    code: `
    $setGlobalUserVar[desativarafk;false]
    $title[💤 | AFK]
    $description[Você ativou o modo AFK Automático!
Caso queira desativalo novamente, use o comando \`d!desativar\`!]
$onlyIf[$getGlobalUserVar[desativarafk]==true;{newEmbed: {title:❌ | Error}{description:Você já ativou o modo AFK Automático!}}]

$onlyIf[$getChannelVar[blacklist]==false;{newEmbed: {title:❌ | Error}{description:Este canal está na blacklist!}{color:ff0000}}]
    `
  },
  {
    type: "interaction",
    prototype: "button",
    code:`
    $setGlobalUserVar[afk;false]
    $setGlobalUserVar[motivoafk;]
    $interactionUpdate[;{newEmbed: {title:💤 | AFK}{description:Você saiu do modo AFK!}{color:4040ff}}]
    $onlyIf[$getGlobalUserVar[afk]==true;{newEmbed: {title:❌ | Error}{description:Você não está em modo AFK!}}]

$onlyIf[$interactionData[author.id]==$advancedTextSplit[$interactionData[customId];-;2];
{newEmbed: {title:❌ | Error}{description:Você não pode utilizar este botão, apenas <@$advancedTextSplit[$interactionData[author.id]]>!}}{ephemeral}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];-;1]==sairafk;]

    `
  },
  {
    name: "blacklist",
    aliases: ["bl"],
    code: `
    $setChannelVar[blacklist;true;$mentionedChannels[1]]
    $title[1;🚫 | Blacklist]
    $description[O canal <#$mentionedChannels[1]> foi adicionado a blacklist! 
Agora nenhum usuário pode usar meus comandos neste canal!]
    $color[1;ff0000]
    $footer[1;Utilizado por $username]
    $addTimestamp[1]
    $onlyPerms[managechannels;{newEmbed: {title:❌ | Error}{description:Você não tem permissão para utilizar este comando!}{color:ff0000}}]

    $onlyIf[$getChannelVar[blacklist]==false;{newEmbed: {title:❌ | Error}{description:Este canal já está na blacklist!}{color:ff0000}}]

    $onlyIf[$isMentioned[$mentionedChannels[1]]==true;{newEmbed: {title:❌ | Error}{description:Você precisa mencionar um canal!}{color:ff0000}}]
    `
  },
  {
    name: "unblacklist",
    aliases: ["unbl", "ubl"],
    code: `
    $setChannelVar[blacklist;false;$mentionedChannels[1]]
    $title[1;🚫 | Blacklist]
    $description[O canal <#$mentionedChannels[1]> foi removido da blacklist!
Agora todos os usuários podem usar meus comandos neste canal!]
    $color[1;ff0000]
    $footer[1;Utilizado por $username]
    $addTimestamp[1]

    $onlyPerms[managechannels;{newEmbed: {title:❌ | Error}{description:Você não tem permissão para utilizar este comando!}{color:ff0000}}]

    $onlyIf[$getChannelVar[blacklist]==true;{newEmbed: {title:❌ | Error}{description:Este canal não está na blacklist!}{color:ff0000}}]

    $onlyIf[$isMentioned[$mentionedChannels[1]]==true;{newEmbed: {title:❌ | Error}{description:Você precisa mencionar um canal!}{color:ff0000}}]

    `
  },
];