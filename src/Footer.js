const Footer = ({ length }) => {
    
        return (
           <footer>
                <p>{ length } List Items{length ===1 ? "item" : "items"}</p>
           </footer>
        )
}

export default Footer;