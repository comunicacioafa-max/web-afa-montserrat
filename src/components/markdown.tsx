import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type MarkdownProps = {
  children: string
}

export default function MarkdownComponent({children}: MarkdownProps) {
  return <Markdown remarkPlugins={[remarkGfm]}>{children}</Markdown>
}
