import React from "react";
import { useDrop } from "react-dnd";

const DroppableArea = ({ droppedWords, setDroppedWords }) => {
  const [, drop] = useDrop(() => ({
    accept: "WORD",
    drop: (item) => addWordToSentence(item.word),
  }));

  const addWordToSentence = (word) => {
    setDroppedWords((prevWords) => [...prevWords, word]);
  };

  return (
    <div
      ref={drop}
      style={{
        minHeight: "50px",
        border: "2px dashed gray",
        padding: "10px",
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        backgroundColor: "#f8f8f8",
      }}
    >
      {droppedWords.map((word, index) => (
        <span
          key={index}
          onClick={() =>
            setDroppedWords(droppedWords.filter((_, i) => i !== index))
          } // Clicking removes the word
          style={{
            padding: "8px",
            backgroundColor: "lightgreen",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          {word} 
        </span>
      ))}
    </div>
  );
};

export default DroppableArea;
