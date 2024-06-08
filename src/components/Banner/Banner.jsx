import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


const Banner = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  const toggleLoginModal = () => setIsLoginModalOpen(!isLoginModalOpen);
  const toggleSignUpModal = () => setIsSignUpModalOpen(!isSignUpModalOpen);

  const formikLogin = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Please enter a valid Email ID.'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Please enter password')
    }),
    onSubmit: values => {
      signInWithEmailAndPassword(auth, values.email, values.password).then((data) => {
        console.log(data);
        formikLogin.resetForm()
        toggleLoginModal();
        Swal.fire({
          title: 'Login successful!',
          icon: 'success',
          confirmButtonText: 'OK'
        })

      }).catch((err) => {
        if (err.code === 'auth/invalid-credential') {
          Swal.fire({
            title: 'Error!',
            text: 'This user is not registered.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        } else {
          console.log(err);

        }
      })
    }
  });

  const formikSignUp = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Please enter your name'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Please enter a valid Email ID.'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Please enter password')
    }),
    onSubmit: values => {
      console.log('Sign Up Form Values:', values);
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(userCredential => {
          return updateProfile(userCredential.user, {
            displayName: values.name
          });
        }).then(() => {
          formikSignUp.resetForm();
          toggleSignUpModal();
          Swal.fire({
            title: 'Sign Up successful!',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Swal.fire({
              title: 'Error!',
              text: 'This email is already registered.',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          } else {
            console.error('Error creating user:', error);
          }
        });
    }

  });

  const logout = () => {
    signOut(auth).then(() => {
      console.log('logout success fully');
      formikLogin.resetForm()
      Swal.fire({
        title: 'Logout successful!',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })
    return () => {
      listen()
    }
  }, [])

  return (
    <div className='relative w-full h-[600px] overflow-hidden md:h-[600px] sm:h-[300px]'>
      <img
        src="https://img2.shaadi.com/assests/2021/images/Matrimony-Service-by-Shaadi.com.png"
        alt="Shaadi.com Logo"
        className='absolute top-7 left-72 w-40 h-auto p-4'
      />
      {authUser ? (
        <button onClick={logout} className='absolute top-7 right-72 m-4 p-2 text-white'>
          Logout
        </button>
      ) : (
        <button onClick={toggleLoginModal} className='absolute top-7 right-72 m-4 p-2 text-white'>
          Login
        </button>
      )}

      <p className='absolute top-7 right-56 m-4 p-2 text-white'>
        Help
      </p>
      <img
        src="https://img2.shaadi.com/assests/2023/images/shaadi-desktop-banner-v1.webp"
        alt="Banner Image"
        className='w-full h-full object-cover'
      />
      <h1 className='absolute bottom-40 left-[35%] p-4 text-white text-3xl bg-opacity-50'>
        Trusted Matrimony & Matchmaking Service
      </h1>
      <div className='absolute bottom-20 left-1/2 transform -translate-x-1/2 p-4 bg-black bg-opacity-35 rounded w-[1100px]'>
  <div className='flex justify-between space-x-4'>
    
    <select className='p-2 border rounded w-[19%] h-10  bg-white text-black'>
      <option>Gender</option>
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </select>
    <select className='p-2 border rounded w-[19%] bg-white text-black'>
      <option>Age From</option>
      {[...Array(100)].map((_, i) => (
        <option key={i}>{i + 1}</option>
      ))}
    </select>
    <select className='p-2 border rounded w-[19%] bg-white text-black'>
      <option>Age To</option>
      {[...Array(100)].map((_, i) => (
        <option key={i}>{i + 1}</option>
      ))}
    </select>
    <select className='p-2 border rounded w-[19%] bg-white text-black'>
      <option>Religion</option>
      <option>Hindu</option>
      <option>Muslim</option>
      <option>Christian</option>
      <option>Sikh</option>
      <option>Other</option>
    </select>
    <select className='p-2 border rounded w-[19%] bg-white text-black'>
      <option>Mother Tongue</option>
      <option>Hindi</option>
      <option>English</option>
      <option>Gujarati</option>
      <option>Marathi</option>
      <option>Other</option>
    </select>
    <button className='p-2 bg-blue-500 text-white rounded w-[19%]'>Let's Begin</button>
  </div>
</div>



      {isLoginModalOpen && (
        <dialog id="my_modal_2" className="modal" open>
          <div className="modal-box bg-white rounded-md w-[430px]">
            <div className='flex justify-center'>
              <img className='h-10 w-10' src="https://img2.shaadi.com/assests/2016/images/home-page-layer-logo.png" alt="Logo" />
            </div>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={toggleLoginModal}>✕</button>
            </form>
            <div className='flex justify-center'>
              <h3 className="text-xl text-black">Welcome back! Please Login</h3>
            </div>
            <div className='flex justify-center items-center m-5'>
              <form onSubmit={formikLogin.handleSubmit}>
                <div className="form-control mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered input-primary w-full max-w-xs bg-white"
                    onChange={formikLogin.handleChange}
                    value={formikLogin.values.email}
                  />
                  {formikLogin.touched.email && formikLogin.errors.email ? (
                    <div className="text-red-600">{formikLogin.errors.email}</div>
                  ) : null}
                </div>
                <div className="form-control mb-4">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered input-primary w-full max-w-xs bg-white"
                    onChange={formikLogin.handleChange}
                    value={formikLogin.values.password}
                  />
                  {formikLogin.touched.password && formikLogin.errors.password ? (
                    <div className="text-red-600">{formikLogin.errors.password}</div>
                  ) : null}
                </div>
                <div className='flex justify-center mb-4'>
                  <button type="submit" className="btn bg-cyan-400 w-full max-w-xs text-white">Login</button>
                </div>
                <div className='flex justify-center'>
                  <button type="button" className="btn bg-cyan-400 text-white w-full max-w-xs" onClick={() => { toggleSignUpModal(); toggleLoginModal(); }}>Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      )}

      {isSignUpModalOpen && (
        <dialog id="sign_up_modal" className="modal" open>
          <div className="modal-box bg-white rounded-md w-[430px]">
            <div className='flex justify-center'>
              <img className='h-10 w-10' src="https://img2.shaadi.com/assests/2016/images/home-page-layer-logo.png" alt="Logo" />
            </div>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={toggleSignUpModal}>✕</button>
            </form>
            <div className='flex justify-center'>
              <h3 className="text-xl text-black">Create an Account</h3>
            </div>
            <div className='flex justify-center items-center m-5'>
              <form onSubmit={formikSignUp.handleSubmit}>
                <div className="form-control mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered input-primary w-full max-w-xs bg-white"
                    onChange={formikSignUp.handleChange}
                    value={formikSignUp.values.name}
                  />
                  {formikSignUp.touched.name && formikSignUp.errors.name ? (
                    <div className="text-red-600">{formikSignUp.errors.name}</div>
                  ) : null}
                </div>
                <div className="form-control mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered input-primary w-full max-w-xs bg-white"
                    onChange={formikSignUp.handleChange}
                    value={formikSignUp.values.email}
                  />
                  {formikSignUp.touched.email && formikSignUp.errors.email ? (
                    <div className="text-red-600">{formikSignUp.errors.email}</div>
                  ) : null}
                </div>
                <div className="form-control mb-4">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered input-primary w-full max-w-xs bg-white"
                    onChange={formikSignUp.handleChange}
                    value={formikSignUp.values.password}
                  />
                  {formikSignUp.touched.password && formikSignUp.errors.password ? (
                    <div className="text-red-600">{formikSignUp.errors.password}</div>
                  ) : null}
                </div>
                <div className='flex justify-center mb-4'>
                  <button type="submit" className="btn bg-cyan-400 w-full max-w-xs text-white">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default Banner;
