import { twitchChatMessage } from "../../types";
import { faker } from '@faker-js/faker';

export function generateMockTwitchChatMessage (count: number):twitchChatMessage[] {
    let arr = [] as twitchChatMessage[];

    for(let i = 0; i < count; i++){
        arr.push({
            channel: faker.internet.userName(),
            user: faker.internet.userName(),
            name: faker.name.firstName(),
            timestamp: faker.date.past(),
            content: faker.lorem.text(),
            badges: [],
            sub: Math.random() < 0.3,
            isMod: Math.random() < 0.1,
            firstMsg: Math.random() < 0.05,
            color: faker.color.rgb(),
        });
    }

    return arr;
}