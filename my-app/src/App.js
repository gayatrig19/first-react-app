import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import EventBinding from './components/EventBinding';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import RenderingLists from './components/RenderingLists';


function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you!!" name="Mike" age="32" />
      <StatefulGreeting greeting="I'm a stateful class component!" name="Gayatri" />
      <StatefulGreetingWithCallback greeting="I'm a stateful greeting class component with callback!" name="Gayatri" />
      <StatefulGreetingWithPrevState greeting="I'm a stateful greeting class component with previous state!" name="Gayatri" />
      <EventsFunctional />
      <EventsClass />
      <EventBinding />
      <ConditionalRenderingFunctional connected={true} />
      <ConditionalRenderingClass />
      <NestingComponents />
      <MethodsAsPropsParent />
      <RenderingLists />

    </div>
  );
}

export default App;
