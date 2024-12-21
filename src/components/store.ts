import { create } from "zustand"
import { DraftPatien, Patient } from "../types"
import { v4 as uuidv4 } from "uuid"

type PatientState = {
    patients: Patient[]
    addPatient : (data: DraftPatien) => void
}


const createPatient = (patient: DraftPatien) : Patient => {
    return{...patient, id: uuidv4()}
}

export const usePatientStore = create<PatientState>((set) => ({
    patients : [],
    addPatient: (data) => {

        const neePatient = createPatient(data)
        set((state)=> ({
            patients: [...state.patients, neePatient]
        }))
    }
}))