import React, { useEffect } from "react"
import { DataImportModal } from '../components/DataImportModal'
import { StrongStore } from '../services/store'

const Dashboard = () => {

    useEffect(() => {
        if (window.localStorage.getItem('strongData')) {
            StrongStore.setData(window.localStorage.getItem('strongData'))
            console.log('data loaded!')
        } else {
            console.log('data not loaded!')
        }
    })
    return (  
        <div style={{padding: '70px'}}>    
            <DataImportModal />
        </div>
    )
}

export default Dashboard