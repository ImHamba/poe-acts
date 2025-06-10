import ActContainer from '@/lib/reuseable/ActContainer'
import ChecklistContainer from '@/lib/reuseable/ChecklistContainer'
import ChecklistItem from '@/lib/reuseable/ChecklistItem'
import Gem from '@/lib/reuseable/Gem'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/act1/')({
  component: () => (
    <ActContainer act={1}>
      <ChecklistContainer>
        <ChecklistItem>Kill hillock</ChecklistItem>
        <ChecklistItem>
          <div>Town - regex b-b-r|b-r-b|r-b-b|nne|rint</div>
          <Gem type="blue">freezing pulse</Gem>
        </ChecklistItem>
        <ChecklistItem>Go to submerged passage WP</ChecklistItem>
        <ChecklistItem>
          Teleport to The Coast - kill Hailrake in Tidal Island, logout/login
        </ChecklistItem>
        <ChecklistItem>
          <div>Town - regex</div>
          <ChecklistItem>quicksilver</ChecklistItem>
          <Gem type="blue">SRS</Gem>
          <Gem type="blue">frostblink</Gem>
          <Gem type="blue">summon phantasm</Gem>
          <Gem type="red">holy flame totem</Gem>
          <Gem type="red">shield charge</Gem>
        </ChecklistItem>
        <ChecklistItem>
          Submerged passage - drop portal near dweller entrance
        </ChecklistItem>
        <ChecklistItem>Go to lower prison WP</ChecklistItem>
        <ChecklistItem>
          Teleport town/portal - kill dweller, logout/login
        </ChecklistItem>
        <ChecklistItem>Town - regex</ChecklistItem>
        <ChecklistItem>Go to lower prison - trial</ChecklistItem>
        <ChecklistItem>Kill brutus - logout/login</ChecklistItem>
        <ChecklistItem>
          <div>Town - regex</div>
          <Gem type="blue">flame dash</Gem>
          <Gem type="blue">minion damage</Gem>
          <Gem type="red">melee splash</Gem>
          <Gem type="blue">clarity</Gem>
          <Gem type="blue">raise zombie</Gem>
          <Gem type="blue">flesh offering</Gem>
        </ChecklistItem>
        <ChecklistItem>Go to prisoners gate</ChecklistItem>
        <ChecklistItem>Ship graveyard cave - kill fairgraves</ChecklistItem>
        <ChecklistItem>Kill merveil</ChecklistItem>
      </ChecklistContainer>
    </ActContainer>
  ),
})
