import ActContainer from '@/lib/reuseable/ActContainer'
import ChecklistContainer from '@/lib/reuseable/ChecklistContainer'
import ChecklistItem from '@/lib/reuseable/ChecklistItem'
import ChecklistItemGroup from '@/lib/reuseable/ChecklistItemGroup'
import Gem from '@/lib/reuseable/Gem'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/act1/')({
  component: () => (
    <ActContainer act={1} regex="b-b-r|b-r-b|r-b-b|nne|rint">
      <ChecklistContainer>
        <ChecklistItem>Kill hillock</ChecklistItem>
        <ChecklistItem>
          <div>Town</div>
          <Gem type="blue">freezing pulse</Gem>
        </ChecklistItem>
        <ChecklistItemGroup
          items={[
            'Go to submerged passage WP',
            'Teleport to The Coast - kill Hailrake in Tidal Island, logout/login',
          ]}
        />
        <ChecklistItem>
          <div>Town</div>
          <ChecklistItem>quicksilver</ChecklistItem>
          <Gem type="blue">SRS</Gem>
          <Gem type="blue">frostblink</Gem>
          <Gem type="blue">summon phantasm</Gem>
          <Gem type="red">holy flame totem</Gem>
          <Gem type="red">shield charge</Gem>
        </ChecklistItem>
        <ChecklistItemGroup
          items={[
            'Submerged passage - drop portal near dweller entrance',
            'Go to lower prison WP',
            'Teleport town/portal - kill dweller, logout/login',
            'Town',
            'Go to lower prison - trial',
            'Kill brutus - logout/login',
          ]}
        />
        <ChecklistItem>
          <div>Town</div>
          <Gem type="blue">flame dash</Gem>
          <Gem type="blue">minion damage</Gem>
          <Gem type="red">melee splash</Gem>
          <Gem type="blue">clarity</Gem>
          <Gem type="blue">raise zombie</Gem>
          <Gem type="blue">flesh offering</Gem>
        </ChecklistItem>
        <ChecklistItemGroup
          items={[
            'Ship graveyard cave - kill fairgraves',
            'Go to prisoners gate',
            'Kill merveil',
          ]}
        />
      </ChecklistContainer>
    </ActContainer>
  ),
})
