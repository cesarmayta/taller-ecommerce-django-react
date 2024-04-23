import { Component } from "react"
import Productos from './components/Productos';
import Navbar from './components/Navbar';
import Layout from './components/Layout';

const styles= {
  button : {
      backgroundColor: '#0A283E',
      color: '#fff',
      padding: '15px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [
        {
          "id": 1,
          "nombre": "Iphone 12",
          "precio": 7000,
          "imagen":"https://res.cloudinary.com/dd9ad40qm/image/upload/v1632882187/ukhwjwz3t25qlasowx83.jpg"
        },
        {
          "id": 2,
          "nombre": "Xiomi Redmi 11",
          "precio": 1500,
          "imagen":"https://res.cloudinary.com/dd9ad40qm/image/upload/v1632882062/cdp4mldk7pzi3wpbrieh.jpg"
        },
        {
          "id": 3,
          "nombre": "Samsung Galaxy Z flip 3",
          "precio": 3000,
          "imagen":"https://res.cloudinary.com/dd9ad40qm/image/upload/v1667360174/18268213_1_pct9me.jpg"
        }
      ],
      carro:[],
      esCarroVisible: false
    }
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if(carro.find(x => x.nombre === producto.nombre)) {
      const newCarro = carro.map(x => x.nombre === producto.nombre
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
      return this.setState({carro: newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible})
  }


  render() {
    const {esCarroVisible} = this.state
    return (
      <div>
        <Navbar carro={this.state.carro} 
        esCarroVisible={esCarroVisible} 
        mostrarCarro={this.mostrarCarro}/>
        <Layout>
        <h1>Productos : <button style={styles.button}>Consultar</button></h1>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )  
  }
}

export default App;