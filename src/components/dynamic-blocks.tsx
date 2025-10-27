import Image from 'next/image'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type RichTextBlock = {
  __component: 'shared.rich-text'
  id: number
  body: string
}

type MediaBlock = {
  __component: 'shared.media'
  id: number
  file: {url: string; width: number; height: number}
}

type DynamicBlocksProps = {
  blocks: (RichTextBlock | MediaBlock)[]
}

export default function DynamicBlocks({blocks}: DynamicBlocksProps) {
  return (
    <div className="[&>p>a]:underline [&>h2]:text-2xl [&>h2]:font-heading [&>h2]:font-bold [&>h3]:text-2xl [&>h3]:text-blue-400 [&>blockquote]:bg-amber-200 [&>blockquote]:p-2 [&>blockquote]:text-pretty [&>blockquote]:font-mono [&>blockquote]:leading-relaxed [&>blockquote]:my-4 [&>p]:text-pretty [&>p]:font-mono [&>p]:leading-relaxed [&>p]:my-4 [&>ol]:list-decimal [&>ul]:list-disc [&>ul]:mb-4 [&>ol>li]:ml-12 [&>ol>li]:mt-4 [&>ul>li]:ml-12 [&>ul>li]:mt-4 [&>img]:max-w-[800px] [&>img]:mx-auto">
      {blocks.map(block => {
        switch (block.__component) {
          case 'shared.rich-text':
            return (
              <Markdown key={block.id} remarkPlugins={[remarkGfm]}>
                {block.body}
              </Markdown>
            )
          case 'shared.media':
            return (
              <Image
                key={block.id}
                src={block.file.url}
                alt=""
                layout="responsive"
                width={block.file.width}
                height={block.file.height}
              />
            )
        }
      })}
    </div>
  )
}
