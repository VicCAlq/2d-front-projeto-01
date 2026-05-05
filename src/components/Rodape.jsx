import { styles } from '../styles/main';

export default function Rodape() {
    return (
        <footer style={styles.rodape}>
            
            <br /><p> GitHub :
                 <a href="https://github.com/VicCAlq/2d-front-projeto-01/tree/3-GabrielLeal-BrendhaPriscilla-GustavoHenrique-Caua-BrenoCosta" 
                 target="_blank" >
                    Projeto Front-end do primeiro Trimestre
                    </a></p>
                    <p style={{color:"silver"}}>Criado por: Gabriel Leal, Cauã Rafael,
            Gustavo Henrique, Brendha Vasconcelos e Breno Costa</p>
            <h2>Obrigado pela sua atenção!</h2>
        </footer>
    );
}