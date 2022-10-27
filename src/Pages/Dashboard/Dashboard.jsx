import React from 'react'
import CardTable from '../../Components/CardTable';

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardTable />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardTable />
        </div>
      </div>
    </>
  )
}

export default Dashboard;