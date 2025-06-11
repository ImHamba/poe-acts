import ActContainer from '@/lib/reuseable/ActContainer'
import ChecklistContainer from '@/lib/reuseable/ChecklistContainer'
import ChecklistItem from '@/lib/reuseable/ChecklistItem'
import ChecklistItemGroup from '@/lib/reuseable/ChecklistItemGroup'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/act10/')({
  component: () => (
    <ActContainer act={9} regex="-\w-.-|(-\w){4}|(-\w){5}|nne|rint">
      <ChecklistContainer>
        <ChecklistItemGroup
          items={[
            'Kill plaguewing',
            'Ravaged square - drop portal in main square after entering',
            'Ravaged square - find WP - use WP to town',
            'Take portal - go south west to control blocks',
            'Kill vilenta',
          ]}
        />
        <ChecklistItem>Town</ChecklistItem>
        <ChecklistItemGroup
          items={[
            'Teleport to ravaged square WP - enter ossuary',
            'Ossuary - trial',
          ]}
        />
        <ChecklistItem>Town</ChecklistItem>
        <ChecklistItemGroup
          items={[
            'Teleport to ravaged square WP - go east to torched courts',
            'Kill avarius',
          ]}
        />
        <ChecklistItem>Town</ChecklistItem>
        <ChecklistItemGroup
          items={[
            'Merc lab',
            'Teleport to ravaged square WP - go east to the canals',
            'Kill kitava',
          ]}
        />
      </ChecklistContainer>
    </ActContainer>
  ),
})
