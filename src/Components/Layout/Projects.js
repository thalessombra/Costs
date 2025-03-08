import {useLocation} from 'react-router-dom' 
import Message from '../Layout/Message'
import styles from './Projects.module.css'
import Container from '../Layout/Container'
import LinkButton from '../Pages/LinkButton'
import ProjectCard from '../Projects/ProjectCard'
import { useState,useEffect } from 'react'
function Projects() {

     const [projects, setProjects] =useState([]) 
     const [projectMessage,setProjectMessage ] = useState('')


      const location = useLocation()
      let message =''
      if(location.state){
        message = location.state.message
      } 

      useEffect(() => {
            fetch('http://localhost:5000/projects', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then((resp) => resp.json())
              .then((data) => {
                setProjects(data)  
              })
          .catch((err) => console.log(err))
        
      }, [])

      function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then(() => {
        
            setProjects(projects.filter((project) => project.id !== id),
            setProjectMessage('Projeto removido com sucesso!')
        )
           
          })
      }
      
    return (
         <div className={styles.project_container}>
         <div className={styles.title_container}>
            <h1>Meus projetos</h1>
            <LinkButton to='/newproject' text='Criar novo projeto' />
            </div>
           {message &&  <Message type="success" msg={message} /> }
           {projectMessage &&  <Message type="success" msg={projectMessage} /> }
           <Container customclass="start">
           {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
              
            />
          ))}
           </Container>
         </div>

    )
}
export default Projects;