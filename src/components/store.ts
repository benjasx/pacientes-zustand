import { create } from "zustand"
import { DraftPatien, Patient } from "../types"


type PatientState = {
    patients: Patient[]
    addPatient : (data: DraftPatien) => void
}

export const usePatientStore = create<PatientState>(() => ({
    patients : [],
    addPatient: (data) => {
        console.log(data)
    }
}))