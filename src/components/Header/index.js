import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default function Header() {
    const classes = useStyles();
    return <header className={classes.mainHeader}>LynbaLife</header>
}

const useStyles = makeStyles({
    mainHeader: {
        width: "100%",
        background: "#fa5b51",
        height: "60px",
        fontSize: "18px",
        fontWeight: "bold",
        color: "#FFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
});