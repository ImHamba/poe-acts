import ChecklistItem from './ChecklistItem'

type Props = { items: string[] }
const ChecklistItemGroup = ({ items }: Props) => {
  return items.map((item, i) => <ChecklistItem key={i}>{item}</ChecklistItem>)
}

export default ChecklistItemGroup
