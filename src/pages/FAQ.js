import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import HeaderCard from '../components/landing/HeaderCard';
import FooterCard from '../components/landing/FooterCard';
import header from '../assets/img/faq_header.svg';
import FAQCard from '../components/landing/FAQCard';
import { faqContent } from '../assets/content.js';
//css
import { Br } from '../assets/css/others.js';
import { OuterContainer, InnerContainer } from '../assets/css/containers.js';

import './style.css';

class FAQ extends Component {

  render() {
    return (
      <div>
      <Navbar />
      <br/><br/>
      <HeaderCard title={faqContent.title} content={faqContent.content} bg={header} isAction="true"/>
      <br/><br/>
      <OuterContainer>
        <InnerContainer>
        {faqContent.faqs.map(faqContent => (
          <FAQCard
            key={faqContent.question}
            question={faqContent.question}
            answer={faqContent.answer}
          />
        ))}
        </InnerContainer>
      </OuterContainer>
      <Br/><Br/>
      <FooterCard />
    </div>
    );
  }
}

export default FAQ;
