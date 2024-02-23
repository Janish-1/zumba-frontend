
import React, { useState } from 'react';

const EditProfile = () => {
      // Initialize state variables for form data and errors
      const [formData, setFormData] = useState({
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        mobile_no: '',
        address:'',
        city:'',
        gender: 'male', // Default value for gender
        dob: ''
    });

    const [errors, setErrors] = useState({});

    // Event handler for input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update the form data state
        setFormData({
            ...formData,
            [name]: value
        });

        // Perform validation for specific fields if needed
        // Update the errors state accordingly
        let newErrors = { ...errors };

        if (name === 'username' && value.trim() === '') {
            newErrors = { ...newErrors, username: 'Username is required' };
        } else {
            delete newErrors.username;
        }

        // Perform validation for other fields as needed

        setErrors(newErrors);
    };

    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform final validation before submitting
        const newErrors = {};

        // Validate fields before submission if needed

        // Set errors if there are validation issues
        setErrors(newErrors);

        // If there are no errors, proceed with form submission
        if (Object.keys(newErrors).length === 0) {
            // Handle form submission logic here
        }
    };
    return (
        <div className="flex justify-center"> {/* Flex container to center the content */}
            <div className="p-8 w-full rounded border border-gray-200">
                <h1 className=" text-3xl text-center text-9xl text-firebrick font-roboto">Edit Profile</h1> {/* Apply text-center class */}
                <form onSubmit={handleSubmit}>
                    <div className="mt-8 grid lg:grid-cols-2 gap-4 mr-2">
                        <div className='w-full'>
                            <label htmlFor="username" className="text-sm text-white block mb-1 font-medium">Username</label>
                            <input type="text" name="username" readOnly id="username" className="[border:none] [outline:none] bg-[transparent] h-5 border box-border font-roboto text-base  border-gray-200  bg-gray-100 rounded py-5 pl-2 px-1 block focus:ring-blue-500 focus:border-blue-500 text-gray-200 w-full" placeholder="Enter your username" />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="email" className="text-sm text-white block mb-1 font-medium">Email</label>
                            <input type="email" name="email" readOnly id="email" className="[border:none] [outline:none] bg-[transparent] h-5 border box-border font-roboto text-base  border-gray-200  bg-gray-100 rounded py-5 pl-2 px-1 block focus:ring-blue-500 focus:border-blue-500 text-gray-200 w-full" placeholder="Enter your email" />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="firstName" className="text-sm text-white block mb-1 font-medium">First Name</label>
                            <input type="text" value={formData.first_name} onChange={handleChange} name="firstName" id="firstName"  className="[border:none] [outline:none] bg-[transparent] h-5 border box-border font-roboto text-base  border-gray-200  bg-gray-100 rounded py-5 pl-2 px-1 block focus:ring-blue-500 focus:border-blue-500 text-gray-200 w-full" placeholder="Enter your first name" />
                            {errors.first_name && <div className="text-red-500">{errors.first_name}</div>}

                        </div>
                        <div className='w-full'>
                            <label htmlFor="lastName" className="text-sm text-white block mb-1 font-medium">Last Name</label>
                            <input type="text" name="lastName" value={formData.last_name} onChange={handleChange}  id="lastName" className="[border:none] [outline:none] bg-[transparent] h-5 border box-border font-roboto text-base  border-gray-200  bg-gray-100 rounded py-5 pl-2 px-1 block focus:ring-blue-500 focus:border-blue-500 text-gray-200 w-full" placeholder="Enter your last name" />
                            {errors.last_name && <div className="text-red-500">{errors.last_name}</div>}

                        </div>
                        <div className='w-full'>
                            <label htmlFor="address" className="text-sm text-white block mb-1 font-medium">Address</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange}  id="address" className="[border:none] [outline:none] bg-[transparent] h-5 border box-border font-roboto text-base  border-gray-200  bg-gray-100 rounded py-5 pl-2 px-1 block focus:ring-blue-500 focus:border-blue-500 text-gray-200 w-full" placeholder="Enter your last name" />
                            {errors.address && <div className="text-red-500">{errors.address}</div>}

                        </div>
                        <div className='w-full'>
                            <label htmlFor="city" className="text-sm text-white block mb-1 font-medium">City</label>
                            <input type="text" name="city" value={formData.last_name} onChange={handleChange}  id="city" className="[border:none] [outline:none] bg-[transparent] h-5 border box-border font-roboto text-base  border-gray-200  bg-gray-100 rounded py-5 pl-2 px-1 block focus:ring-blue-500 focus:border-blue-500 text-gray-200 w-full" placeholder="Enter your last name" />
                            {errors.city && <div className="text-red-500">{errors.city}</div>}

                        </div>
                        <div className='w-full'>
                            <label htmlFor="mobileNumber" className="text-sm text-white block mb-1 font-medium">Mobile Number</label>
                            <input type="text" name="mobileNumber"  value={formData.mobile_no} onChange={handleChange} id="mobileNumber" className="[border:none] [outline:none] bg-[transparent] h-5 border box-border font-roboto text-base  border-gray-200  bg-gray-100 rounded py-5 pl-2 px-1 block focus:ring-blue-500 focus:border-blue-500 text-gray-200 w-full" placeholder="Enter your mobile number" />
                            {errors.mobile_no && <div className="text-red-500">{errors.mobile_no}</div>}

                        </div>
                        <div className='w-full'>
                            <label htmlFor="gender" className="text-sm text-white block mb-1 font-medium">Gender</label>
                            <div>
                                <input type="radio" id="male" name="gender" value="male" className="mr-2" 
                                checked={formData.gender === 'male'}
                                onChange={handleChange} 
                                />
                                <label htmlFor="male" className="text-white mr-4">Male</label>
                                <input type="radio" id="female" name="gender" value="female" className="mr-2" 
                                checked={formData.gender === 'female'}
                                onChange={handleChange} 

                                />
                                <label htmlFor="female" className="text-white mr-4">Female</label>
                                <input type="radio" id="other" name="gender" value="other" className="mr-2" 
                                checked={formData.gender === 'other'}
                                onChange={handleChange} 

                                />
                                <label htmlFor="other" className="text-white">Other</label>
                            </div>
                        </div>
                        <div className='w-full'>
                            <label htmlFor="dob" className="text-sm text-white block mb-1 font-medium">Date of Birth</label>
                            <input type="date" value={formData.dob} onChange={handleChange} name="dob" id="dob" className="[border:none] [outline:none] bg-[transparent] h-5 border box-border font-roboto text-base  border-gray-200  bg-gray-100 rounded py-5 pl-2 px-1 block focus:ring-blue-500 focus:border-blue-500 text-gray-200 w-full" placeholder="Select your date of birth" />
                        </div>
                    </div>

                    <div className="space-x-4 mt-8">
                        <button type="submit" className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 active:bg-red-700 disabled:opacity-50">Save</button>
                        <button className="py-2 px-4 bg-white border border-gray-200  text-gray-200 rounded hover:bg-red-100 active:bg-red-200 disabled:opacity-50">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditProfile;
