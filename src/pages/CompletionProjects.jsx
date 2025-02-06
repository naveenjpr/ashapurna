import React from "react"
import { useParams } from "react-router"
import { properties } from "../AllsliderData/slider"

export default function CompletionProjects() {
  let params = useParams()
  let id = params.id 
  console.log(id) 

  // Filter the properties array based on the 'link' property
  let singledata = properties.filter((v) => v.link === id) // Compare the 'link' from the URL with the 'link' in properties
  console.log(singledata) // Logs the filtered project data

  // If no data is found, show "Project not found"
  if (singledata.length === 0) {
    return <div>Project not found</div>
  }

  let project = singledata[0] // Access the first matching project

  return (
    <div>
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>{project.location}</p>
      <p>{project.availability}</p>
      <img src={project.logo} alt={`${project.name} logo`} />
    </div>
  )
}
