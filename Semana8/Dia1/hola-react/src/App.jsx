import 'bootstrap/dist/css/bootstrap.min.css'
import Cabecera from './Cabecera';
import Aside from './Aside';
import Principal from './Principal';
import "./estilos.css"


function App() {
	// logica del componente
	return (
		<div>
			<Cabecera />
			<Aside />
			<Principal />
		</div>
	);
}

export default App;
