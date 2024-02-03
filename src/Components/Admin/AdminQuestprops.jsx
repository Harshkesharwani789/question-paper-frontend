import React from "react";
import Mcq_add from "./MultipleChoiceQuestion.jsx/Mcq_add";
import QandA_add8Sentences from "./ClassLKG/EightSentences/QandA_add8Sentences";
import AddMatches from "./ClassLKG/Matchthefollowing/AddMatches";
import RecorrectionaddAnswer from "./ClassLKG/Recorrect/RecorrectionaddAnswer";
import OddandOut_add from "./OaddAndout/OddandOut_add";
import AddRelationshipWord from "./ClassLKG/Relationship/AddRelationshipWord";
import AddOneWordQuestion from "./ClassLKG/Oneword/AddOneWordQuestion";
import TwoSentenceaddAnswer from "./ClassLKG/Twosentence/TwoSentenceaddAnswer";
import ThreeSentenceaddAnswer from "./ClassLKG/ThreeSentence/ThreeSentenceaddAnswer";
import QandA_5to6_addQandA from "./FiveAndSixSentences/QandA_5to6_addQandA";
import QandA_add6Sentences from "./SixSentences/QandA_add6Sentences";
import QandA_add7Sentences from "./SevenSentences/QandA_add7Sentences";
import QandA_add10Sentences from "./TenSentences/QandA_add10Sentences";
import AddDrawFigure from "./DrawFigure/AddDrawFigure";
import AddGraphQuestion from "./GraphQuestion/AddGraphQuestion";
import AddPoem from "./CompleteThePoem/AddPoem";
import ExpandExplain_add from "./ExpandAndExplain/ExpandExplain_add";

const componentMap = {
    // "Objective Questions",
    "Multiple Choice Questions": <Mcq_add />,
    // "Fill in the Blanks Questions",
    "Match the Following Questions":<AddMatches/>,
    "Recorrect the Answers Questions":<RecorrectionaddAnswer/>,
    "Odd and out words Questions":<OddandOut_add/>,
    "RelationShip Words Questions":<AddRelationshipWord/>,
    // "Grammer Questions",
    "One Word Question":<AddOneWordQuestion/>,
    "Two  Sentence Answer Questions":<TwoSentenceaddAnswer/>,
    "Two and three Sentence Answer Questions":<ThreeSentenceaddAnswer/>,
    // "Three and Four Sentence Answer Questions":,
    // "Five Sentence Answer Question":,
    "Five and Six Sentence Answer Questions":<QandA_5to6_addQandA/>,
    "Six Sentence Answer Questions":<QandA_add6Sentences/>,
    "Seven Sentence Answer Questions":<QandA_add7Sentences/>,
    "Eight Sentence Answer Questions":<QandA_add8Sentences/>,
    "Ten Sentence Answer Questions":<QandA_add10Sentences/>,
    "Expanding and Explanations Answer Questions":<ExpandExplain_add/>,
    "Answer the Questions and Draw the Figure Questions":<AddDrawFigure/>,
    "Graph Questions":<AddGraphQuestion/>,
    "Complete the Poem":<AddPoem/>,
    // "Situation UnderStatnding answer Questions",
    // "Poet,Time, Place, Writer answer questions",
    // "Letter Writting",
    // "Map Reading",


    
}

const AdminQuestprops = (props) => {
    console.log("prop",props);
    const { Types_Question } = props;
    console.log("hkh",Types_Question);
    const componentToRender = componentMap[Types_Question]

    return (
        <>
            {componentToRender}
        </>
    )
}
export default AdminQuestprops;
