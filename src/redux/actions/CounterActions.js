import { DECRIMENT, INCRIMENT, RESET } from "./Types"

export const incrimentAction = () => {
    return {
        type: INCRIMENT
    }
}
export const decrimentAction = () => {
    return {
        type: DECRIMENT
    }
}
export const resetAction = () => {
    return {
        type: RESET
    }
}
