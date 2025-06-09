import ChecklistContainer from '@/lib/reuseable/ChecklistContainer'
import ChecklistItem from '@/lib/reuseable/ChecklistItem'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/act1/')({
  component: () => (
    <ChecklistContainer>
      <ChecklistItem>abc</ChecklistItem>
      <ChecklistItem>abc</ChecklistItem>
    </ChecklistContainer>
  ),
})
