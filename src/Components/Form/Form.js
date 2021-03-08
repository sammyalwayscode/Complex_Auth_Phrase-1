import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import { Button, Input } from 'antd'
import './Form.css'
import TextArea from 'antd/lib/input/TextArea';
import { app } from '../Firebase/Base'
// import firebase from 'firebase'

function Form() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [bio, setBio] = useState("")
  const [hasAccount, setHasAccount] = useState(false)
  const [current, setCurrent] = useState(null)


  const handleLogin = () => {
    app.auth().signInWithEmailAndPassword(email, password)
  }

  const handleSignUp = () => {
    app.auth().createUserWithEmailAndPassword(email, password)
    app.auth().currentUser.updateProfile({
      displayName: name
    })
  }


  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrent(user)
    })
  }, [])

  console.log(current)

  return (
    <div>
      <div className='GeneralLoginDiv'>
        <div className='SubGeneralLoginDiv'>
          <div className='ContentHold'>
            {/* <div style={{ color: '#ddd' }}>Name</div>
            <Input
              className='InputDiv'
              placeholder='Name'
              type='name'
              autoFocus
              required
              value={userNameing}
              onChange={(e) => setUserNameing(e.target.value)}
            />
            <div style={{ color: '#ddd' }}>UserName</div>
            <Input
              className='InputDiv'
              placeholder='Email'
              type='email'
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p style={{ color: 'red', fontSize: '11px' }}> {emailError} </p> 
            <div style={{ color: '#ddd' }}>Password</div>
            <Input
              className='InputDiv'
              placeholder='Password'
              type='password'
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <p style={{ color: 'red', fontSize: '11px' }}> {passwordError} </p> */}
            <div>
              {hasAccount ? (
                <>
                  <div style={{ width: '300px', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>




                    <div style={{ color: '#ddd' }}>Name</div>
                    <Input
                      className='InputDiv'
                      placeholder='Name'
                      type='name'
                      autoFocus
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <div style={{ color: '#ddd' }}>UserName</div>
                    <Input
                      className='InputDiv'
                      placeholder='Email'
                      type='email'
                      autoFocus
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* <p style={{ color: 'red', fontSize: '11px' }}> {emailError} </p> */}
                    <div style={{ color: '#ddd' }}>Password</div>
                    <Input
                      className='InputDiv'
                      placeholder='Password'
                      type='password'
                      value={password}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <div style={{ color: '#ddd' }}>Short Bio</div>
                    <TextArea
                      className='InputDiv'
                      placeholder='Short Bio'
                      type='text'
                      value={bio}
                      required
                      onChange={(e) => setBio(e.target.value)}
                    />


                    {/* <p style={{ color: 'red', fontSize: '11px' }}> {passwordError} </p> */}
                    <Button onClick={handleLogin} style={{ color: '#fff', fontWeight: 'bold', backgroundColor: '#4081ec' }}>Sign In</Button>
                    <p style={{ color: '#ddd' }}>Don't Have An Account ? <span onClick={() => setHasAccount(!hasAccount)} style={{ color: 'yellow', cursor: 'pointer' }}>Sign Up</span></p>


                    <div>
                      {
                        current && <center>
                          <h2 style={{ color: '#fff' }}> {current.displayName} </h2>
                          <h4 style={{ color: '#fff' }}> {current.email} </h4>
                          <img src={current.photoURL} alt='' style={{ height: '100px', width: '100px', borderRadius: '100px', objectFit: 'cover', backgroundColor: 'darkcyan' }} />
                        </center>
                      }
                    </div>


                  </div>
                </>
              ) : (
                  <>
                    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                      <div style={{ color: '#ddd' }}>UserName</div>
                      <Input
                        className='InputDiv'
                        placeholder='Email'
                        type='email'
                        autoFocus
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {/* <p style={{ color: 'red', fontSize: '11px' }}> {emailError} </p> */}
                      <div style={{ color: '#ddd' }}>Password</div>
                      <Input
                        className='InputDiv'
                        placeholder='Password'
                        type='password'
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {/* <p style={{ color: 'red', fontSize: '11px' }}> {passwordError} </p> */}
                      <Button onClick={handleSignUp} style={{ color: '#fff', fontWeight: 'bold', backgroundColor: '#4081ec' }}>Sign Up</Button>
                      <p style={{ color: '#ddd' }}>Have An Account ? <span onClick={() => setHasAccount(!hasAccount)} style={{ color: 'lightGreen', cursor: 'pointer' }} >Sign In</span></p>
                    </div>
                  </>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
