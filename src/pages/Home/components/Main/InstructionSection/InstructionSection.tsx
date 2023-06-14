import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from '../../../../../components/Image/Image';
import Button from '../../../../../components/Button/Button';
import withModal from '../../../../../hoc/withModalButton';

const ButtonWithModal = withModal(Button);

function InstructionSection() {
  const { t } = useTranslation();

  return (
    <section id="instruction">
      <div className="container">
        <div className="instruction-title">
          <h5>{t('instruction.title')}</h5>
          <h4>{t('instruction.strong-title')}</h4>
          <p>{t('instruction.content')}</p>
        </div>
        <div className="instruction-content">
          <div className="block-circle">
            <Image src="../../../../../assets/images/circle.svg" alt="circle" />
            <Image src="../../../../../assets/images/circle.svg" alt="circle" />
            <Image src="../../../../../assets/images/circle.svg" alt="circle" />
          </div>
          <div className="content-list">
            <Image src="../../../../../assets/images/1.svg" alt="1" />
            <img src="../../../../../components/Header/logo.png" alt="2" />
            <Image src="../../../../../assets/images/3.svg" alt="3" />
            <h6>{t('instruction.step1.title')}</h6>
            <h6>{t('instruction.step2.title')}</h6>
            <h6>{t('instruction.step3.title')}</h6>
            <p>{t('instruction.step1.content')}</p>
            <p>{t('instruction.step2.content')}</p>
            <p>{t('instruction.step3.content')}</p>
          </div>
        </div>
        <ButtonWithModal className="get-my-price" arrowPointer>
          {t('getMyPrice')}
        </ButtonWithModal>
      </div>
    </section>
  );
}

export default InstructionSection;
