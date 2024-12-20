

export default function ErrorMessge({children}: {children: React.ReactNode}) {
  return (
    <p className="text-center my-2 bg-red-400 text-white font-bold p-1 uppercase text-sm">{children}</p>
  )
}
