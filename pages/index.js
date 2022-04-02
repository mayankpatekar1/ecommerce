/* eslint-disable react/no-unescaped-entities */
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import Layout from '../components/Layout'
import data from '../utils/data'
import NextLink from 'next/link';
import { Curosel } from '../components/Curosel';

export default function Home() {
  return (
    <Layout>
    <div >
    <Curosel />

      <h1>
        Men's Clothings
      </h1>
      
      <Grid container spacing={3}>
      {data.ManProducts.map((product)=>(
        <Grid item md={4} xs={6} key={product.name}>
        <Card>
        <NextLink href={`/product/${product.slug}`} passHref>
          <CardActionArea>
            <CardMedia 
            component="img" 
            image={product.image} 
            title={product.name}>
            </CardMedia>
            <CardContent>
              <Typography>
                {product.name}
              </Typography>
            </CardContent>
          </CardActionArea>
          </NextLink>
          <CardActions>
            <Typography>${product.price}</Typography>
            <Button size="small" color="primary">Add to cart</Button>
          </CardActions>
        </Card>
        </Grid>
      ))}
      </Grid>
      <h1>
        Women's Clothings
      </h1>
      <Grid container spacing={3}>
      {data.WomenProducts.map((product)=>(
        <Grid item md={4} xs={6} key={product.name}>
        <Card>
        <NextLink href={`/product/${product.slug}`} passHref>
          <CardActionArea>
            <CardMedia 
            component="img" 
            image={product.image} 
            title={product.name}>
            </CardMedia>
            <CardContent>
              <Typography>
                {product.name}
              </Typography>
            </CardContent>
          </CardActionArea>
          </NextLink>
          <CardActions>
            <Typography>${product.price}</Typography>
            <Button size="small" color="primary">Add to cart</Button>
          </CardActions>
        </Card>
        </Grid>
      ))}
      </Grid>
    </div>
    </Layout>
  )
}
