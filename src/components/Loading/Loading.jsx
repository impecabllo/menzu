import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import styles from './Loading.module.sass'

const Loading = ({ size = 40, thickness = 2.5 }) => {
  return (
    <div className={ styles.root }>
      <CircularProgress
        size={ size }
        thickness={ thickness }
        className={ styles.progress }
      />
    </div>
  )
}

export default Loading