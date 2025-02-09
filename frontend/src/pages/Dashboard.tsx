

export const Dashboard = () => {
  return (
    <div id="webcrumbs"> 
            	<div className='w-[1200px] min-h-[800px] bg-white shadow-lg rounded-lg p-8'>
    	  <header className='mb-8'>
    	    <nav className='flex items-center justify-between'>
    	      <div className='flex items-center space-x-6'>
    	        <button className='px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 transition-colors rounded-lg flex items-center'>
    	          <span className='material-symbols-outlined mr-2'>home</span>
    	          Dashboard
    	        </button>
    	        <button className='px-4 py-2 hover:bg-gray-100 transition-colors rounded-lg flex items-center'>
    	          <span className='material-symbols-outlined mr-2'>notifications</span>
    	          Alerts
    	        </button>
    	        
    	        <button className='px-4 py-2 hover:bg-gray-100 transition-colors rounded-lg flex items-center'>
    	          <span className='material-symbols-outlined mr-2'>info</span>
    	          About
    	        </button>
    	      </div>
    	      <div className='relative'>
    	        <input type='text' placeholder='Search location...' className='w-64 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500' />
    	        <span className='material-symbols-outlined absolute right-3 top-2.5 text-gray-400 cursor-pointer hover:text-orange-500 transition-colors'>search</span>
    	      </div>
    	    </nav>
    	  </header>
    	
    	  <div className='grid grid-cols-3 gap-8'>
    	    <div className='col-span-2 space-y-8'>
    	      <div className='bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden'>
    	        <div className='p-4 border-b border-gray-200 flex items-center justify-between'>
    	          <h2 className='text-xl font-semibold'>Live Fire Map</h2>
    	          <div className='flex items-center space-x-2'>
    	            <button className='p-2 hover:bg-gray-100 rounded-lg transition-colors'>
    	              <span className='material-symbols-outlined'>zoom_in</span>
    	            </button>
    	            <button className='p-2 hover:bg-gray-100 rounded-lg transition-colors'>
    	              <span className='material-symbols-outlined'>zoom_out</span>
    	            </button>
    	            <button className='p-2 hover:bg-gray-100 rounded-lg transition-colors'>
    	              <span className='material-symbols-outlined'>my_location</span>
    	            </button>
    	          </div>
    	        </div>
    	        <div className='h-[400px] bg-gray-100 relative'>
    	          <div className='absolute inset-0 p-4 flex items-center justify-center'>
    	            <span className='material-symbols-outlined text-6xl text-gray-400'>map</span>
    	          </div>
    	        </div>
    	      </div>
    	
    	      <div className='grid grid-cols-2 gap-6'>
    	        <div className='bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow'>
    	          <div className='flex items-center justify-between mb-6'>
    	            <h3 className='font-semibold'>Fire Risk Analysis</h3>
    	            <span className='px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm'>High Risk</span>
    	          </div>
    	          <div className='space-y-4'>
    	            <div className='flex items-center justify-between'>
    	              <span className='text-gray-600'>Temperature</span>
    	              <span className='font-medium'>98°F</span>
    	            </div>
    	            <div className='flex items-center justify-between'>
    	              <span className='text-gray-600'>Humidity</span>
    	              <span className='font-medium'>15%</span>
    	            </div>
    	            <div className='flex items-center justify-between'>
    	              <span className='text-gray-600'>Wind Speed</span>
    	              <span className='font-medium'>25 mph</span>
    	            </div>
    	            <div className='flex items-center justify-between'>
    	              <span className='text-gray-600'>Vegetation Index</span>
    	              <span className='font-medium'>Very Dry</span>
    	            </div>
    	          </div>
    	        </div>
    	
    	        <div className='bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow'>
    	          <h3 className='font-semibold mb-6'>Recent Fire Activity</h3>
    	          <div className='space-y-4'>
    	            <div className='flex items-center p-3 bg-red-50 rounded-lg'>
    	              <span className='material-symbols-outlined text-red-500 mr-3'>local_fire_department</span>
    	              <div>
    	                <p className='font-medium'>Active Fire Detected</p>
    	                <p className='text-sm text-gray-600'>2.5 miles away • 30 min ago</p>
    	              </div>
    	            </div>
    	            <div className='flex items-center p-3 bg-orange-50 rounded-lg'>
    	              <span className='material-symbols-outlined text-orange-500 mr-3'>warning</span>
    	              <div>
    	                <p className='font-medium'>High Risk Warning</p>
    	                <p className='text-sm text-gray-600'>Your area • 2 hours ago</p>
    	              </div>
    	            </div>
    	            <div className='flex items-center p-3 bg-green-50 rounded-lg'>
    	              <span className='material-symbols-outlined text-green-500 mr-3'>check_circle</span>
    	              <div>
    	                <p className='font-medium'>Fire Contained</p>
    	                <p className='text-sm text-gray-600'>5 miles away • 1 day ago</p>
    	              </div>
    	            </div>
    	          </div>
    	        </div>
    	      </div>
    	    </div>
    	
    	    <div className='space-y-6'>
    	      <div className='bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow'>
    	        <div className='flex items-center justify-between mb-6'>
    	          <h3 className='font-semibold'>Notifications</h3>
    	          <button className='text-sm text-orange-500 hover:text-orange-600 transition-colors'>View All</button>
    	        </div>
    	        <div className='h-[300px] space-y-4 overflow-y-auto'>
    	          <div className='p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer'>
    	            <div className='flex items-center mb-2'>
    	              <span className='material-symbols-outlined text-red-500 mr-2'>warning</span>
    	              <span className='font-medium'>Emergency Alert</span>
    	            </div>
    	            <p className='text-sm text-gray-600'>Wildfire detected in your monitored area</p>
    	            <p className='text-xs text-gray-400 mt-2'>10 minutes ago</p>
    	          </div>
    	          <div className='p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer'>
    	            <div className='flex items-center mb-2'>
    	              <span className='material-symbols-outlined text-orange-500 mr-2'>thermostat</span>
    	              <span className='font-medium'>High Temperature</span>
    	            </div>
    	            <p className='text-sm text-gray-600'>Temperature exceeds risk threshold</p>
    	            <p className='text-xs text-gray-400 mt-2'>1 hour ago</p>
    	          </div>
    	          <div className='p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer'>
    	            <div className='flex items-center mb-2'>
    	              <span className='material-symbols-outlined text-blue-500 mr-2'>update</span>
    	              <span className='font-medium'>System Update</span>
    	            </div>
    	            <p className='text-sm text-gray-600'>Fire monitoring system updated</p>
    	            <p className='text-xs text-gray-400 mt-2'>2 hours ago</p>
    	          </div>
    	        </div>
    	      </div>
    	
    	      <div className='bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow'>
    	        <h3 className='font-semibold mb-4'>Quick Actions</h3>
    	        <div className='space-y-3'>
    	          <button className='w-full p-3 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors flex items-center justify-between'>
    	            <span className='flex items-center'>
    	              <span className='material-symbols-outlined mr-2'>emergency</span>
    	              Report Fire
    	            </span>
    	            <span className='material-symbols-outlined'>arrow_forward</span>
    	          </button>
    	          <button className='w-full p-3 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-lg transition-colors flex items-center justify-between'>
    	            <span className='flex items-center'>
    	              <span className='material-symbols-outlined mr-2'>add_alert</span>
    	              Set Alert
    	            </span>
    	            <span className='material-symbols-outlined'>arrow_forward</span>
    	          </button>
    	          <button className='w-full p-3 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors flex items-center justify-between'>
    	            <span className='flex items-center'>
    	              <span className='material-symbols-outlined mr-2'>share</span>
    	              Share Location
    	            </span>
    	            <span className='material-symbols-outlined'>arrow_forward</span>
    	          </button>
    	        </div>
    	      </div>
    	    </div>
    	  </div>
    	</div> 
            </div>
  )
}

