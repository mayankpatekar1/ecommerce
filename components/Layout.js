import { AppBar, Container, Link, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import NextLink from 'next/link';
import React from 'react';
import useStyles from '../utils/styles';

const Layout = ({title,description,children}) => {
    const classes = useStyles();
  return (
    <div>
      <Head>
          <title>{title ? `${title}-Ecommerce website` : 'Ecommerce Website'}</title>
          {description && <meta name="description" content={description}></meta>}
      </Head>
      <AppBar position="static" className={classes.navbar}>
      <Toolbar>
      <NextLink href="/" passHref>
          <Link>
        <Typography className={classes.brand}>Ecommerce</Typography>      
          </Link>
      </NextLink>

      <div className={classes.grow}></div>
          
      <div>
          <NextLink href="/cart" passHref>
          <Link>Cart</Link>
          </NextLink>
      </div>

      </Toolbar>
      </AppBar>
      <Container className={classes.main}>
          {children}
      </Container>
      <footer className={classes.footer}>
          <Typography>
              All rights reserved Mayank Patekar - 2022
          </Typography>
      </footer>
    </div>
  )
}

export default Layout
