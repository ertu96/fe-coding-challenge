import { memo } from 'react'

type ContentCardHeaderProps = {
  label: string
}

const ContentCardHeader = ({ label }: ContentCardHeaderProps) => {
  return <div className="text-center text-xl underline">{label}</div>
}

export default memo(ContentCardHeader)
