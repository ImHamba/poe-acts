import ActContainer from '@/lib/reuseable/ActContainer'
import ChecklistContainer from '@/lib/reuseable/ChecklistContainer'
import ChecklistItem from '@/lib/reuseable/ChecklistItem'
import ChecklistItemGroup from '@/lib/reuseable/ChecklistItemGroup'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/act9/')({
  component: () => (
    <ActContainer act={9} regex="-\w-.-|(-\w){4}|(-\w){5}|nne|rint">
      <ChecklistContainer>
        <ChecklistItem>Town</ChecklistItem>
        <ChecklistItemGroup
          items={[
            'Vastiri desert - get storm blade - find WP - go to foothills',
            'Foothills - find WP - enter boiling lake',
            'Kill basilisk',
          ]}
        />
        <ChecklistItem>Town</ChecklistItem>
        <ChecklistItemGroup
          items={[
            'Teleport to vastiri desert WP - go to the oasis',
            'Kill shakiri',
          ]}
        />
        <ChecklistItem>Town - get bottled storm from petarus</ChecklistItem>
        <ChecklistItemGroup
          items={[
            'Teleport to foothills WP - go north west',
            'The tunnel - trial',
            'The quarry - find WP - go to the refinery',
            'Kill general adus',
          ]}
        />
        <ChecklistItem>Town</ChecklistItem>
        <ChecklistItemGroup
          items={[
            'Teleport to quarry WP - kill garukhan',
            'Enter belly of the beast',
            'Kill depraved trinity',
          ]}
        />
      </ChecklistContainer>
    </ActContainer>
  ),
})
