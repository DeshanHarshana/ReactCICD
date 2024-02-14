import {createContext, useContext} from 'react'
import { User } from '../App'

export const DashboardContext = createContext<User | undefined>(undefined)

//custom hook
//this always return user object never return undefined

export function useUserContext(){
    const user  =  useContext(DashboardContext)

    if(user===undefined){
        throw new Error("You should wrap your base component with DashboardContext")
    }
    return user
}