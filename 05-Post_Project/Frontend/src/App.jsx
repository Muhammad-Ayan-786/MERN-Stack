import { Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/Feed";
import UpdatePost from "./pages/UpdatePost";

const App = () => {
  return (
    <div className='w-full h-screen'>

      <Routes>
        {/* Main Feed Route */}
        <Route path="/feed" element={<Feed />} />
        {/* Create Post Route */}
        <Route path="/create-post" element={<CreatePost />} />
        {/* Update Post Route */}
        <Route path="/update-post/:id" element={<UpdatePost />} />
      </Routes>

    </div>
  )
}

export default App