import '../../styles/vars.css'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__content">
          <div className="footer__content__texts">
            <span className="text title">TESTAR O PREMIUM DE GRAÇA</span>
            <span className="text subtitle">Inscreva-se para curtir músicas ilimitadas e podcasts só com alguns
              anúncios. Não precisa de cartão de crédito.
            </span>
          </div>
          <button>Inscreva-se grátis</button>
        </div>
      </footer>
  )
}

export default Footer;