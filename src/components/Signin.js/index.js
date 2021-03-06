import React from 'react';

import { Container , FormWrap , FormContent , Icon , Form , FormH1 , FormLabel ,FormInput ,FormButton ,Text} from './SigninElements'

const SignIn = () => {
    return (
        <Container>
          <FormWrap>
          <Icon to="/">VB</Icon>
              <FormContent>
               <Form action="#">
            
                   <FormH1>Sign in to your account</FormH1>
                   <FormLabel htmFor="for">Email</FormLabel>
                   <FormInput type="email" required />
                   <FormLabel htmlFor="for">password</FormLabel>
                   <FormInput type="password" required />
                   <FormButton type="submit">Continue</FormButton>
                   <Text>Forget password</Text>
               </Form>
              </FormContent>
          </FormWrap>
        </Container>
    )
}

export default SignIn
