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
import Fillintheblanks_add from "./FillInTheBlanks/Fillintheblanks_add";
import AddPoetTimePlaceAnsQn from "./PoetTimePlaceAnsQN/AddPoetTimePlaceAnsQn";
import AddUnderstandAnsQN from "./UnderstandAnsQN/AddUnderstandAnsQN";
import FiveSentenceaddAnswer from "./ClassLKG/Fivesentence/FiveSentenceaddAnswer";
import FourSentenceaddAnswer from "./ClassLKG/foursentence/FourSentenceaddAnswer";
import Map_add from "./Map/Map_add";
import Objective_add from "./ObjectiveType/Objective_add";
import LetterWriting_add from "./LetterWriting.jsx/LetterWriting_add";
import AddGrammerQuestion from "./GrammerQuestion/AddGrammerQuestion";
import SituationAnalysis_add from "./SituationAnalysis/SituationAnalysis_add";
import AddClassification from "./Classification_QandA/AddClassification";
import Add from "./ClassLKG/Onesentence/Add";

const componentMap = {
    "Objective Questions":<Objective_add/>,
    "Multiple Choice Questions": <Mcq_add />,
    "Fill in the Blanks Questions":<Fillintheblanks_add/>,
    "Match the Following Questions":<AddMatches/>,
    "Recorrect the Answers Questions":<RecorrectionaddAnswer/>,
    "Odd and out words Questions":<OddandOut_add/>,
    "Classifications of Questions":<AddClassification/>,
    "One Sentence Answer Question":<Add/>,
    "RelationShip Words Questions":<AddRelationshipWord/>,
    "Grammer Questions":<AddGrammerQuestion/>,
    "One Word Question":<AddOneWordQuestion/>,
    "Two  Sentence Answer Questions":<TwoSentenceaddAnswer/>,
    "Two and three Sentence Answer Questions":<ThreeSentenceaddAnswer/>,
    "Three and Four Sentence Answer Questions":<FourSentenceaddAnswer/>,
    "Five Sentence Answer Question":<FiveSentenceaddAnswer/>,
    "Five and Six Sentence Answer Questions":<QandA_5to6_addQandA/>,
    "Six Sentence Answer Questions":<QandA_add6Sentences/>,
    "Seven Sentence Answer Questions":<QandA_add7Sentences/>,
    "Eight Sentence Answer Questions":<QandA_add8Sentences/>,
    "Ten Sentence Answer Questions":<QandA_add10Sentences/>,
    "Expanding and Explanations Answer Questions":<ExpandExplain_add/>,
    "Answer the Questions and Draw the Figure Questions":<AddDrawFigure/>,
    "Graph Questions":<AddGraphQuestion/>,
    "Complete the Poem":<AddPoem/>,
    "Situation UnderStatnding answer Questions":<SituationAnalysis_add/>,
    "Poet,Time, Place, Writer answer questions":<AddPoetTimePlaceAnsQn/>,
    "Letter Writting":<LetterWriting_add/>,
    "Map Reading":<Map_add/>,


    
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
