import React from 'react';
import FormInput from '../form-inputs/form-input.component';
import CustomButton from '../custom-button/custom-button.components';
import ThankyouImageSrc  from "../../assets/thankyou.jpg";


import {
  ContactFormContainer,
  ContactWrapperContainer,
  ThankYouContainer,
  ContactFormTitle,
  ButtonsBarContainer
} from './contact.style';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      message: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    try {
      this.setState({ email: '', message: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
    <ContactWrapperContainer>        
      <ContactFormContainer>
        <ContactFormTitle>Contact Us</ContactFormTitle>
        <span>please feel free to contact us for any inquiries</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='message'
            type='message'
            value={this.state.message}
            handleChange={this.handleChange}
            label='message'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'> Submit </CustomButton>
          </ButtonsBarContainer>
        </form>
      </ContactFormContainer>
      <ThankYouContainer>
        <img src={ ThankyouImageSrc } alt="thank you"/>
      </ThankYouContainer>
    </ContactWrapperContainer>
    );
  }
}

export default Contact;
