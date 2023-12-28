export default function Link (props) {
  return (
    <li>
      <a href = {`#${props.title}`}>{props.title}</a>
    </li>
  )
}