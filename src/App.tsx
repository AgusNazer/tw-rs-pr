
import './App.css'

function App() {


  return (
    <section className='grid gap-8
    sm:max-xl:bg-blue-100
    tablet:grid-cols-2 tablet:items-center 
    tablet:text-center m-8
    
    '>
      <div>
        <img 
        src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxheWFzfGVufDB8fDB8fHww&w=1000&q=80" 
        alt="" 
        className='w-full rounded-lg'
        />
        </div>
        <div>
          <h1 className='mb-2 text-4xl text-red-600 font-medium '>Headline</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit
          . Officia earum quibusdam quia hic! Impedit dolorem natus repellat sint 
          et provident quidem quis officia aliquid. Tenetur voluptates nesciunt eum a
          speriores repellendus!</p>
        

      </div>
    </section>
  )
}

export default App
