import Card from "./Card";
import {CORE_CONCEPTS} from "./../data";
import Section from "./Section";
export default function CoreConcepts(){
    const cards=<>
            <Card {...CORE_CONCEPTS[0]}/>
            <Card {...CORE_CONCEPTS[1]}/>
            <Card {...CORE_CONCEPTS[2]}/>
            <Card {...CORE_CONCEPTS[3]}/>
    </>
    return(
        <Section id="core-concepts" items={cards} ContentWrpper="ul"/>
    )
}