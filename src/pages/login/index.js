import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default function Login() {
    const classes = useStyles();
    return (
        <>
            <h1 className={classes.mainHeader}>Login</h1>
        </>
    )
}

const useStyles = makeStyles({
    mainHeader: {
        color: "#DDD"
    }
});