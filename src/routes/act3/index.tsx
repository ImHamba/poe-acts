import ActContainer from '@/lib/reuseable/ActContainer'
import ChecklistContainer from '@/lib/reuseable/ChecklistContainer'
import ChecklistItem from '@/lib/reuseable/ChecklistItem'
import Gem from '@/lib/reuseable/Gem'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/act3/')({
  component: () => (
    <ActContainer act={3}>
      <ChecklistContainer>
        <ChecklistItem>Skip town - go east</ChecklistItem>
        <ChecklistItem>Crematorium - trial</ChecklistItem>
        <ChecklistItem>Crematorium - kill piety</ChecklistItem>
        <ChecklistItem>
          Town - regex b-b-b-b|b-b-b-r|b-b-r-b|b-r-b-b|r-b-b-b|nne|rint
          <Gem type="blue">wrath</Gem>
        </ChecklistItem>
        <ChecklistItem>Go to sewers - pick up platinum busts</ChecklistItem>
        <ChecklistItem>Catacombs - trial</ChecklistItem>
        <ChecklistItem>Town - regex</ChecklistItem>
        <ChecklistItem>Teleport to marketplace - continue</ChecklistItem>
        <ChecklistItem>Battlefront WP - get ribbon spool</ChecklistItem>
        <ChecklistItem>Docks - get sulphite</ChecklistItem>
        <ChecklistItem>
          Teleport to battlefront - go to temple of solaris level 2
        </ChecklistItem>
        <ChecklistItem>Teleport to sewers</ChecklistItem>
        <ChecklistItem>Ebony barracks - kill gravicius</ChecklistItem>
        <ChecklistItem>Lunaris temple level 2 - kill piety</ChecklistItem>
        <ChecklistItem>
          Town - teleport to Ebony barracks - go north east
        </ChecklistItem>
        <ChecklistItem>Imperial garden - find WP and trial</ChecklistItem>
        <ChecklistItem>Town - regex</ChecklistItem>
        <ChecklistItem>Normal lab</ChecklistItem>
        <ChecklistItem>Town - regex</ChecklistItem>
        <ChecklistItem>Teleport to imperial gardens - continue</ChecklistItem>
        <ChecklistItem>Kill dominus</ChecklistItem>
      </ChecklistContainer>
    </ActContainer>
  ),
})
