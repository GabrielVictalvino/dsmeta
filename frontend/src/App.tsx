import Header from "./components/header"
import SalesCard from "./components/SalesCard"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import NotificationButton from "./components/notificationButton"

function App() {
  return (
    <>
      <ToastContainer/>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-conteiner">
            <SalesCard/>
          </div>
        </section>
      </main>
    </>

  )
}

export default App
