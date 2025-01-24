import { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Ads from "./components/Ads/Ads";
import ImageCompressor from "./pages/ImageCompressor/ImageCompressor";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (

    <div className="min-h-screen bg-zinc-100">
      {/* Header */}
      <Header />


      <div className="flex pt-12">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        {/* Main Content */}
        <main className={`flex-1 ml-0 ${isOpen ? (isCollapsed ? 'ml-16' : 'ml-52') : 'ml-0'} transition-all duration-300 p-4 md:p-2`}>

                    {/* Image Compressor Page */}
                    <ImageCompressor />
          {/* Advertisement */}
          <Ads />

        </main>

      </div>



    </div>


  );
}

export default App;