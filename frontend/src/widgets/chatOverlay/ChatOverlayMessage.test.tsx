import React from 'react';
import { render, screen } from '@testing-library/react';
import ChatOverlayMessage from './ChatOverlayMessage';
import { generateMockTwitchChatMessage } from '../../test/generators/generateMockChatMessages';

test('renders twitch message', () => {
    generateMockTwitchChatMessage(5).forEach(twitchMsg => {
        const { container } = render(<ChatOverlayMessage name={twitchMsg.name} content={twitchMsg.content}/>);

        //Check if Displayname is shown
        const name = container.getElementsByClassName("chatOverlayMessageName")[0].textContent;
        expect(name).toContain(twitchMsg.name);

        //Check if Message Content is shown
        const content = container.getElementsByClassName("chatOverlayMessageContent")[0].textContent;
        expect(content).toContain(twitchMsg.content);
    });
});
