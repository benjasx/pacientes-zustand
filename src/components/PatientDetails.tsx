import { Patient } from "../types";
import PatienDetailElement from "./PatienDetailElement";
import { usePatientStore } from "./store";

type PatientDetailsProps = {
  patient: Patient;
};

export default function PatientDetails({ patient }: PatientDetailsProps) {
  const deletePatient = usePatientStore((state) => state.deletePatient);
  const getPatientById = usePatientStore((state) => state.getPatientById);
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatienDetailElement label="ID" data={patient.id} />
      <PatienDetailElement label="nombre" data={patient.name} />
      <PatienDetailElement label="Cliente" data={patient.caretaker} />
      <PatienDetailElement label="correo" data={patient.email} />
      <PatienDetailElement
        label="fecha de alta"
        data={patient.date.toString()}
      />
      <PatienDetailElement label="Sintomas" data={patient.symptoms} />

      <div className="flex flex-col lg:flex-row justify-between gap-3 mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={()=> getPatientById(patient.id)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={()=>deletePatient(patient.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
