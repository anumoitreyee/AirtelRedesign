import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import image1 from './../Assets/loki.jpg';
import image2 from './../Assets/rangbaaz.jpg';
import image3 from './../Assets/rabindra.jpg';
import image4 from './../Assets/mastani.jpg';
import image5 from './../Assets/herapheri.jpg';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


  
  const itemData = [
    {
      img1: image1,
       title: 'Disney + Hotstar',
      author: 'only ₹399',
      },
  ];
  const itemData2 = [
    {
    img2: image2,
     title: 'Zee5',
    author: 'Upto 55% off',
    },
   
  ];
  const itemData3 = [
    {
    img3: image3,
     title: 'Epicon',
    author: 'Starts from ₹29',
    },
   
  ];
  const itemData4 = [
    {
    img4: image4,
     title: 'Eros now',
    author: 'Only ₹39',
    },
   
  ];
  const itemData5 = [
    {
    img5: image5,
     title: 'ShemarooMe',
    author: 'Starts from ₹129',
    },
   
  ];
 
export default function SingleLineImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <ImageList className={classes.imageList} cols={1.5} rowHeight="500">
        {itemData.map((item) => (
          <ImageListItem key={item.img1}>
            <img src={item.img1} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              
            />
          </ImageListItem>
        ))}
        {itemData2.map((item) => (
          <ImageListItem key={item.img2}>
            <img src={item.img2} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              
            />
          </ImageListItem>
        ))}
        {itemData3.map((item) => (
          <ImageListItem key={item.img3}>
            <img src={item.img3} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              
            />
          </ImageListItem>
        ))}
        {itemData4.map((item) => (
          <ImageListItem key={item.img4}>
            <img src={item.img4} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              
            />
          </ImageListItem>
        ))}
        {itemData5.map((item) => (
          <ImageListItem key={item.img5}>
            <img src={item.img5} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              
            />
          </ImageListItem>
        ))}
      </ImageList>
      </Grid>
    </div>
  );
}