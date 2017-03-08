
const nameState = (state = { name: "z.c." } , action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
        console.log("change name")
      return {
          name: action.name
      }
    default:
      return state
  }
}

export default nameState
