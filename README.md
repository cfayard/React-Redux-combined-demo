
# Node modules you need:
- `redux`
- `react-redux`

# Conventions (what to files to put your code in)

## Redux

- `actions.js` - action constants nad y9ur action creator functions
- `reducers.js` (or a folder) - import your actions and define reducer functions
- `CounterApp.js` - define store so that the REact app can use it

### "Dumb components" (a.k.a "John Snow components") 

- they know nothing about redux
- they accept props
    - show the props
    - use props as event handlers
- `components/` - holds all your dumb components

### "Smart containers" (a.ka "The Iron Man suit")

- `containers/` - holds all your smart containers
- they know all about redux
    - have access to redux state
    - can call the store's `dispatch()`
- they dont know about React
    - they import your dumb components
- they wire together your dumb components and redux's `state` and `dispatch`
    - define `mapStateToProps` function
    - define `mapDispatchToProps` function