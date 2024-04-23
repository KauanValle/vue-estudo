import { reject } from "core-js/fn/promise"

export default {
    salvar(data){
        return new Promise((resolve) => {
            resolve(data);
        }) 
    }
}