import ActContainer from '@/lib/reuseable/ActContainer'
import ChecklistContainer from '@/lib/reuseable/ChecklistContainer'
import ChecklistItem from '@/lib/reuseable/ChecklistItem'
import Gem from '@/lib/reuseable/Gem'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/act2/')({
  component: () => (
    <ActContainer act={2}>
      <ChecklistContainer>
        <ChecklistItem>Town - go east</ChecklistItem>
        <ChecklistItem>
          (Optional) Old fields - do The Den if you find it
        </ChecklistItem>
        <ChecklistItem>Crossroads WP - go north</ChecklistItem>
        <ChecklistItem>Chamber of sins level 2 - trial</ChecklistItem>
        <ChecklistItem>Chamber of sins level 2 - kill fidelita</ChecklistItem>
        <ChecklistItem>Town - go left</ChecklistItem>
        <ChecklistItem>Western forest WP</ChecklistItem>
        <ChecklistItem>
          Weaver's chambers - opposite side of waypoint
        </ChecklistItem>
        <ChecklistItem>
          Town
          <Gem type="blue">minion speed</Gem>
          <Gem type="blue">minion life</Gem>
          <Gem type="red">melee physical damage</Gem>
        </ChecklistItem>
        <ChecklistItem>Teleport to the Crossroads WP - go south</ChecklistItem>
        <ChecklistItem>The crypt level 1 - trial</ChecklistItem>
        <ChecklistItem>The crypt level 2 - collect golden hand</ChecklistItem>
        <ChecklistItem>
          Town - teleport to the Crossroads WP - go east
        </ChecklistItem>
        <ChecklistItem>Broken bridge - kill kraityn</ChecklistItem>
        <ChecklistItem>
          Town - teleport to the Riverways WP - go north
        </ChecklistItem>
        <ChecklistItem>Wetlands - find WP and kill oak</ChecklistItem>
        <ChecklistItem>Town - teleport to the western forest WP</ChecklistItem>
        <ChecklistItem>
          Western forest - kill/help alira - same side as waypoint
        </ChecklistItem>
        <ChecklistItem>
          Western forest - go south - kill blackguards
        </ChecklistItem>
        <ChecklistItem>
          Act 2 Town
          <Gem type="blue">skitterbots</Gem>
        </ChecklistItem>
        <ChecklistItem>
          Act 1 town - hand in quest - get missing gems
          <Gem type="blue">combustion</Gem>
          <Gem type="red">vitality</Gem>
        </ChecklistItem>
        <ChecklistItem>
          Teleport to wetlands WP - enter vaal ruins
        </ChecklistItem>
        <ChecklistItem>Kill vaal oversoul</ChecklistItem>
        <ChecklistItem>Town - sell items</ChecklistItem>
        <ChecklistItem>Continue to act 3</ChecklistItem>
      </ChecklistContainer>
    </ActContainer>
  ),
})
