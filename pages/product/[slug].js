import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Button, Card, Grid, Link, List, ListItem, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import Layout from '../../components/Layout';
import useStyles from '../../utils/styles';
let {slug} = 'men';
export default function ProductScreen() {
    const classes = useStyles();
    const router = useRouter();
    {slug}= router.query;
    let product = {};
    // console.log(typeof(slug));
    if(slug.startsWith('men')){
        product = data.ManProducts.find((a)=> a.slug === slug);
    }else{
         product = data.WomenProducts.find((a)=> a.slug === slug);
    }


    if(!product){
        return <div>Product Not Found</div>
    }
  return (
    <Layout title={product.name} description={product.description}>
    <div className={classes.section}>
        <NextLink href="/" passHref>
        <Link>Back to Home page</Link>
        </NextLink>
    </div>
    <Grid container spacing={1}>
       <Grid item md={6} xs={12}>
          <Image 
            src={product.image}
            priority 
            alt={product.name} 
            width={100} 
            height={100} 
            layout="responsive" 
            ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
        <List>
            <ListItem>
            <Typography component="h1">{product.name}</Typography>
            </ListItem>

            <ListItem>
            <Typography>Category: {product.category}</Typography>
            </ListItem>

            <ListItem>
            <Typography>Brand: {product.brand}</Typography>
            </ListItem>

            <ListItem>
            <Typography>Rating:{product.rating} stars ({product.numReviews} reviews)</Typography>  
            </ListItem>
            <ListItem>
                <Typography> Description:{product.description}</Typography>
            </ListItem>
        </List>
        </Grid>
        <Grid item md={3} xs={12}>
        <Card>
            <List>
                <ListItem>
                    <Grid container>
                       <Grid item xs={6}>
                           <Typography>Price</Typography>
                       </Grid>
                       <Grid item xs={6}>
                           <Typography>${product.price}</Typography>
                       </Grid>
                    </Grid>
                </ListItem>
                <ListItem>
                    <Grid container>
                       <Grid item xs={6}>
                           <Typography>Status:</Typography>
                       </Grid>
                       <Grid item xs={6}>
                           <Typography>{product.countInStock>0? 'in stock' : 'out of stock'}</Typography>
                       </Grid>
                    </Grid>
                </ListItem>
                <ListItem>
                    <Button fullWidth variant='contained' color="primary">
                        Add to cart
                    </Button>
                </ListItem>
            </List>
        </Card>
        </Grid>
    </Grid>
    </Layout>
  )
}
