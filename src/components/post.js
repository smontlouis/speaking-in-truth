import glamorous from 'glamorous'
import { rhythm } from '../utils/typography'

const { Div, H1 } = glamorous

const Post = ({title, html}) => (
  <article>
    <H1
      maxWidth={770}
      lineHeight={rhythm(5 / 3)}
    >
      {title}
    </H1>
    <Div
      maxWidth={770}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </article>
)

export default Post
