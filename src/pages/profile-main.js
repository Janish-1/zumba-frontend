import React, { useState } from 'react'
import Sidebar from '../components/sidebar';
import Footer from '../components/Footer';

const ProfileMain = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  // Function to toggle sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className='w-full h-screen bg-gray-200'>
      <div
        class="max-w-2xl  sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto   bg-gray-200 shadow-xl rounded-lg text-white">
        <div class="rounded-t-lg h-32 overflow-hidden">
          <img class="object-cover object-top w-full" src='https://th.bing.com/th/id/R.7da4dc7a2f36d7b3104fc1579ff49721?rik=sIG7l4piBcMYtQ&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2016%2f10%2fGym-full-HD.jpg&ehk=rM9zUn2mHsW%2f5tY%2fkkmGqe2z6jqCvdQncAo%2bnNMdREE%3d&risl=&pid=ImgRaw&r=0' alt='Mountain' />
        </div>
        <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img class="object-cover object-center h-32" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front' />
        </div>
        <div class="text-center mt-2">
          <h2 className="font-semibold" style={{ color: '#B10000' }}>Sarah Smith</h2>
          <p class="text-gray-500" style={{ color: '#B10000' }}>Freelance Web Designer</p>
        </div>
        <div className="flex justify-center px-5">
          <div className="flex items-center font-amiko gap-2"
          onClick={toggleSidebar}
          >
            <div className="mr-2">Edit Profile</div>
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.2822 17.6113C26.3359 17.1847 26.3763 16.758 26.3766 16.3047C26.377 15.8514 26.3374 15.4247 26.2844 14.9979L29.0996 12.8003C29.3531 12.6006 29.4201 12.2406 29.2603 11.9471L26.5976 7.33154C26.4778 7.11811 26.2512 6.99791 26.0112 6.99771C25.9312 6.99764 25.8512 7.01091 25.7845 7.03752L22.4634 8.36803C21.7705 7.83411 21.0242 7.39348 20.2112 7.05945L19.7075 3.52569C19.6678 3.20565 19.388 2.96542 19.0546 2.96513L13.7213 2.9606C13.388 2.96032 13.1078 3.20008 13.0675 3.52005L12.5578 7.05295C11.7442 7.38559 10.9972 7.83829 10.3034 8.3577L6.98451 7.02155C6.90454 6.99482 6.82455 6.98141 6.74455 6.98135C6.51788 6.98115 6.29111 7.10096 6.17093 7.31419L3.50035 11.9253C3.32677 12.2184 3.40646 12.5785 3.65962 12.7787L6.47109 14.9811C6.41739 15.4077 6.37702 15.8477 6.37664 16.2877C6.37627 16.7277 6.4159 17.1677 6.46887 17.5944L3.65367 19.7921C3.40016 19.9918 3.33319 20.3518 3.49294 20.6453L6.15569 25.2609C6.27551 25.4743 6.50207 25.5945 6.74207 25.5947C6.82207 25.5948 6.90208 25.5815 6.96877 25.5549L10.2899 24.2244C10.9828 24.7583 11.7291 25.1989 12.5421 25.5329L13.0458 29.0667C13.0855 29.3867 13.3653 29.627 13.6987 29.6273L19.032 29.6318C19.3653 29.6321 19.6455 29.3923 19.6858 29.0723L20.1955 25.5394C21.0091 25.2068 21.7561 24.7541 22.4499 24.2347L25.7688 25.5708C25.8487 25.5976 25.9287 25.611 26.0087 25.611C26.2354 25.6112 26.4622 25.4914 26.5823 25.2782L29.2529 20.6671C29.4132 20.3739 29.3468 20.0139 29.0937 19.8137L26.2822 17.6113ZM23.6441 15.329C23.6971 15.7424 23.7102 16.0224 23.71 16.3024C23.7097 16.5824 23.6828 16.8757 23.6425 17.2757L23.4545 18.7822L24.6404 19.7166L26.0795 20.8378L25.1448 22.4503L23.452 21.7689L22.0658 21.2077L20.865 22.1133C20.2913 22.5395 19.7444 22.8591 19.1975 23.0853L17.7837 23.6574L17.5691 25.1639L17.3009 26.9637L15.4342 26.9621L15.1824 25.1619L14.9704 23.655L13.5575 23.0805C12.9844 22.84 12.4513 22.5329 11.9183 22.1324L10.7058 21.1981L9.29199 21.7702L7.59808 22.4487L6.66612 20.8346L8.10707 19.7158L9.29453 18.7835L9.10914 17.2767C9.06949 16.8633 9.04308 16.5566 9.04331 16.29C9.04354 16.0233 9.07046 15.7167 9.1108 15.3167L9.29875 13.8102L8.11288 12.8758L6.67383 11.7546L7.60853 10.1421L9.30129 10.8235L10.6875 11.3847L11.8882 10.4791C12.4619 10.0529 13.0089 9.73334 13.5557 9.50713L14.9696 8.935L15.1842 7.42851L15.4524 5.62874L17.3057 5.63032L17.5575 7.43053L17.7696 8.93738L19.1824 9.51191C19.7555 9.7524 20.2886 10.0595 20.8216 10.46L22.0341 11.3943L23.448 10.8222L25.1419 10.1436L26.0738 11.7578L24.6462 12.8899L23.4587 13.8222L23.6441 15.329ZM16.3812 10.9629C13.4345 10.9604 11.0458 13.345 11.0433 16.2917C11.0408 19.2383 13.4254 21.627 16.3721 21.6295C19.3188 21.632 21.7075 19.2474 21.71 16.3007C21.7125 13.3541 19.3278 10.9654 16.3812 10.9629ZM16.3744 18.9629C14.9077 18.9616 13.7087 17.7606 13.71 16.2939C13.7112 14.8273 14.9122 13.6283 16.3789 13.6295C17.8456 13.6308 19.0446 14.8318 19.0433 16.2985C19.0421 17.7651 17.841 18.9641 16.3744 18.9629Z" fill="#C5C5C5" />
            </svg>
          </div>
        </div>

        <div class="p-4 border-t mx-8 mt-2">
          <button class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button>
        </div>
      </div>
      
        {/* Render Sidebar with inline CSS based on state */}
      <div style={{ position: 'fixed', top: 0, left: isSidebarOpen ? '0' : '-250px', height: '100%', width: '250px', transition: 'left 0.3s ease' }}>
        {isSidebarOpen && <Sidebar onClose={toggleSidebar}/>}
      </div>
      <Footer />
    </div>
  )
}

export default ProfileMain;
