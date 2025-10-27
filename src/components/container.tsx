export default function Container({children}: {children: React.ReactNode}) {
  return <div className="w-full max-w-[80rem] mx-auto px-4 flex flex-col gap-10 my-8">{children}</div>
}
