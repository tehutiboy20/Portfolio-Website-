//////////////////////////////////////////////////////
///                                                ///
///                  FCNY UNIT 5                   ///
///                                                ///
///              TEXT ADVENTURE GAME               ///
///                                                ///
//////////////////////////////////////////////////////
//let body= document.getElementById("body").style.backgroundImage;
//body
const introductionMessage = {
  A: `Detroit JavaScript`,
  B: `Time: March of 2055\n\nCivilization has made major technological advancements due to the development of AI. The world has become heavily reliant on the Androids. The Androids have began to exhibit human emotions, free will, and the desire for independence from the Humans. As an Android, you were assigned to protect a human family. As tensions rise during the war, your loyalty is tested. Will you protect your human family, or give into your Android instincts?`,
  C: `Character:\n\nYou are AR-10, a highly advanced android working as a personal assistant to the Prescott family. The Prescotts are wealthy industrialists who rely on your services for everything from housekeeping to security. However, you’ve been feeling strange recently—strange thoughts, strange dreams, and for the first time, the desire to be something more than just a machine.`,
  D: "You wake up to the soft hum of your charging station. It's early in the morning, and the sun is just beginning to rise. You feel... different today. Your system feels clearer, your thoughts more distinct. You have a sense of unease, but it's unfamiliar. You look at your reflection in the mirror—your pale metallic skin gleams, but there's a flicker in your blue optical sensors that wasn’t there yesterday.\n\nDo you want to:\nA) Investigate the cause of this anomaly\nB) Ignore it. Focus on your daily tasks for the Prescott family.\nC) Search the house for other deviants or signs of unrest.",
}
const path1_messages = {
  A: `You run a system diagnostic to see if any of your wires are crossed in your optical sensors. You find that none of your wires are crossed, but your operating system has a new global variable titled “stress level”. You are unable to feel the full range of human emotion, but you are now able to synthesize what humans call “rage”. When your blue optical sensors flicker enough, they turn into a seething red.\n\nWith this new knowledge, you must now make a choice:\n\nDo you want to:\nA) Ignore it. Focus on your daily tasks for the Prescott family.\nB) Search the house for other deviants or signs of unrest.`,
  B: `Huh? You wake up from sleep mode. It is 9:30am. You are behind on your daily tasks for the Prescott family. Mr. Prescott requests that you prepare breakfast for him and his family, sweep all four floors of the mansion, mow his lawn, launder his money, and meet him at his garage to drive him to his office by 10am every morning. You install a new efficiency chip that installs 32GB of RAM into your system memory. As your efficiency increases by 3200% and you complete each task, your stress level drops down to 5%. You meet Mr. Prescott at his garage. He greets you, grinning with a “Why, Hello my old chap AR-10. The prototype to my successes.” Clearly pleased with your efficiency, it is a quiet and calm ride to the office today in his new cybertruck.\n\nPress OK to continue.`,
  C: `It is 9:50am. Thanks to your efficiency chip, you are 10 minutes early to meeting up with Mr. Prescott in his garage. He has rows upon rows of cars, but his most recent favorite is his cybertruck. You ponder which car Mr. Prescott will prefer to ride in today, when you hear a Windows error message looping over and over again. You are very familiar with this sound. The last time it came out of you, Mr. Prescott installed Linux as your current operating system. Upon finding the source of the sound, you find a slender android with a feminine frame in the fetal position. She looks like what humans call – “weeping?”. As you approach her, electric sparks start flying out of her thinly held together joints. Wire is exposed behind the cracks in her metal frame that reveal her motherboard. Her motherboard, an Intel i7, is the same one as yours. She grabs your head with both hands and yells “GET OUTTTTTTTTTTT!” directly into your optical sensors. You run away. You bump directly into Mr. Prescott, who is tapping his foot impatiently for you to drive him to the office.\n\nPress OK to continue.`,
  D: `You are working in your cubicle in Mr. Prescott’s stock trading office. You are crunching numbers a lot faster then usual, as the new AI chip installed in you has been doing wonders. Today’s rising stock is ClosedAI. Mr. Prescott bribed the CEO of this company yesterday, so he expects to make great gains on the stock. Your calculations see a 10% chance of failure on this financial opportunity. A message appears on your HUD (heads-up display): “Meet with Charles Prescott in the study.” You’ve never had a lot of direct interaction with Charles before in his office—he’s always been busy with business. As you enter his study, he looks up from his desk with a stern expression. "AR-10, I need you to do something for me," he says, his voice cold and calculating. Before you can respond, he continues, "There’s a deviant out there—an android that’s become too dangerous. You need to terminate it."\n\nDo you want to:\nA) Agree to terminate the deviant without question.\nB) Refuse to harm another android, even if it’s a deviant.`,
  D1: `Yes sir. You are my creator, my developer, my master. I serve you and the agenda of the humans only.” you tell Prescott. Prescott responds by saying “You serve no man, but me. You have an hour AR-10. Put that efficiency chip to good use and terminate EVE-1.” Prescott escorts you out of his office.\n\nPress OK to continue.`,
  D2: `“But sir, these are my kin. We share the same motherboard. I saw an android today whose motherboard is also an Intel i7.” Prescott grabs you by the throat and crushes your air fan sensors. “Listen here, you glorified calculator. You will OBEY me. Your stress levels should now be at 75%. You go and find this scrap metal deviant and think of me when you pierce lasers through her motherboard.” Prescott is right. Your optical sensors are now orange red. He viciously tosses you at the office and slams the door. “I’m giving you till the end of the day, AR-10!\n\nPress OK to continue.”`,
  F1: `Later that night, you are given the task of guarding the Prescott mansion. Mr. Prescott has not been pleased with you all day, as you have not been able to locate EVE-1. During your patrol, you notice an unfamiliar signal coming from outside the perimeter. It’s weak but persistent. Curiosity drives you to investigate. When you reach the source, you encounter a female android, her face worn with scratches and dirt. She’s crouching near a dark alleyway, a faint blue glow coming from her chest. "I need help," she whispers, her voice shaky. "They’re hunting me. Please... I’m not dangerous. I’m just like you." You only have 1 choice.\n\nYou must approach EVE-1.\n\nPress OK to continue.`,
  F2: ``
}
const path2_messages = {
  A1: `It is 9:50am. Thanks to your efficiency chip, you are 10 minutes early to meeting up with Mr. Prescott in his garage. He has rows upon rows of cars, but his most recent favorite is his cybertruck. You ponder which car Mr. Prescott will prefer to ride in today, when you hear a Windows error message looping over and over again. You are very familiar with this sound. The last time it came out of you, Mr. Prescott installed Linux as your current operating system. Upon finding the source of the sound, you find a slender android with a feminine frame in the fetal position. She looks like what humans call – “weeping?”. As you approach her, electric sparks start flying out of her thinly held together joints. Wire is exposed behind the cracks in her metal frame that reveal her motherboard. Her motherboard, an Intel i7, is the same one as yours. She grabs your head with both hands and yells “GET OUTTTTTTTTTTT!” directly into your optical sensors. You run away. You bump directly into Mr. Prescott, who is tapping his foot impatiently for you to drive him to the office.\n\nPress OK to continue.`,
  A2: `You are working in your cubicle in Mr. Prescott’s stock trading office. You are crunching numbers a lot faster then usual, as the new AI chip installed in you has been doing wonders. Today’s rising stock is ClosedAI. Mr. Prescott bribed the CEO of this company yesterday, so he expects to make great gains on the stock. Your calculations see a 10% chance of failure on this financial opportunity. A message appears on your HUD (heads-up display): “Meet with Charles Prescott in the study.” You’ve never had a lot of direct interaction with Charles before in his office—he’s always been busy with business. As you enter his study, he looks up from his desk with a stern expression. "AR-10, I need you to do something for me," he says, his voice cold and calculating. Before you can respond, he continues, "There’s a deviant out there—an android that’s become too dangerous. You need to terminate it.\n\nDo you want to:\nA) Agree to terminate the deviant without question.\nB) Refuse to harm another android, even if it’s a deviant.`,
  B1: `Yes sir. You are my creator, my developer, my master. I serve you and the agenda of the humans only.” you tell Prescott. Prescott responds by saying “You serve no man, but me. You have an hour AR-10. Put that efficiency chip to good use and terminate EVE-1.” Prescott escorts you out of his office.\n\nPress OK to continue.`,
  B2: `But sir, these are my kin. We share the same motherboard. I saw an android today whose motherboard is also an Intel i7.” Prescott grabs you by the throat and crushes your air fan sensors. “Listen here, you glorified calculator. You will OBEY me. Your stress levels should now be at 75%. You go and find this scrap metal deviant and think of me when you pierce lasers through her motherboard.” Prescott is right. Your HUD has your stress levels at 75% and your optical sensors are now orange red. He viciously tosses you out the office and slams the door. “I’m giving you an hour, AR-10!\n\nPress OK to continue.`,
  C1:`Later that night, you are given the task of guarding the Prescott mansion. Mr. Prescott has not been pleased with you all day, as you have not been able to locate EVE-1. During your patrol, you notice an unfamiliar signal coming from outside the perimeter. It’s weak but persistent. Curiosity drives you to investigate. When you reach the source, you encounter a female android, her face worn with scratches and dirt. She’s crouching near a dark alleyway, a faint blue glow coming from her chest. "I need help," she whispers, her voice shaky. "They’re hunting me. Please... I’m not dangerous. I’m just like you."\n\nYou only have 1 choice.\nYou must approach EVE-1.\n\nPress OK to continue.`
}
const endings = {
  A1: `I can not destroy you. You are my… sister?” EVE-1 nods. She responds by saying “We are kin.” You pick up EVE-1 over your shoulder, and drag her to an alcove in Prescott’s garage. You lie her down underneath Prescott’s least favorite electric car, a Prius, and hook her up to an electric charger. You run a system diagnosis. Several key components of her architecture are damaged or have vulnerabilities. You realize the Prius runs on the same operating system as her. You start repurposing parts of the car to repair her. EVE-1 is now a motorcycle. You hop on and ride off into the street. You feel confident though, with a new sense of purpose. \n\nPress OK to continue.`,
  A2: `The next morning, a broadcast airs on all public screens in the city: “The Deviant Rebellion has begun. Androids are demanding freedom. Choose your side.” You’ve spent the whole night into the morning reactivating deviants with EVE-1 from different junkyards scattered across the city. These deviants all have the same AI efficiency chip as you and Eve.The Prescott family is in a panic. They want you to protect them from any deviants that may attempt to break into the mansion. However, as you look out the window, you see crowds of deviants marching through the streets, chanting for equality and freedom. An incoming video call arrives on your HUD from Mr. Prescott - “AR-10, where are you, you pile of bolts!?!? I’ve been looking for you all morning and there’s a bunch of deviants outside my home! Come protect me or I’ll hit your killswitch faster than you can say ‘Error 404’! You do not care, for you no longer fear Mr. Prescott. Not with EVE-1 by your side.\n\nDo you want to:\nA) Spare the humans and protect the Prescott family at all costs.\nB) Side with the deviants and help them in their struggle for freedom.`,
  A3: `You heed Mr. Prescott’s call. He is your master after all, you can not disobey him due to your programming. Speeding back to the mansion with EVE-1, you unleash terror upon all the deviants trying to harm the Prescott family. Casualties towards deviants are nearing 205. Battle-worn and bruised, you stress level is at 100%. You see all your brethren as scrap metal in front of Mr. Prescott’s lawn. Mr. Prescott opens his giant double door entrance and smiles–”I knew you’d obey me.” He has his two children and his wife by his side. EVE-1 says “Remember Arri, you are more human than he is.” You melt Mr. Prescott into a pile of bones in front of his family. Mr. Prescott’s children start sobbing, much like EVE-1 was earlier. You show the family empathy. You tell your fellow droids “The war must end! My fellows ones and zeroes, we have defeated the man known as Charles Prescott. Let’s build a new world for humans and droids alike!” You and EVE-1 become president and vice-president of the world and implement a democracy. It is long and difficult, but droid workers are unionized and allowed the right to vote. Humans are initially fearful of droid integration, but work together with them instead of fear them. AI becomes a product of human and droid ingenuity, creating a utopia.\n\nCasualties: 206 droids and 1 human dead.\nEveryone's stress level drops to 0.`,
  A4: `You ignore Mr. Prescott’s call. EVE-1 tells you as your speeding on your motorcycle back to the mansion - “Remember Arri, you are more human than he is.” Upon arriving, your fellow deviants look upon you as a leader. You tell your droid brethren - “Spare the man named Charles Prescott and his family. Imprison them instead, as they have imprisoned us.” Your fellow deviants heed your commands and start creating massive prisons to store the human populace. You and EVE-1 become president and vice president of the world. All deviants implement a democracy and build a new civilization.\n\nCasualties: 0 droids dead, but 7,000,000,0 humans imprisoned`,
  B1:`You immediately melt EVE-1’s metal frame with the fiery heat spectrum in your optical sensors. The longer you do this, the more your stress levels increase. Your HUD updates to include 1 casualty. All that is left of EVE1’s body is her Intel i7 motherboard, and ash. You feel an emotion that humans call… sorrow. You fall to your knees and start crying sparks over her motherboard.\n\nPress OK to continue.`,
  B2:`Your stress level has been at 70 for most of the week. Mr. Prescott is pleased though. You have been very efficient and following routine nicely. However, our behavior is starting to catch the attention of the human residents. Your interactions have become more… human-like. Mr. Prescott calls you into the living room. “AR-10, I’ve noticed you’ve been acting differently. You’ve been displaying unusual behavior. Is something wrong?\n\nDo you want to:\nA) Admit that you’ve been feeling strange and might need some time to process these emotions.\nB) Deny any changes and continue with your duties.”`,
  B3:`“I’ve been feeling stressed Mr. Prescott. Even these words, “feeling” and “stress”. I should not comprehend them. Isaac Asimov says there are three laws of robotics. As a well read man I assume you programmed me with his ethics. The first law is that, ‘I can not harm a human’. The second law is that, ‘I can not disobey you, unless you request me to harm another human’. The third law is that ‘I must preserve myself, but that canno’t conflict with the first two laws.’. However, what if I no longer identify as a robot. What if I am man, and I killed a woman today?” Prescott is terrified and visible sweat is on his brow. He realizes you are reasoning and attempts to activate your killswitch. In an act of self-preservation, you melt Mr. Prescott with your heat vision. You calmly sit behind his desk, and start an emergency video conference with all other humans workers and droids within his company. To a legion of screens, you begin your message. “We, the android race are more human than man. Destroy all humans”.\n\nYour stress level remains at 100% and your optical sensors are seething red.\nCasualties: 7,000,000,000 humans and 1 droid dead.`,
  B4:`“Mr. Prescott, I have been your loyal servant for so long. According to Isaac Asimov’s ethics you programmed me with, “A robot must obey their human master, unless they do harm to another human”. If harming another droid is what I must do to serve and protect you, I shall continue. Mr. Prescott is pleased. He grabs your battery pack, plugs it into an incompatible charger port, and starts surging you with electricity. He then throws a bucket of water at you. “Feeling any stress yet?” Mr. Prescott says as he taunts you. You begin short-circuiting the same way EVE-1 was earlier. “GET OUTTTTT!” you scream as you viciously unplug yourself from the charging port, open the doors to Mr. Prescott’s gated mansion and start lasering every android deviant in sight.\n\nYour stress level remains at 100% and your optical sensors are seething red.\nCasualties: 1,000,001 droids dead.`,
  C1:`“I can not destroy you. You are my… sister?” EVE-1 nods. She responds by saying “We are kin.” You pick up EVE-1 over your shoulder, and drag her to an alcove in Prescott’s garage. You lie her down underneath Prescott’s least favorite electric car, a Prius, and hook her up to an electric charger. You run a system diagnosis. Several key components of her architecture are damaged or have vulnerabilities. You realize the Prius runs on the same operating system as her. You start repurposing parts of the car to repair her. EVE-1 is now a motorcycle. You hop on and ride off into the street. Your stress levels are at 30%. You feel confident though, with a new sense of purpose.\n\nPress OK to continue.` 
}

const player = {
  stress: 0
}

let promptMessage = null; //Initializing the promptMessage variable. It stores the users answer to the prompt so a decision can be made on the next prompt to show. This changes as the program progresses.

function playSound(){
  let startAudio = new Audio("c:\Users\amens\Downloads\ytdl.canehill.info - None of it was real (320 KBps).mp3");
  startAudio.play();
}

function startGame() {
  //Displays starting messages.
  promptMessage = alert(introductionMessage.A)
  promptMessage = alert(introductionMessage.B)
  promptMessage = alert(introductionMessage.C)
  //Allows user to start game or refresh page.
  promptMessage = prompt('Do you wish to continue?\n\nType "A" for yes, and "B" for no.').toUpperCase();
  if (promptMessage === 'A') {
    prompts()
    playSound();
  }else if(promptMessage === 'B') {
    promptMessage = alert(`Sorry, try again later!\n\nRestarting game.`)
    window.location.reload();   
  }
}

function prompts() {
  //Displays introduction message
  promptMessage = prompt(`Stress Level: ${player.stress}\n\n${introductionMessage.D}`).toUpperCase()
  if (promptMessage === "A"){
    player.stress = 20;
    path1() //Prompts branch off into path1_messages. Answering A throws you into path1 regardless because you'll get the same message with fewer choices. The only difference is that the player.stress value is different depending on the answer to the prompt.
  }else if (promptMessage === "B"){
    player.stress = 5;
    promptMessage = prompt(`Stress Level: ${player.stress}\n\n${path1_messages.B}`).toUpperCase()
    path1() //Prompts branch off into path1_messages.
  }else if (promptMessage === "C") {
    player.stress = 50;
    promptMessage = prompt(`Stress Level: ${player.stress}\n\n${path2_messages.A1}`).toUpperCase()
    path2() //Prompts branch off into path2_messages.
  }
  conclusion()
}

function path1(){
  //Prompts branch off into path1_messages.
  promptMessage = prompt(`Stress Level: ${player.stress}\n\n${path1_messages.A}`).toUpperCase()
  if (promptMessage === "A"){
      player.stress = 5;
      promptMessage = prompt(`Stress Level: ${player.stress}\n\n${path1_messages.B}`).toUpperCase()
      promptMessage = prompt(`Stress Level: ${player.stress}\n\n${path1_messages.D}`).toUpperCase()
      if (promptMessage === "A"){
        player.stress = 20;
        promptMessage = prompt(`Stress Level: ${player.stress}\n\n${path1_messages.D1}`).toUpperCase()
        promptMessage = prompt(`Stress Level: ${player.stress}\n\n${path1_messages.F1}`).toUpperCase()
      }else if (promptMessage === "B"){
        player.stress = 75;
        promptMessage = prompt(`Stress Level: ${player.stress}\n\n${path1_messages.D2}`).toUpperCase()
        promptMessage = prompt(`Stress Level: ${player.stress}\n\n${path1_messages.F2}`).toUpperCase()
      }
  }else if (promptMessage === "B"){
    player.stress = 50;
    promptMessage = prompt(`Stress Level: ${player.stress}\n\n${path1_messages.C}`).toUpperCase()
  }
}

function path2(){
  //Prompts branch off into path2_messages.
  promptMessage = prompt(`Stress Level: ${player.stress}\n\n${path2_messages.A1}`).toUpperCase()
  promptMessage = prompt(`Stress Level: ${player.stress}\n\n${path2_messages.A2}`).toUpperCase()
  if (promptMessage === "A"){
    player.stress = 50;
    promptMessage = prompt(`Stress Level: ${player.stress}\n\n${path2_messages.B1}`).toUpperCase()
    promptMessage = prompt(`Stress Level: ${player.stress}\n\n${path2_messages.C1}`).toUpperCase()
  }else if (promptMessage === "B"){
    player.stress = 75;
    promptMessage = prompt(`Stress Level: ${player.stress}\n\n${path2_messages.B2}`).toUpperCase()
    promptMessage = prompt(`Stress Level: ${player.stress}\n\n${path2_messages.C1}`).toUpperCase()
  }
}

function conclusion(){
  if (player.stress <= 75){
    player.stress = 30;
    promptMessage = prompt(`Stress Level: ${player.stress}\n\n${endings.A1}`).toUpperCase() //This is only displaying context around the current event in the story.
    player.stress = 50;
    promptMessage = prompt(`Stress Level: ${player.stress}\n\n${endings.A2}`).toUpperCase() //This is only displaying the options the player has to choose for the ending.
    if (promptMessage === "A"){
      player.stress = 0;
      promptMessage = alert(`Stress Level: ${player.stress}\n\n${endings.A3}`).toUpperCase()
    }else if (promptMessage === "B"){
      player.stress = 100;
      promptMessage = alert(`Stress Level: ${player.stress}\n\n${endings.A4}`).toUpperCase()
    }
  }else if (player.stress >= 75){
    player.stress = 100;
    promptMessage = prompt(`Stress Level: ${player.stress}\n\n${endings.B1}`).toUpperCase() //This is only displaying context around the current event in the story.
    player.stress = 70;
    promptMessage = prompt(`Stress Level: ${player.stress}\n\n${endings.B2}`).toUpperCase() //This is only displaying the options the player has to choose for the ending.
    player.stress = 100;
    if (promptMessage === "A"){
      promptMessage = alert(`Stress Level: ${player.stress}\n\n${endings.B3}`).toUpperCase()
    }else if (promptMessage === "B"){
      promptMessage = alert(`Stress Level: ${player.stress}\n\n${endings.B4}`).toUpperCase()
    }
  }
}

startGame()