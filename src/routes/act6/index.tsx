import ActContainer from '@/lib/reuseable/ActContainer'
import ChecklistContainer from '@/lib/reuseable/ChecklistContainer'
import ChecklistItem from '@/lib/reuseable/ChecklistItem'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/act6/')({
  component: () => (
    <ActContainer act={6}>
      <ChecklistContainer>
        <ChecklistItem>Start lily quest</ChecklistItem>
      </ChecklistContainer>
    </ActContainer>
  ),
})
