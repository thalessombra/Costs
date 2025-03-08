import React from 'react';
import {useNavigate} from 'react-router-dom'
import styles from './NewProject.module.css'
import ProjectForm from '../Projects/ProjectForm';

function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {
        // initialize cost and services
        project.cost = 0
        project.services = []
    
        fetch('http://localhost:5000/projects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(project),
        })
          .then((resp) => resp.json())
          .then((data) => {
            const state = { message: "Projeto criado com sucesso!" };
            navigate("/projects", {state});
          })
      }
    return(
        <div className={styles.container_project}>
            <h1>Criar projeto</h1>
            <p>Crie o seu projeto agora para depois adicionar os serviços.</p>
              <ProjectForm  handleSubmit={createPost} btnText='Criar novo projeto'  />

        </div>
    )
}
export default NewProject;