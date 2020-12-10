import React from 'react'

import { Button } from './styles'

export interface Props {
  isHome?: boolean
  selected?: boolean
  mentions?: number
  imageUrl?: string
  hasNotifications?: boolean
}

const ServerButton: React.FC<Props> = ({
  isHome,
  selected,
  hasNotifications,
  mentions,
  imageUrl
}) => (
  <Button
    isHome={isHome}
    imageUrl={imageUrl}
    hasNotifications={hasNotifications}
    mentions={mentions}
    className={selected ? 'active' : ''}
  ></Button>
)

export default ServerButton
