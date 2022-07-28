import React from 'react'
import { useFormik } from "formik";

function MyUseFormik() {
    const formik = useFormik({
        initialValues: {
          firstName: '',
        lastName: '',
        email: '',
        gender: 'male',
        hobies: [],
        country: '',
        },
        onSubmit: values => {
          console.log(values);
        },
      });
  return (
      <div>
          
      <h1>MyUseFormik</h1>
            <form onSubmit={formik.handleSubmit} className='form'>
            <label htmlFor="firstName">First Name</label>
              <input
                name='firstName'
                placeholder='firstName'
                value={formik.values.firstName}
                onChange={formik.handleChange} />
              <br />
              <br/>
            <label htmlFor="lastName">Last Name</label>
            <input
                name='lastName'
                placeholder='lastName'
                value={formik.values.lastName}
                onChange={formik.handleChange} />
              <br />
              <br/>
            <label htmlFor="email">Email</label>
            <input
                name='email'
                placeholder='email@gmail'
                value={formik.values.email}
                onChange={formik.handleChange} /><br /><br />
              
              <input
                type='radio'
                name='gender'
                value='male'
                onChange={formik.handleChange}
                checked={formik.values.gender === "male"} />
              <span>Male</span>
              
              <input
                type='radio'
                name='gender'
                value='female'
                onChange={formik.handleChange}
                checked={formik.values.gender === "female"} />
              <span>Female</span><br /><br />
              
              <div>
                <input
                  type='checkbox'
                  name='hobies'
                  value='Football'
                  onChange={formik.handleChange}/>
                Football
              </div>
              <div>
                <input
                  type='checkbox'
                  name='hobies'
                  value='Cinema'
                  onChange={formik.handleChange}/>
                Cinema
              </div>
              <div>
                <input
                  type='checkbox'
                  name='hobies'
                  value='Photography'
                  onChange={formik.handleChange}/>
                Photography
              </div><br />
              
              <select name="country" onChange={formik.handleChange} value={formik.values.country}>
                <option value="empty">Please Select a Country</option>
                <option value="deutschland">Deutschland</option>
                <option value="england">England</option>
                <option value="france">France</option>
                <option value="sweden">Sweden</option>
              </select><br/><br/>


              <button type="submit">Submit</button>
              <br/><br/>
        <code>{JSON.stringify(formik.values)}</code><br/><br/>
        <hr></hr>
          </form>
    </div>
  )
}

export default MyUseFormik