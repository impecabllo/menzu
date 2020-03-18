import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import styles from './Create.module.sass'

const CreatePost = props => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = () => {

  }

  return (
    <div className={ styles.root }>
      <Paper className={ styles.paper }>
        <header className={ styles.header }>
          <Typography variant="h5">
            Create a post
          </Typography>
        </header>
        <form>
          <div className={ styles.formGroup }>
            <TextField
              label="Title"
              className={ styles.textField }
              type="text"
              name="title"
              autoComplete="title"
              fullWidth
              margin="normal"
              variant="outlined"
              value={ title }
              onChange={ (e) => setTitle(e.target.value) }
            />
            <TextField
              label="Content"
              className={ styles.textField }
              type="text"
              name="content"
              fullWidth
              margin="normal"
              variant="outlined"
              value={ content }
              onChange={ (e) => setContent(e.target.value) }
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            size="large"
            disabled={ !title || !content }
            className={ styles.button }
            onClick={ handleSubmit }
            fullWidth
          >
            Create
          </Button>
        </form>
      </Paper>
    </div>
  )
}

export default CreatePost