import React, { useState } from 'react'

import ServerButton from '../ServerButton'
import { Container, Separator } from './styles'

import { Props } from '../ServerButton'

const ServerList: React.FC = () => {
  const [servers] = useState<Props[]>([
    {
      imageUrl:
        'https://cdn.dribbble.com/users/2598141/screenshots/14737519/media/32809bfce60f1001104b94ccacf18583.png'
    },
    {
      imageUrl:
        'https://cdn.dribbble.com/users/902228/screenshots/14737383/media/b8c3f273b0aed9aeb1ef75f7406552f7.jpg',
      hasNotifications: true
    },
    {
      imageUrl:
        'https://cdn.dribbble.com/users/2973/screenshots/14739790/media/f141bf544fd6167f6e8450804c7e74f5.png',
      mentions: 3
    },
    {
      imageUrl:
        'https://cdn.dribbble.com/users/289158/screenshots/14739669/media/5d7933105566eaf57ff0ee1251e7c3b1.jpg?compress=1&resize=800x600'
    },
    {
      isHome: true,
      imageUrl:
        'https://cdn.dribbble.com/users/1058830/screenshots/14739317/media/699ab673eb21b7a595006d82fa50b1fe.png'
    },
    {
      imageUrl:
        'https://cdn.dribbble.com/users/725870/screenshots/14733816/media/d3a930b344d7bb713e87341c096ac04d.jpg'
    },
    {
      imageUrl:
        'https://cdn.dribbble.com/users/3688487/screenshots/14734517/media/057883fb067b126dcfe1c82c7de2af81.jpg'
    },
    {
      imageUrl:
        'https://cdn.dribbble.com/users/1188871/screenshots/14733600/media/9176ab04907c260c6b874ed6002923e7.jpg',
      hasNotifications: true
    },
    {
      imageUrl:
        'https://cdn.dribbble.com/users/289158/screenshots/14734880/media/db1a48913f21b96582b300d6b431a2af.jpg'
    },
    {
      imageUrl:
        'https://cdn.dribbble.com/users/591916/screenshots/14733841/media/d778d39288075289b0cc0e2dbb40f485.png'
    },
    {
      imageUrl:
        'https://cdn.dribbble.com/users/1899690/screenshots/14734388/media/9b5d0fa188391098166d9f2fef2d233c.jpg?compress=1&resize=1000x750',
      mentions: 5
    },
    {
      imageUrl:
        'https://cdn.dribbble.com/users/1037/screenshots/14733578/media/42bcabe45a595eb837af8490a687ebd6.jpeg'
    },
    {
      imageUrl:
        'https://cdn.dribbble.com/users/2951138/screenshots/14733875/media/6e132585101f42de03b52bae0985adbd.jpg?compress=1&resize=1000x750'
    }
  ])

  return (
    <Container>
      {servers
        .sort(({ isHome }) => (isHome ? -1 : 0))
        .map(server => {
          return (
            <>
              <ServerButton
                isHome={server.isHome}
                imageUrl={server.imageUrl}
                mentions={server.mentions}
                hasNotifications={server.hasNotifications}
              />

              {server.isHome && <Separator />}
            </>
          )
        })}
    </Container>
  )
}

export default ServerList
