import React, { useState } from "react"
import { Modal, Button, Typography, Divider, Grid, Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DataFrame from 'dataframe-js'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}))

export const DataImportModal = () => {
    const [dataImportModalOpen, setDataImportModalOpen] = useState(false)
    const [selectedData, setSelectedData] = useState(null)


    const onDataImportModalClose = () => {
        setDataImportModalOpen(false)
    }

    const onDataImportButtonClick = () => {
        setDataImportModalOpen(true)
    }

    const onFileSelect = (event) => {
        setSelectedData(event.target.files[0])
    }

    const onFileDelete = (event) => {
        setSelectedData(null)
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        if (selectedData) {
            const df = await DataFrame.fromCSV(selectedData).then(df => df)
            window.localStorage.setItem('data', JSON.stringify(df))
            setDataImportModalOpen(false)
            setSelectedData(null)
        }
    }

    const classes = useStyles()

    return (
        <>
            <Button variant="contained" color="primary" onClick={onDataImportButtonClick} disableElevation>Import Data</Button>
            <Modal open={dataImportModalOpen} onClose={onDataImportModalClose} className={classes.modal}>
                <div className={classes.paper}>
                    <Typography variant="h6" style={{padding: "10px"}} >Import CSV data exported from your Strong App</Typography>
                    <Divider/>
                    <form onSubmit={onSubmit}>
                        <div style={{padding: "10px"}}>
                        <Grid container>
                            <Grid item xs={6}>
                                { selectedData ?
                                    (<Button type="submit" variant="contained" color="primary">Import</Button>)
                                    :
                                    (<Button
                                        variant="contained"
                                        component="label"
                                        color="primary"                                        
                                    >
                                        Select file
                                        <input
                                            accept=".csv"
                                            type="file"
                                            style={{ display: "none" }}
                                            onChange={onFileSelect}
                                        />
                                    </Button>)
                                }
                            </Grid>
                            <Grid item xs={6}>
                            { selectedData ?
                                (
                                    <Chip label={selectedData.name} onDelete={onFileDelete}/>
                                ) : null
                            }    
                            </Grid>
                        </Grid>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    )
}