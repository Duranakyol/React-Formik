import React from 'react';
import {useFormik} from "formik"

function SignUp() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: values => {
          console.log(values);
        },
      });
  return (
      <div>
          <h1>Validation</h1>
            <form onSubmit={formik.handleSubmit} className='form'>
            <label>Email</label>
            <input
                name='email'
                placeholder='email@gmail'
                value={formik.values.email}
                  onChange={formik.handleChange} />
              <br />
              <br/>
            <label>Password</label>
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={formik.values.password}
                onChange={formik.handleChange} />
              <br />
              <br />
              <label>ConfirmPassword</label>
              <input
                type='password'
                name='confirmPassword'
                placeholder='ConfirmPassword'
                value={formik.values.confirmPassword}
                onChange={formik.handleChange} />
              <br /><br />
              <button type="submit">Submit</button>
              <br/><br/>
              <code>{JSON.stringify(formik.values)}</code>
            </form>
    </div>
  )
}

export default SignUp