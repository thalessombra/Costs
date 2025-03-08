import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from './Contact.module.css'

function Contact({ handleSubmit, btnText = "Enviar", projectData = {} }) {
  const [contact, setContact] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    if (!projectData.contact) {
      projectData.contact = [];
    }

    handleSubmit && handleSubmit(projectData);

    setContact({});
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className={styles.textContainer}>
        <h2>Fique por dentro das novidades!</h2>
        <p>Inscreva-se para receber informações e ofertas exclusivas.</p>
      </div>

      {submitted && (
        <div className={styles.successMessage}>
          <h3>Cadastro realizado com sucesso!</h3>
          <p>Obrigado por se inscrever.</p>
        </div>
      )}


      <form onSubmit={submit} className={styles.form}>
        <Input
          type="text"
          text="Nome"
          name="name"
          placeholder="Insira seu nome"
          handleOnChange={handleChange}
          value={contact.name || ""}
        />
        <Input
          type="email"
          text="Email"
          name="email"
          placeholder="Digite seu email"
          handleOnChange={handleChange}
          value={contact.email || ""}
        />
        <SubmitButton text={btnText} />
      </form>

      <div className={styles.mapContainer}>
        <h2>Venha nos visitar e adquira nossos serviços!</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23717.350799947515!2d-88.05698685762607!3d42.00738197487526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1740233764859!5m2!1spt-BR!2sbr" 
    title="Mapa costs"
     allowfullscreen="" 
     loading="lazy" 
     referrerpolicy="no-referrer-when-downgrade">

    </iframe>
    </div>
    </>
    
  );
  
}

export default Contact;