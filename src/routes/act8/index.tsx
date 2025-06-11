import ActContainer from '@/lib/reuseable/ActContainer'
import ChecklistContainer from '@/lib/reuseable/ChecklistContainer'
import ChecklistItem from '@/lib/reuseable/ChecklistItem'
import ChecklistItemGroup from '@/lib/reuseable/ChecklistItemGroup'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/act8/')({
  component: () => (
    <ActContainer act={8} regex="-\w-.-|(-\w){4}|(-\w){5}|nne|rint">
      <ChecklistContainer>
        <ChecklistItemGroup items={['Cruel lab']} />
        <ChecklistItem>Town</ChecklistItem>
        <ChecklistItemGroup
          items={[
            'Kill doedre',
            'Go east to the quay',
            'The quay - stick to the west side to find the ankh',
            'The quay - Kill tolman',
            'Grain gate - kill gemling legionnaires northward',
            'Temple of solaris level 1 WP - go toward small teacups side',
            'Temple of solaris level 2 - kill dawn',
          ]}
        />
        <ChecklistItem>Town</ChecklistItem>
        <ChecklistItemGroup
          items={[
            'Teleport to temple of solaris WP - continue',
            'Pass through harbour bridge',
            'Lunaris concourse - enter bath house in south west',
            'Bath house - trial',
            'High gardens - kill yugul',
          ]}
        />
        <ChecklistItem>Town</ChecklistItem>
        <ChecklistItemGroup
          items={['Teleport to lunaris concourse WP - go north', 'Kill dusk']}
        />
        <ChecklistItem>Town</ChecklistItem>
        <ChecklistItemGroup
          items={[
            'Teleport to solaris concourse WP - go west',
            'Kill solaris and lunaris',
          ]}
        />
      </ChecklistContainer>
    </ActContainer>
  ),
})
