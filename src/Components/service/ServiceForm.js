
import styles from '../Projects/ProjectForm.module.css'
import { useState } from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
function ServiceForm({handleSubmit, btnText, projectData}) {
 const [service, setService] = useState([])


    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
     
    }

    function handleChange(e){
     setService({...service, [e.target.name]: e.target.value})
    }

    return (
    <form onSubmit={submit} className={styles.form}>
     <Input 
     type="text" 
     text="Nome do serviço"
     placeholder="Insira o nome do serviço"
     name="name"
     handleOnChange={handleChange}
     />
     <Input 
     type="number" 
     text="Valor do serviço"
     placeholder="Insira o valor total"
     name="cost"
     handleOnChange={handleChange}
     />
     <Input 
     type="text" 
     text="Descrição do serviço"
     placeholder="Descreva o serviço"
     name="description"
     handleOnChange={handleChange}
     />
<SubmitButton  text={btnText}/>
    </form>
    )
}
export default ServiceForm;