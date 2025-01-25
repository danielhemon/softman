import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecordService {
  constructor() {}

  get() {
    return [
      {
        id: 1,
        nombre: 'Examen 1',
        nombrePaciente: 'Paciente 1',
        modalidadExamen: 'Modalidad 1',
        estado: 'Pendiente',
      },
      {
        id: 2,
        nombre: 'Examen 2',
        nombrePaciente: 'Paciente 2',
        modalidadExamen: 'Modalidad 2',
        estado: 'En Progreso',
      },
      {
        id: 3,
        nombre: 'Examen 3',
        nombrePaciente: 'Paciente 3',
        modalidadExamen: 'Modalidad 3',
        estado: 'Completado',
      },
      {
        id: 4,
        nombre: 'Examen 4',
        nombrePaciente: 'Paciente 4',
        modalidadExamen: 'Modalidad 4',
        estado: 'Pendiente',
      },
      {
        id: 5,
        nombre: 'Examen 5',
        nombrePaciente: 'Paciente 5',
        modalidadExamen: 'Modalidad 5',
        estado: 'En Progreso',
      },
      {
        id: 6,
        nombre: 'Examen 6',
        nombrePaciente: 'Paciente 6',
        modalidadExamen: 'Modalidad 6',
        estado: 'Completado',
      },
    ];
  }
}
