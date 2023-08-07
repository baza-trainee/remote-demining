import { FC } from 'react';

import SectionContainer from '../SectionContainer/SectionContainer';

import FAQItem from './FAQItem/FAQItem';
import { faqs } from './faqs';

interface FAQProps {}

const FAQ: FC<FAQProps> = ({}) => {
  return (
    <SectionContainer>
      <ul>
        {faqs.map((faq, i) => (
          <FAQItem key={i} faq={faq} />
        ))}
      </ul>
    </SectionContainer>
  );
};

export default FAQ;
