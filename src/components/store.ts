import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { DraftPatien, Patient } from "../types";
import { v4 as uuidv4 } from "uuid";

type PatientState = {
  patients: Patient[];
  actveId: Patient["id"];
  addPatient: (data: DraftPatien) => void;
  deletePatient: (id: Patient["id"]) => void;
  getPatientById: (id: Patient["id"]) => void;
  updatePatien: (data:DraftPatien) => void
};

const createPatient = (patient: DraftPatien): Patient => {
  return { ...patient, id: uuidv4() };
};

export const usePatientStore = create<PatientState>()(
  devtools((set) => ({
    patients: [],
    actveId: "",
    addPatient: (data) => {
      const neePatient = createPatient(data);
      set((state) => ({
        patients: [...state.patients, neePatient],
      }));
    },
    deletePatient: (id) => {
      set((state) => ({
        patients: state.patients.filter((patient) => patient.id !== id),
      }));
    },
    getPatientById: (id) => {
      set(() => ({
        actveId: id,
      }));
    },

    updatePatien:(data) => {
        set((state)=> ({
            patients: state.patients.map( patient =>patient.id === state.actveId ? {id: patient.id, ...data} : patient),
            actveId:''
        }))
    }
  }))
);
