import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar:{
        backgroundColor : '#ffffff',
        color: '#000000',
        '& a': {
            color: '#203030',
            marginLeft:10,
        },
    },
    brand:{
        fontWeight: 'bold',
        fontSize: '1.5rem',
        border: '1px solid black',
        padding:'4px'
    },
    grow:{
        flexGrow :1,
    },
    main:{
        minHeight:'80vh',
    },
    footer:{
        marginTop:10,
        textAlign: 'center',
        color:'white',
        backgroundColor:'#000000',
    },
    section:{
        marginTop:10,
        marginBottom:10,
    },
    mySlides:{
        display:'none',
    },
    img:{
        verticalAlign:'middle',
    },
    slideshowContainer:{
        maxWidth:'1000px',
        position:'relative',
        margin:'auto',
    },
    prev:{
        cursor:'pointer',
        position:'absolute',
        top:'50%',
        width:'auto',
        padding: 16,
        marginTop: -22,
        color:'white',
        fontWeight:'bold',
        fontSize:18,
        transition: '0.6s ease',
        borderRadius:'0 10px 10px 0',
        userSelect:'none',
        border:'2px solid black',
    },
    next:{
        cursor:'pointer',
        position:'absolute',
        top:'50%',
        right:0,
        width:'auto',
        padding: 16,
        marginTop: -22,
        color:'white',
        fontWeight:'bold',
        fontSize:18,
        transition: '0.6s ease',
        borderRadius:'10px 0 0 10px',
        userSelect:'none',
        border:'2px solid black',
    },
    dot:{
        cursor:'pointer',
        height: '15px',
        width:'15px',
        margin: '0 2px',
        backgroundColor:'#000000',
        borderRadius:'50%',
        disable:'inline-block',
        transition:'background-color 0.6s ease',

    },
    alginCenter:{
        textAlign:'center',
    }
    
});

export default useStyles;