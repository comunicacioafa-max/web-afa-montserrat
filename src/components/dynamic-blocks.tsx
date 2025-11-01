'use client'
import Image from 'next/image'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Autoplay from 'embla-carousel-autoplay'
import {Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel'

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

type SliderBlock = {
  __component: 'shared.slider'
  id: number
  files: {url: string; width: number; height: number}[]
}

type DynamicBlocksProps = {
  blocks: (RichTextBlock | MediaBlock | SliderBlock)[]
}

export default function DynamicBlocks({blocks}: DynamicBlocksProps) {
  return (
    <div className="[&_a]:underline [&_a]:text-blue-400 [&>h2]:text-2xl [&>h2]:font-heading [&>h2]:font-bold [&>h3]:text-2xl [&>h3]:text-blue-400 [&>blockquote]:bg-amber-200 [&>blockquote]:p-2 [&>blockquote]:text-pretty [&>blockquote]:font-mono [&>blockquote]:leading-relaxed [&>blockquote]:my-4 [&>p]:text-pretty [&>p]:font-mono [&>p]:leading-relaxed [&>p]:my-4 [&>ol]:list-decimal [&>ul]:list-disc [&>ul]:mb-4 [&>ol>li]:ml-12 [&>ol>li]:mt-4 [&>ul>li]:ml-12 [&>ul>li]:mt-4">
      {blocks.map(block => {
        switch (block.__component) {
          case 'shared.rich-text':
            return (
              <Markdown key={block.id} remarkPlugins={[remarkGfm]}>
                {block.body}
              </Markdown>
            )
          case 'shared.media':
            const imageIsVertical = block.file.height > block.file.width ? true : false
            if (imageIsVertical)
              return (
                <div key={block.id} className="[&_img]:max-w-[400px] [&_img]:object-fit [&_img]:mx-auto my-6">
                  <Image
                    src={block.file.url}
                    alt=""
                    layout="responsive"
                    width={block.file.width}
                    height={block.file.height}
                  />
                </div>
              )
            else
              return (
                <div
                  key={block.id}
                  className={`[&_img]:max-h-[400px] [&_img]:max-w-[600px] [&_img]:max-w-auto [&_img]:object-fit [&_img]:mx-auto my-6`}
                >
                  <Image
                    key={block.id}
                    src={block.file.url}
                    alt=""
                    layout="responsive"
                    width={block.file.width}
                    height={block.file.height}
                  />
                </div>
              )
          case 'shared.slider':
            return (
              <div key={block.id} className="max-w-[600px] mx-auto">
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 2000
                    })
                  ]}
                >
                  <CarouselContent>
                    {block.files.map((file, index) => (
                      <CarouselItem key={index} className="flex justify-center">
                        <div
                          className={`[&_img]:max-h-[400px] [&_img]:max-w-[600px] [&_img]:max-w-auto [&_img]:object-fit [&_img]:mx-auto my-6`}
                        >
                          <Image src={file.url} alt="" layout="responsive" width={file.width} height={file.height} />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
