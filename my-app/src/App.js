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
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import SearchBar from './components/SearchBar';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';
import HooksCounter from './components/HooksCounter';
import UseEffectCounter from './components/UseEffectCounter';


function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting />
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
      <LifeCyclesCDM />
      <LifeCyclesCDU />
      <LifeCyclesCWU />
      <ControlledForm />
      <UncontrolledForm />
      <SearchBar />
      <ControlledFormHooks /> */}
      <UseStateWithArrays />
      <UseStateWithObjects />
      <HooksCounter />
      <UseEffectCounter />
    </div>
  );
}

export default App;
