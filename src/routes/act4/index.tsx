import ActContainer from '@/lib/reuseable/ActContainer'
import ChecklistContainer from '@/lib/reuseable/ChecklistContainer'
import ChecklistItem from '@/lib/reuseable/ChecklistItem'
import Gem from '@/lib/reuseable/Gem'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/act4/')({
  component: () => (
    <ActContainer act={4}>
      <ChecklistContainer>
        <ChecklistItem>Skip town - go south west</ChecklistItem>
        <ChecklistItem>Dried lake - kill voll</ChecklistItem>
        <ChecklistItem>
          Town - regex b-b-b-b|b-b-b-r|b-b-r-b|b-r-b-b|r-b-b-b|nne|rint
          <span>Unlock the mines door</span>
          <Gem type="blue">carrion golem reward</Gem>
        </ChecklistItem>
        <ChecklistItem>The mines level 2 - free deshret's spirit</ChecklistItem>
        <ChecklistItem>Daresso's dream</ChecklistItem>
        <ChecklistItem>
          Town - regex
          <span>Hand quest to tasuni</span>
        </ChecklistItem>
        <ChecklistItem>Kaom's dream</ChecklistItem>
        <ChecklistItem>Kill piety</ChecklistItem>
        <ChecklistItem>
          The harvest - get WP and kill maligaro to the east
        </ChecklistItem>
        <ChecklistItem>Town</ChecklistItem>
        <ChecklistItem>Teleport to the harvest - kill other 2</ChecklistItem>
        <ChecklistItem>Kill malachai</ChecklistItem>
        <ChecklistItem>
          Town - regex
          <Gem type="blue">unleash</Gem>
        </ChecklistItem>
        <ChecklistItem>The ascent - to act 5</ChecklistItem>
      </ChecklistContainer>
    </ActContainer>
  ),
})
