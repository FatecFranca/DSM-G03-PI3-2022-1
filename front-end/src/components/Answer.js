import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"

function Answer() {

        //const [assessment, question, objective_answer, comments] = React.useState(null);

        
            /*"assessment":"624f71204405738589283aba",
            "question":"62518b7ebe77585f5a61557f",
            "objective_answer":"Y",
            "comments":"Os itens estão corretos"*/
        
      
       /* React.useEffect(() => {
          fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
        }, [])*/
    return (
        <div className="Home">
            <Header />
            <Menu />
            <main className="App-header">
                    <h1>Aqui será as respostas</h1>
            </main>
            <Footer />
        </div>
    )
}
export default Answer