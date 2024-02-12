import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {

    // Buscar os Itens Salvos
    const getItem = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key)
            return JSON.parse(passwords) || [];
        } catch (error) {
            console.log("Erro ao Buscar",error)
            return [];
        }
    }

    // Salvar os Itens no Storage
    const saveItem = async (key, value) => {
        try {
            let passwaords = await getItem(key)

            passwaords.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(passwaords))
            
        } catch (error) {
            console.log("ERRO AO SALVAR",error)
        }
        
    }

    // Remover do Storage

    const removeItem = async (key, item) => {
        try {
            let passwords = await getItem(key)
            
            let myPasswords = passwords.filter( (password) => {
                return(password !== item)
            })
            
            await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
            return myPasswords

        } catch (error) {
            console.log("ERRO AO DELETAR", error)
        }
        
    }

    return{
        getItem,
        saveItem,
        removeItem
    }

}

export default useStorage;