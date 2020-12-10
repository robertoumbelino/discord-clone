import React, { useRef, useEffect } from 'react'

import ChannelMessage, { Mention } from '../ChannelMessage'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current

    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array(15)
          .fill('')
          .map((_, key) => (
            <ChannelMessage
              key={key}
              author="Roberto Umbelino"
              date="09/12/2020"
              content="Falaaa galera"
            />
          ))}

        <ChannelMessage
          author="Pablo Danilo"
          date="10/12/2020"
          isBot
          hasMention
          content={
            <>
              <Mention>@Roberto Umbelino</Mention>, você é toppen.
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData
