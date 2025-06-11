import ActContainer from '@/lib/reuseable/ActContainer'
import ChecklistContainer from '@/lib/reuseable/ChecklistContainer'
import ChecklistItem from '@/lib/reuseable/ChecklistItem'
import ChecklistItemGroup from '@/lib/reuseable/ChecklistItemGroup'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/act6/')({
  component: () => (
    <ActContainer act={6} regex="-\w-.-|(-\w){4}|(-\w){5}|nne|rint">
      <ChecklistContainer>
        <ChecklistItemGroup
          items={['Start lily quest', 'Clear twilight strand']}
        />
        <ChecklistItem>Town</ChecklistItem>
        <ChecklistItemGroup
          items={[
            'Mudflats - kill unique mob for eye of conquest',
            'Karui fortress - kill tukohama',
            'Lower prison - trial',
            'Kill shavronne and brutus',
            "Prisoner's gate - kill abberath",
            'Riverways WP - go north west to the wetlands',
            'Kill rhyslatha',
          ]}
        />
        <ChecklistItem>Town</ChecklistItem>
        <ChecklistItemGroup
          items={['Teleport to Riverways WP - go east', 'Kill brine king']}
        />
      </ChecklistContainer>
    </ActContainer>
  ),
})
