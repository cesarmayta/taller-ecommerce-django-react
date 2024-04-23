import { Component } from "react"
import Carro from './Carro'


const styles={
    navbar:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent:'space-between',
        position: 'relative',
        padding:'0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)',
        fontFamily: 'Inter, Avenir, Helvetica, Arial, sans-serif',
        fontSize: '16px',
    },
    logo:{
        fontWeight: '700',
        fontSize: '2rem',
    }
}

class Navbar extends Component {
    render(){
        const { carro,esCarroVisible,mostrarCarro } = this.props
        return (
            <nav style={styles.navbar}>
                <div style={styles.logo}>
                    TIENDA CELULARES
                </div>
                <Carro 
                carro={carro}
                esCarroVisible={esCarroVisible}
                mostrarCarro={mostrarCarro}
                />
            </nav>
        )
    }
}
export default Navbar;