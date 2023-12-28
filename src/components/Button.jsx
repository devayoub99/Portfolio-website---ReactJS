export default function Button ({children,...props}) {
  return (
    <a {...props}>
      {children}
    </a>
  )
}