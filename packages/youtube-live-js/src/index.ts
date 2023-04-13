import {google} from "googleapis";
import * as dotenv from 'dotenv';

dotenv.config();

// google.options({auth: process.env.GOOGLE_API_TESTING_KEY});

// google.youtube("v3").liveBroadcasts.list({part: ["snippet"], mine: true}).then(brodcasts => {
//     const live = brodcasts.data.items![0];
//     const chatId = live.snippet?.liveChatId as string;
    
//     google.youtube("v3").liveChatMessages.list({liveChatId: chatId, part: ["snippet"]}).then(res => {
//         console.log(res);
//     });
// });