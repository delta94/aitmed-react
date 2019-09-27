import React from 'react'
import { muiTheme } from 'storybook-addon-material-ui'
import { storiesOf } from '@storybook/react'
import { MdVpnLock, MdMusicVideo, MdPermDataSetting } from 'react-icons/md'
import { FaFilePdf, FaHaykal } from 'react-icons/fa'
import PhotoList from '../modules/PhotoList'
import Button from '../components/Button'
import readme from './docs/PhotoList/readme.md'
import theme from '../config/theme'

const images = [
  {
    src:
      'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/the-power-of-higher-order-functions-in-javascript/thumbnail.jpg',
    ext: '.pdf',
    title: 'The dog was unleased on friday',
    description: 'This is the description for the leased dog ',
    hasVideo: true,
  },
  {
    src:
      'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/build-your-app-with-just-react-hooks/thumbnail.jpg',
    title: 'This is the title. Nothing new',
  },
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/6-ways-to-help-keep-you-going-when-working-on-javascript-projects/thumbnail.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/8-miraculous-ways-to-bolster-your-react-apps/thumbnail.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/keeping-ui-completely-synchronized-when-uploading-files-in-react/thumbnail.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/26-miraculous-vscode-tools-for-javascript-developers-in-2019/todotree1.jpg',
  {
    src:
      'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/26-miraculous-vscode-tools-for-javascript-developers-in-2019/bracketpaircolorizer.jpg',
    title: '26 tools',
    hasVideo: true,
  },
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/8-miraculous-ways-to-bolster-your-react-apps/memoize1.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/8-miraculous-ways-to-bolster-your-react-apps/memoize2.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/build-a-cool-character-select-screen-in-react/destroyer.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/build-a-cool-character-select-screen-in-react/knight.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/build-a-cool-character-select-screen-in-react/morph1.jpg',
  {
    src:
      'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/build-a-cool-character-select-screen-in-react/novice2.jpg',
    description: 'a character select screen in react for your react apps',
    ext: '.png',
  },
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/build-a-cool-character-select-screen-in-react/sage.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/build-a-cool-character-select-screen-in-react/selectionscreen1.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/build-a-cool-character-select-screen-in-react/shapeshifter.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/build-a-cool-character-select-screen-in-react/sorceress.jpg',
]

function Wrapper({ children, expanded, btnProps }: any) {
  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <div>
        <Button type="button" {...btnProps}>
          {expanded ? 'COLLAPSE' : 'MORE'}
        </Button>
      </div>
      {children}
    </div>
  )
}

function onClick(args, e) {
  console.log(args)
  console.log(e)
}

const actions = [
  { name: 'edit', onClick },
  {
    name: 'cancel',
    title: 'what',
    onClick,
  },
  {
    component: function(props) {
      return <MdVpnLock style={{ color: 'salmon' }} />
    },
  },
  {
    name: 'music-video',
    component: function({ action, item, index }) {
      if (item && item.hasVideo) {
        return (
          <MdMusicVideo style={{ transform: 'scale(2.3)', color: 'hotpink' }} />
        )
      } else {
        const style: any = {}
        const Icon = (props) => <MdPermDataSetting {...props} />
        // If this is the last item in list then apply a black background to indicate to the user that this is the end
        if (index === images.length - 1) {
          style.color = 'hotpink'
          style.border = '1px solid magenta'
          style.borderRadius = '50%'
          style.transform = 'scale(2)'
        }
        return <Icon style={style} />
      }
    },
  },
]

storiesOf('PhotoList', module)
  .addDecorator(muiTheme(theme))
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add('default', () => (
    <Wrapper>
      <PhotoList items={items} />
    </Wrapper>
  ))
  .add('props.actions', () => (
    <Wrapper>
      <PhotoList items={items} actions={actions} />
    </Wrapper>
  ))
  .add('props.icons', () => {
    return React.createElement(() => {
      const [expanded, setExpanded] = React.useState(false)
      const toggle = () => setExpanded((v) => !v)
      const items = expanded ? images : [images[0], images[1], images[2]]

      return (
        <Wrapper expanded={expanded} btnProps={{ onClick: toggle }}>
          <PhotoList
            actions={actions}
            items={items}
            icons={{
              pdf: {
                // round: true,
                component: FaFilePdf,
              },
              edit: {
                component: FaHaykal,
              },
            }}
          />
        </Wrapper>
      )
    })
  })