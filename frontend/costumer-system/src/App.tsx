import './App.css'
import { Button } from "@/components/ui/button"
import axios from 'axios'

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};


function App() {
  return (
    <>
      <div>
        <Button onClick={fetchData}>Fetch Data</Button>
      </div>
    </>
  )
}

export default App
