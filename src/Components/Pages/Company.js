import styles from './Company.module.css'
import React from 'react';
import { useState } from 'react';

function Company() {

    const [showText, setShowText] = useState(false);
    return (
        <div>
           <h1 className={styles.company}> 
           Conheça um pouco sobre o <span>Costs</span>
           </h1> 
           
            <button className={styles.btn} onClick={() => setShowText(!showText)}>
              {showText ? "Ocultar" : "Saiba mais sobre o Costs"}
            </button>
      
            {showText && (
              <p>
              O Costs é um gerenciador de projetos eficiente e intuitivo, criado para ajudar equipes e profissionais a organizarem seus projetos de forma mais produtiva. Com uma interface amigável e recursos avançados, ele permite um acompanhamento detalhado de todas as etapas do projeto, desde o planejamento até a conclusão.
<h3>
Principais Recursos do Costs :
<ul  className={styles.cost_info}>
    <li>
    Gestão de Orçamentos – Controle os custos de cada etapa do projeto, evitando surpresas no orçamento.
    </li>
    <li>
    Interface Intuitiva – Um design simples e funcional para facilitar o uso, mesmo para iniciantes.
    </li>
    <li>
    Colaboração em Equipe – Compartilhe projetos e trabalhe com sua equipe de forma integrada.
    </li>
    <li>
    Acompanhamento de Tarefas – Organize as atividades, defina prazos e acompanhe o progresso em tempo real.

    </li>
</ul>
</h3>

              </p>
            )}
          </div>
          
        
    )
}
export default Company;