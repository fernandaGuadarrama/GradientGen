import React from 'react';
import './gradient.css'
import { Grid, Card, Button, Box } from '@mui/material';


class GradientGen extends React.Component{
    state={
        color1: '#861657',
        color2: '#ffa69e'
    }
    getRandomColor = () => {
        return "#" + Math.floor(Math.random()*16777215).toString(16)
    }

    createRandomGradient = () => {
        this.setState({color1: this.getRandomColor(), color2: this.getRandomColor()})
    }
    render(){
        const {color1, color2} = this.state
        return(
        <Grid
        container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >

            <Box sx={{ justifyContent: 'center' }}>
            <h1>Gradient Generator</h1>
            <h4>by Fernanda Guadarrama</h4>
            <Grid className='gradientBox' style={{marginTop: '20px', justifyContent: 'center'}}>
                <Grid item xs={11} sm={11} md={3} lg={3} xl={3}>
                    <Card 
                        style={{
                            height: 450,
                            width: 450,
                            justifyContent: 'center',
                            border: `5px solid white`,
                            backgroundColor: `${color1}`,
                            backgroundImage: `linear-gradient(326deg, ${color1} 0%, ${color2} 74%)`}}>
                     </Card>
                </Grid>

                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    
                >
                <Grid item xs={11} sm={11} md={12} lg={12} xl={12} style={{marginTop: 20}}>
                    <Grid container wrap="nowrap" item spacing={8} justify= 'center' alignItems="center"
                    >
                    <Grid  item xs={2} sm={2} md={1} lg={1} xl={1}>
                        <Card className='dot pointer' style={{border: '4px solid white',borderRadius:60, backgroundColor: color1, justify: 'center'}}></Card>
                    </Grid>
                    <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
                        <Card className='dot pointer' style={{border: '4px solid white',borderRadius:60, backgroundColor: color2, justify: 'center'}}></Card>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={11} sm={11} md={12} lg={12} xl={12} style={{marginTop: 20}}>
                <Grid container alignItems="center" justify= 'center'>
                    <Button className='gradientBackGreenBlue'
                    onClick={this.createRandomGradient}
                    style={{fontWeight: 'bold', fontSize: "12px", color: 'white', backgroundColor: 'rgb(128, 182, 70)', borderRadius: '20px', width: '100%', marginBottom: "40%"}}>Generate Gradient</Button>
                </Grid>
            </Grid>
                </Grid>
                </Grid>
                </Box>
        </Grid>
        )
    }
}

export default GradientGen