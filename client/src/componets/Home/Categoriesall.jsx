import React from 'react'
import { Link } from "react-router-dom"
import { CategoriesDetas } from './Common/CategoriesDate'
import { Button, makeStyles, Table, TableHead, TableCell, TableRow, TableBody, Box } from "@material-ui/core"
import Connectus from './post/Connectus'

const useStyles = makeStyles({
    buton: {
        margin: 20,
        padding: 8,
        background: "6495ED",
        color: "#fff",
        width: "60%",

    }, table: {
        border: "1px solid rgba(224 ,224 , 224 , 1)"
    },
    link: {
        textDecoration: "none",
        color: "inherit"
    }

})
const Categoriesall = () => {
    const classes = useStyles();
    return (
        <>
            <Link to="/createpost" className={classes.link}>
                <Button variant="contained" color="primary" className={classes.buton}>Create Blog</Button>
            </Link>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>

                        <TableCell>
                            <Link to={`/`} className={classes.link}>
                             All Categories
                             </Link>
                             </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        CategoriesDetas.map(category => (
                            <TableRow>
                                <TableCell>
                                    <Link to={`/?categories=${category}`} className={classes.link}>
                                    {category}
                                    </Link>
                                    </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            <Box>
                <Connectus/>
            </Box>
            
        </>
    )
}

export default Categoriesall;
