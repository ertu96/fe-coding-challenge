import { memo, ReactNode } from 'react'

type ContentCardProps = {
  children: ReactNode
}

const ContentCard = ({ children }: ContentCardProps) => {
  return <div className="rounded-sm border border-gray-400 p-2">{children}</div>
}

export default memo(ContentCard)
