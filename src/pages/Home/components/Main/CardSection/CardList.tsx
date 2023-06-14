import React, { useEffect, useState, DragEvent } from 'react';
import { useTranslation } from 'react-i18next';
import Card from './Card';
import Button from '../../../../../components/Button/Button';
import './card.scss';
import { ICard } from '../../../../../interface/interface';

interface CardListProps {
  list: ICard[];
}

function CardList({ list }: CardListProps): JSX.Element {
  const [cardList, setCardList] = useState<ICard[]>(list);
  const { i18n } = useTranslation();

  useEffect(() => {
    setCardList(list);
  }, [list]);

  const [currentCard, setCurrentCard] = useState<null | ICard>(null);

  const dragStartHandler = (card: ICard, index: number) => {
    setCardList(prevCardList => {
      return prevCardList.map((c, i) => {
        return i === index ? { ...card, hide: true } : c;
      });
    });
    setCurrentCard(card);
  };

  const dragOverHandler = (e: DragEvent<HTMLDivElement>, card: ICard) => {
    e.preventDefault();
    if (currentCard) {
      const draggedCardIndex = cardList.findIndex(c => c.id === currentCard.id);
      const currentCardIndex = cardList.findIndex(c => c.id === card.id);
      const updatedCardList = [...cardList];

      const tempOrder = updatedCardList[draggedCardIndex].order;

      updatedCardList[draggedCardIndex] = {
        ...updatedCardList[draggedCardIndex],
        order: updatedCardList[currentCardIndex].order,
      };
      updatedCardList[currentCardIndex] = {
        ...updatedCardList[currentCardIndex],
        order: tempOrder,
      };

      setCardList(updatedCardList);
    }
  };

  const dragEndHandler = () => {
    const updatedCardList = [...cardList].map(card => {
      return card.hide ? { ...card, hide: false } : card;
    });
    setCardList(updatedCardList);
    setCurrentCard(null);
  };

  const sortCards = (a: ICard, b: ICard) => (a.order > b.order ? 1 : -1);

  return (
    <div className="cards-block">
      {cardList.sort(sortCards).map((card, index) => (
        <Card
          onDragStart={() => dragStartHandler(card, index)}
          onDragOver={e => dragOverHandler(e, card)}
          onDragEnd={dragEndHandler}
          className={`card${card.id} ${card.hide && 'hide'} ${
            i18n.language === 'ua' && 'card_ua'
          }`}
          key={card.id}
        >
          <h4>{card.title}</h4>
          <p>{card.textCard}</p>
          <Button arrowPointer>{card.textLink}</Button>
        </Card>
      ))}
    </div>
  );
}

export default CardList;
