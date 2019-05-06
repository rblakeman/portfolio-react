import React, { useState } from 'react'
import _ from 'lodash'

import { Paper, Button, Divider } from '@material-ui/core'
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 16,
    padding: 16,
    backgroundColor: '#f7fafd'
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    margin: 15,
    maxWidth: 500
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    margin: '15px 0px',
    maxWidth: '500px'
  },

  //left
  title: {
    fontSize: '50px',
    color: '#5a5a5a',
    fontWeight: 400,
    lineHeight: 1,
    marginBottom: 15
  },
  tags: {
    fontSize: '38px',
    color: '#6c757d',
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: '-0.05rem',
    marginTop: 15,
    marginBottom: 20
  },
  description: {
    fontSize: '1.25rem',
    color: '#5a5a5a',
    fontWeight: 300,
    lineHeight: 1.5,
    marginTop: 10
  },

  //right
  picture: {},
  buttons: { alignSelf: 'center' },
  buttonSelected: {
    backgroundColor: 'rgb(2, 117, 216)',
    color: 'white',
    margin: '0px 5px'
  },
  buttonUnselected: {
    backgroundColor: 'white',
    color: 'black',
    margin: '0px 5px'
  }
}

export default function SoftwareProject({
  title,
  tags,
  contents,
  list,
  images,
  icons
}) {
  const [currImage, setCurrImage] = useState(images[0].img)

  const renderLeftSide = () => {
    return (
      <div style={styles.left}>
        <div>
          <div style={styles.title}>{title}</div>
          <div style={styles.tags}>{tags}</div>
          <div style={styles.description}>
            {contents}
            {list ? (list.length > 0 ? renderBulletList() : null) : null}
          </div>
        </div>
        <div style={{ marginTop: '30px' }}>
          {icons ? (icons.length > 0 ? renderIcons() : null) : null}
        </div>
      </div>
    )
  }

  const renderBulletList = () => {
    return (
      <ul>
        {_.map(list, (bullet, idx) => {
          return <li key={idx}>{bullet}</li>
        })}
      </ul>
    )
  }

  const renderIcons = () => {
    return (
      <div>
        {_.map(icons, (icon, idx) => {
          if (icon.type && icon.type === 'fa') {
            return icon.obj
          } else {
            return <img src={icon.img} alt={icon.text} />
          }
        })}
      </div>
    )
  }

  const renderRightSide = () => {
    return (
      <div style={styles.right}>
        <div style={styles.picture}>
          <img
            style={{
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 10px 4px',
              maxWidth: '500px'
            }}
            src={currImage}
            alt="Software Project"
          />
        </div>
        <Divider variant="middle" style={{ margin: '20px 0px' }} />
        <div style={styles.buttons}>
          {_.map(images, (image, idx) => {
            if (currImage === image.img)
              return (
                <Button
                  variant="outlined"
                  style={styles.buttonSelected}
                  key={idx}
                  onClick={(ev) => {
                    ev.preventDefault()
                    setCurrImage(image.img)
                  }}
                >
                  {image.text}
                </Button>
              )
            return (
              <Button
                variant="outlined"
                style={styles.buttonUnselected}
                key={idx}
                onClick={(ev) => {
                  ev.preventDefault()
                  setCurrImage(image.img)
                }}
              >
                {image.text}
              </Button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <Paper style={styles.container}>
      {renderLeftSide()}
      {renderRightSide()}
    </Paper>
  )
}
