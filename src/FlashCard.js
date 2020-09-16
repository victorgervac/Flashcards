import React from "react";
import {Button, Card} from "semantic-ui-react";


const FlashCard = ({ id, subject, notes, remove}) => {
  return (
    <div> 
      <Card>
        <Card.Content>
          <div>
          <Card  color='green' header={subject}/>
          <Card.Description>
          <Card 
          color="yellow" description={notes}/>
          <Button onClick={() =>remove(id)} color="red"> Delete </Button>
          </Card.Description>
          </div>
        </Card.Content>
      </Card>
    </div>
  )
};

export default FlashCard;


