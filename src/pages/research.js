import React, { Component } from 'react'
import { Paper, Button, Typography } from '@material-ui/core'

// IMAGES
import marbleIMG from '../img/research/marble1.png'
import voxelIMG from '../img/research/marble1voxel.png'
//
import urocposter2016IMG from '../img/research/UROC_Poster_2016.png'
import urocposter2017IMG from '../img/research/UROC_Poster_2017.png'

import Banner from '../components/banner'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {} from '@fortawesome/free-brands-svg-icons'
// import {} from '@fortawesome/free-solid-svg-icons'

const styles = {
  container: {
    //   display: 'flex',
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   justifyContent: 'space-between',
    margin: '16px',
    padding: '16px',
    backgroundColor: '#f7fafd'
  }
}

const FA_SIZE = '5x'
const ICON_SIZE = '80px'

export default class Research extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: marbleIMG,
      poster: urocposter2017IMG
    }
  }
  render() {
    return (
      <div>
        <Banner text="Research" />
        <div>
          <Paper style={styles.container}>
            <img
              style={{
                maxWidth: '100%',
                borderRadius: '10px',
                boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 10px 4px'
              }}
              src={this.state.image}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h5" style={{ margin: '0px 30px' }}>
                Stone Marble Sponza Scene
              </Typography>
              <div>
                <Button
                  onClick={() => {
                    this.setState({ image: marbleIMG })
                  }}
                  style={{ margin: '0px 20px', textTransform: 'none' }}
                >
                  Texture
                </Button>
                <Button
                  onClick={() => {
                    this.setState({ image: voxelIMG })
                  }}
                  style={{ margin: '0px 20px', textTransform: 'none' }}
                >
                  Voxel
                </Button>
              </div>
            </div>
          </Paper>
          <Paper style={styles.container}>
            <img
              style={{
                maxWidth: '100%',
                borderRadius: '10px',
                boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 10px 4px'
              }}
              src={this.state.poster}
            />
            <Typography>Research Posters</Typography>
            <Button
              onClick={() => {
                this.setState({ poster: urocposter2017IMG })
              }}
            >
              2017
            </Button>
            <Button
              onClick={() => {
                this.setState({ poster: urocposter2016IMG })
              }}
            >
              2016
            </Button>
          </Paper>
        </div>
      </div>
    )
  }
}
