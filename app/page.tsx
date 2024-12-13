
import Courses from "./courses/page";


const DashboardPage = () => {
  return (
    <div>
     {/* Render the Helpus Component */}
    
      
      {/* Main Content Area */}
      <div className="flex-1">
        {/* Sorting Dropdown */}
       <Courses />
      
      </div>
    </div>
  );
};

export default DashboardPage;


