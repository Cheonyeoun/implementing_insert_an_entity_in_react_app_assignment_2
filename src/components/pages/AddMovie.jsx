import { useNavigate } from "react-router-dom";

function AddMovie(){
    
    const navigate = useNavigate();
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        alert("Movie Added!")
        navigate('/')
    }

    return(

        <>
        <div className="w-screen h-screen flex justify-center items-center bg-white/10">
         <button onClick={()=>navigate('/')} className="text-left p-3 px-2 text-md bg-red-100 w-6 hover:bg-red-300 hover:font-bold transition-all duration-100">X</button>
            <div className=" shadow-xl p-8 rounded-xl max-w-md  w-full ">
                <form action="" onSubmit={handleSubmit}  className="space-y-4">
                    <div  className="text-center mr-9 text-2xl mb-5 font-bold">
                        <h1>Add Movie</h1>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="title" className="text-gray-800 ">Title:</label>
                        <input type="text" name="title" id="title" placeholder="e.g The Amazing Spider-Man" className="italic text-gray-400 w-full pl-2 border-b outline-none focus:ring-nonep-1 mt-2" required/>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="director" className="text-gray-700">Director:</label>
                        <input type="text" name="director" id="director" placeholder="Marc Webb" className="italic text-gray-400 w-full pl-2 border-b outline-none focus:ring-none p-1 mt-2"  required />
                    </div>

                    <div>
                        <label htmlFor="genre"  className="text-gray-800" >Genre:</label>
                        <select name="genre" className="italic text-gray-400 w-full pl-2 border-b outline-none focus:ring-none mt-2" required>
                          <option value="">Select Genre</option>
                          <option value="Action">Action</option>
                          <option value="Comedy">Comedy</option>
                          <option value="Drama">Drama</option>
                          <option value="Sci-Fi">Sci-Fi</option>
                        </select>                    
                    </div>
                    <div className="mt-3">
                        <label htmlFor="releaseYear"  className="text-gray-800" >Release Year:</label>
                        <input type="number" name="releaseYear" id="releaseYear" placeholder="2012" className="italic text-gray-400 outline-none focus:ring-none w-full border-b mt-2 pl-2 p-1 " required />
                    </div>
                                            
                    <div>
                      <label htmlFor="posterUrl" className="text-gray-800">Poster URL:</label>
                      <input type="url" name="posterUrl" id="posterUrl" placeholder="https://example.com/poster.jpg" 
                             className="italic text-gray-400 w-full pl-2 border-b outline-none focus:ring-none mt-2" 
                             required />
                    </div>
                    <div>

                      <label htmlFor="synopsis" className="text-gray-800">Synopsis:</label>
                      <textarea name="synopsis" id="synopsis" rows="4" placeholder="Brief movie description..." 
                                className="italic text-gray-400 w-full pl-2 border-b outline-none focus:ring-none mt-2"
                                required></textarea>
                    </div>                          


                    <div className="flex justify-center mr-6">

                        <button className="bg-stone-700 text-gray-200 px-4 py-2 
                                           rounded hover:bg-stone-600 hover:text-white
                                           transition duration-200">Add Movie</button>

                    </div>

                </form>
            </div>

        </div>

        
        </>
    )
}

export default AddMovie;