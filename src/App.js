import React, { useState, useEffect } from 'react';
import { getApiRoot, projectKey } from './lib'
import Button from '@mui/material/Button';
import './App.css'

function App() {
  const [projectDetails, setProjectDetails] = useState({})

  const getProject = async () => {
    try {
      const project = await getApiRoot()
        .withProjectKey({ projectKey })
        // .products()
        // .customers()
        .categories()
        .get()
        .execute();

      setProjectDetails(project.body);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getProject()
  }, [])

  return (
    <>
      <div>Project Details</div>
      <Button variant="contained">Hello World</Button>
      {JSON.stringify(projectDetails, undefined, 2)}
    </>
  )
}

export default App;
