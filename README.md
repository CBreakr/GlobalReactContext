
## React Context

### The basic rundown:

- create a file for the Context you wish to create (MainContext.js)
    - ```const MainContext = React.createContext({});```
- import the Context into the parent component (App.js)
- wrap the highest component you wish to use that Context in a Context.Provider tag
- pass in any object you want as a value to that tag
    - ```<MainContext.Provider value={object}> ... </MainContext.Provider>```
- import the Context in a child component which wants to use values stored in Context (Child.js)
- use the following within a child class component to establish a connection:
    - ```static contextType = MainContext;```
- refer to any values within the Context value object using ```this.context```