import ActContainer from '@/lib/reuseable/ActContainer'
import ChecklistContainer from '@/lib/reuseable/ChecklistContainer'
import ChecklistItem from '@/lib/reuseable/ChecklistItem'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/act5/')({
  component: () => (
    <ActContainer act={5} regex="-\w-.-|(-\w){4}|(-\w){5}|nne|rint">
      <ChecklistContainer>
        <ChecklistItem>Skip town</ChecklistItem>
        <ChecklistItem>
          Slave pens - miasmeter north west, kill justicar casticus north east
        </ChecklistItem>
        <ChecklistItem>Templar courts</ChecklistItem>
        <ChecklistItem>Chamber of innocence - kill innocence</ChecklistItem>
        <ChecklistItem>The ossuary - get sign of purity</ChecklistItem>
        <ChecklistItem>Town</ChecklistItem>
        <ChecklistItem>
          Teleport to ruined square - drop portal in main western square
        </ChecklistItem>
        <ChecklistItem>
          Go to reliquary in south west - get 3 quest items
        </ChecklistItem>
        <ChecklistItem>Reliquary WP back to town - DONT LOGOUT</ChecklistItem>
        <ChecklistItem>Town</ChecklistItem>
        <ChecklistItem>Take portal - go to caethdral rooftop</ChecklistItem>
        <ChecklistItem>Kill kitava</ChecklistItem>
      </ChecklistContainer>
    </ActContainer>
  ),
})
