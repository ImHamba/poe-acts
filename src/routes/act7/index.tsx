import ActContainer from '@/lib/reuseable/ActContainer'
import ChecklistContainer from '@/lib/reuseable/ChecklistContainer'
import ChecklistItem from '@/lib/reuseable/ChecklistItem'
import ChecklistItemGroup from '@/lib/reuseable/ChecklistItemGroup'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/act7/')({
  component: () => (
    <ActContainer act={7} regex="-\w-.-|(-\w){4}|(-\w){5}|nne|rint">
      <ChecklistContainer>
        <ChecklistItem>Town</ChecklistItem>
        <ChecklistItemGroup
          items={[
            "(Optional flask reward) Broken bridge - pick up welam's locket",
            'Crossroads WP - go south',
            'The crypt - trial',
            "The crypt - get maligaro's map",
          ]}
        />
        <ChecklistItem>Town</ChecklistItem>
        <ChecklistItemGroup
          items={[
            'Teleport to crossroads WP - go north',
            'Chamber of sins level 1 - enter map',
            'Kill maligaro',
            'Chamber of sins level 2 - trial',
            'Kill gruest',
            'The northern forest - get WP on the east - enter dread thicket on the west',
            'Collect fireflies',
          ]}
        />
        <ChecklistItem>Town</ChecklistItem>
        <ChecklistItemGroup
          items={['Teleport to northern forest WP - go north', 'Vaal city WP']}
        />
        <ChecklistItem>Town - hand in quests</ChecklistItem>
        <ChecklistItemGroup
          items={[
            'Teleport to vaal city WP - enter temple of decay',
            'Kill arakaali',
          ]}
        />
      </ChecklistContainer>
    </ActContainer>
  ),
})
