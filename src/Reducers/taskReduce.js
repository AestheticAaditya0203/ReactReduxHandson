const initialData = {
    list: []
}
const taskReduce = (state = initialData, action) => {
    switch (action.type) {
        case "ADD":
            const { id, data } = action.payload;

            return {
                ...state,
                data: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

        default: return state;
    }
}

export default taskReduce