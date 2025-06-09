import ChecklistContainer from '@/lib/reuseable/ChecklistContainer'
import ChecklistItem from '@/lib/reuseable/ChecklistItem'
import Gem from '@/lib/reuseable/Gem'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/act1/')({
  component: () => (
    <ChecklistContainer>
      <ChecklistItem>
        <div>Town - regex</div>
        <Gem type="blue">freezing pulse</Gem>
      </ChecklistItem>
      <ChecklistItem>Go to submerged passage WP</ChecklistItem>
      <ChecklistItem>
        Teleport to The Coast - kill Hailrake in Tidal Island, logout/login
      </ChecklistItem>
      <ChecklistItem>
        <div>Town - regex</div>
        <Gem type="blue">SRS</Gem>
        <Gem type="blue">frostblink</Gem>
        <Gem type="blue">summon phantasm</Gem>
        <Gem type="red">holy flame totem</Gem>
      </ChecklistItem>
      <ChecklistItem>
        Submerged passage - drop portal near dweller
      </ChecklistItem>
      <ChecklistItem>Go to lower prison WP</ChecklistItem>
      <ChecklistItem>
        Teleport town/portal - kill dweller, logout/login
      </ChecklistItem>
      <ChecklistItem>Town - regex</ChecklistItem>
      <ChecklistItem>Go to lower prison - trial</ChecklistItem>
      <ChecklistItem>Brutus - logout/login</ChecklistItem>
      <ChecklistItem>
        <div>Town - regex</div>
        <Gem type="blue">flame dash</Gem>
        <Gem type="blue">minion damage</Gem>
        <Gem type="red">melee splash</Gem>
      </ChecklistItem>
      <ChecklistItem>Go to prisoners gate</ChecklistItem>
      <ChecklistItem>Ship graveyard cave - kill fairgraves</ChecklistItem>
      <ChecklistItem>Merveil</ChecklistItem>
    </ChecklistContainer>
  ),
})
