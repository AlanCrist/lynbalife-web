import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { api } from "../../services/api";
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

export default function Main() {
    const [products, setProducts] = useState([])
    const [productInfo, setProductInfo] = useState({})
    const [page, setPage] = useState(1)

    useEffect(() => {
        loadProducts();
    }, [])


    async function loadProducts(pag = 1) {
        const response = await api.get(`/products?page=${pag}`);
        const { docs, ...productInfo } = response.data;

        setProducts(response.data.docs);
        setProductInfo(productInfo);
        setPage(pag)
    };

    function nextPage() {
        if (page === productInfo.pages)
            return;
        const pageNumber = page + 1;
        loadProducts(pageNumber);
    }

    function prevPage() {
        if (page === 1) return;

        const pageNumber = page - 1;

        loadProducts(pageNumber)
    }

    const classes = useStyles()

    return (
        <div className={classes.productList}>
            {products.map(product => (
                <article className={classes.conteudo} key={product._id}>
                    <strong>{product.title}</strong>
                    <p className={classes.description}>{product.description}</p>
                    <Link className={classes.link} to={`/products/${product._id}`}>Acessar</Link>
                </article>
            ))}
            <div className={classes.actions}>
                <Button disabled={page === 1} onClick={prevPage} >Anterior</Button>
                <Button disabled={page === productInfo.pages} onClick={nextPage} >Próximo</Button>
            </div>
        </div>
    )
}


const useStyles = makeStyles({
    productList: {
        maxWidth: "700px",
        margin: "20px auto 0",
        padding: "0 20px"
    },
    conteudo: {
        background: "#FFF",
        border: "1px solid #DDD",
        borderRadius: "5px",
        padding: "20px",
        marginBottom: "20px",
    },
    description: {
        fontSize: "16px",
        color: "#999",
        marginTop: "5px",
        lineHeight: "24px",
    },
    link: {
        height: 42,
        borderRadius: 5,
        border: "2px solid #da552f",
        background: "none",
        marginTop: 10,
        color: "#da552f",
        fontWeight: "bold",
        fontSize: 16,
        textDecoration: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.2s",
        '&:hover': {
            background: "#da552f",
            color: "#FFF"
        }
    },
    actions: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 20
    },
});