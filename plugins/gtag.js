/////////////////create mahesh///////////////////////////
const {readEnv}=require('../lib/database');const{cmd,commands}=require('../command');const sensitiveData=require('../dila_md_licence/a/b/c/d/dddamsbs');cmd({pattern:"tagall",desc:"Tag all members in the group with a custom message",isGroup:true,isOwner:true,react:"👺",filename:__filename},async(conn,mek,m,{from,body,isGroup,isOwner,isAdmins,groupAdmins,isBotAdmins})=>{try{const config=await readEnv();if(isGroup&&(isOwner||isAdmins)){const messageText=body.trim().split(/\s+/).slice(1).join(' ')||"Attention everyone!";if(!isBotAdmins&&!isOwner)return await conn.sendMessage(from,{text:"I need to be an admin to tag everyone!"});const groupMetadata=await conn.groupMetadata(from);const groupMembers=groupMetadata.participants;const mentions=groupMembers.map(member=>member.id);const tags=groupMembers.map(member=>`@${member.id.split('@')[0]}`).join('\n');let tagMessage=`${messageText}\n\n${sensitiveData.laksidu}\n${tags}`;const maxMessageLength=4096;while(tagMessage.length>maxMessageLength){const splitIndex=tagMessage.lastIndexOf('\n',maxMessageLength);await conn.sendMessage(from,{text:tagMessage.slice(0,splitIndex),mentions});tagMessage=tagMessage.slice(splitIndex+1)}await conn.sendMessage(from,{text:tagMessage,mentions})}else await conn.sendMessage(from,{text:"You need to be an admin or the bot owner to use this command!"})}catch(e){console.error(`Error in tagall: ${e.message}`)}});
