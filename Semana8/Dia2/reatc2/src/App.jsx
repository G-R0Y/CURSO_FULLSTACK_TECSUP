import 'bootstrap/dist/css/bootstrap.min.css'
import Aheader from './Header'
import Product from './Product'
import "./css.css"
function App() {

  // instalar bootstrap
  // crear componete par mostrar  el header
  // crear componente llamado productos que mostrara una lista de prductos importados desde productos.js
  // crear un componetne llamado producto que reciba 1objeto producto y a su vez, este componente este componnete deberia ser invocado desde el archivo productos
  // para represneta 1 producto, considere usar losncard de bootstrap

  return (

    <div>
      <Aheader />
      <Product />
    </div>
  );
}

export default App