import React from "react";
import FlashCard from "./FlashCard";
import { Card, Container } from "semantic-ui-react";

const FlashCards = ({cardsProp, removingFlashcard}) => {

  const renderFlashCards = () => {
    return cardsProp.map((e) =>{
      return <FlashCard
      key= {e.id} {...e} 
      remove ={removingFlashcard}
      />;
    });
  };

//Todo: set up toggleAnswer for each card to display the description of the card, or the answer
  return(
    <div>
    <Container>
      <Card.Group margin>
        {/* <Card  color='red' header='option 1' description="This is the answer for Option 1"/>
        <Card color='orange' header='Option 2' description="This is the answer for Option 1"/>
        <Card color='yellow' header='Option 3' description="This is the answer for Option 1"/> */}
        <Card>{renderFlashCards()}</Card>
      </Card.Group>

    </Container>
    </div>  

)
  // FlashCards.map(flashCard)
};

export default FlashCards;