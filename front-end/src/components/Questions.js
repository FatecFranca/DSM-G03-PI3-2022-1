import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"

function Question() {
    return (
        <div className="Home">
            <Header />
            <Menu />
            <main className="App-header">
                    <h1>Aqui será as questões</h1>
                    <form>
                        
                        <button>Abrir questoes grupo 1</button><br/>
                        <button>Abrir questoes grupo 2</button><br/>
                        <button>Abrir questoes grupo 3</button><br/>
                        <button>Abrir questoes grupo 4</button><br/>
                      
                    </form>
            </main>
            
            <Footer />
        </div>
    )
}
export default Question