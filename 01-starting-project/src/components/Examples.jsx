import TabButtons from "./TabButtons";
import { EXAMPLES } from "../data";
import { useState } from "react";
import Section from "./Section";

export default function (){

    const [seletedTab,setSelectedTab]=useState();
    function tabSelect(tab){
      setSelectedTab(tab)
    }

    const menuBar=
          <>
              <TabButtons active={seletedTab=="components"} onSelect={()=>tabSelect('components')}>components</TabButtons>
              <TabButtons active={seletedTab=="jsx"} onSelect={()=>tabSelect('jsx')}>jsx</TabButtons>
              <TabButtons active={seletedTab=="props"} onSelect={()=>tabSelect('props')}>props</TabButtons>
              <TabButtons active={seletedTab=="state"} onSelect={()=>tabSelect('state')}>state</TabButtons>
          </>

    const tabContent=<>
         { seletedTab? 
          <div id="tab-content">
              <h3>{EXAMPLES[seletedTab].title}</h3>            
              <p>{EXAMPLES[seletedTab].description}</p>
              <code>{EXAMPLES[seletedTab].code}</code>
          </div>:<div>Please select a tab</div>}
    </>
    return (
        <Section id="examples" items={menuBar} data-arman="arman in react" ContentWrpper="menu">{tabContent}</Section>
    )
}