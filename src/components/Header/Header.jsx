import './Header.css'

export const Header = ({ name, felicitaciones }) => {
    return(
        <> {/* <></> Esto se conoce como fragment */}
            <header>
                <h1>Hola A todos, les saluda { name }</h1>
                <p className='subtitle__header'>Bienvenido a nuestra aplicación de React</p>
                <p>{ felicitaciones }</p>
            </header>
            
        </>
        
    )
}

/* const objeto = {
    name: 'Juan Carlos',
    apellido: 'Bodoque',
    profesion: 'reportero'
}

const { name, apellido, profesion } = objeto

objeto.name */