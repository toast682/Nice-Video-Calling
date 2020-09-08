import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {

    }
});

class User extends Component {
    render() {
        return (
            <Container maxWidth="sm">
                <Card variant="outlined">
                    <CardContent>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography variant="h5">
                                Sign In
                            </Typography>
                        </div >
                    </CardContent>
                    <CardActions>
                        <div style={{}}>
                            <TextField variant="outlined" label="Username" />
                            <Button variant="outlined" colour="secondary"> Start</Button>
                        </div>
                    </CardActions>
                </Card>
            </Container>
        )
    }
}

export default User
