import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { api } from '../../services/api';

export default function Product(props) {
    const [product, setProduct] = useState({})
    const classes = useStyles()

    useEffect(async () => {
        const { id } = props.match.params
        const response = await api.get(`/products/${id}`)
        setProduct(response.data);
    }, {})

    return (
        <div className={classes.productInfo}>
            <h1 className={classes.title}>{product.title}</h1>
            <p className={classes.description}>{product.description}</p>
            <p className={classes.description}>
                URL: <a className={classes.url} href={product.url}>
                    {product.url}
                </a>
            </p>
        </div>
    )
}

const useStyles = makeStyles({
    productInfo: {
        maxWidth: 700,
        margin: "20px auto 0",
        padding: "20px",
        background: "#FFF",
        borderRadius: "5px",
        border: "1px solid #DDD",
    },
    title: {
        fontSize: 32
    },
    description: {
        color: "#666",
        lineHeight: "24px",
        marginTop: 5,
    },
    url: {
        color: "#069"
    }

})