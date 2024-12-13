"use client";
import React, { useState, useRef } from 'react';
import * as faceapi from 'face-api.js';

interface Employee {
  name: string;
  id: string; // Employee ID as a string to manually input
  image?: string; // To store the employee's face reference image
  shifts: { [day: string]: string };
}

const AttendancePage: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    { id: '1', name: 'Pragati Methre', shifts: { Mon: '11a - 7p', Tue: '', Wed: '', Thu: '', Fri: '', Sat: '', Sun: '' } },
    { id: '2', name: 'Govardhan', shifts: { Mon: '', Tue: '3p - 11p', Wed: '', Thu: '', Fri: '', Sat: '', Sun: '' } },
  ]);
  const [days] = useState<string[]>(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
  const [, setIsRecognizing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Load models required for face recognition
  const loadModels = async () => {
    await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
    await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
  };

  const startFaceRecognition = async () => {
    setIsRecognizing(true);
    if (videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: {} })
        .then((stream) => {
          videoRef.current!.srcObject = stream;
          videoRef.current!.play();
        })
        .catch((err) => console.error('Camera error: ', err));

      await loadModels();

      videoRef.current!.addEventListener('play', async () => {
        const labeledFaceDescriptors = await loadLabeledImages();
        const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.6);

        const canvas = faceapi.createCanvasFromMedia(videoRef.current!);
        document.body.append(canvas);

        const displaySize = { width: videoRef.current!.width, height: videoRef.current!.height };
        faceapi.matchDimensions(canvas, displaySize);

        setInterval(async () => {
          const detections = await faceapi
            .detectAllFaces(videoRef.current!)
            .withFaceLandmarks()
            .withFaceDescriptors();
          const resizedDetections = faceapi.resizeResults(detections, displaySize);

          canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);

          const results = resizedDetections.map((d) => faceMatcher.findBestMatch(d.descriptor));
          results.forEach((result) => {
            const employee = employees.find((e) => e.name === result.label);
            if (employee) {
              console.log(`Face matched with: ${employee.name}`);
              markAttendance(employee.id);
            }
          });
        }, 1000);
      });
    }
  };

  const loadLabeledImages = async () => {
    return Promise.all(
      employees.map(async (employee) => {
        const descriptions = [];
        const img = await faceapi.fetchImage(employee.image!);
        const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
        if (detections) {
          descriptions.push(detections.descriptor);
        }
        return new faceapi.LabeledFaceDescriptors(employee.name, descriptions);
      })
    );
  };

  const markAttendance = (id: string) => {
    console.log(`Marking attendance for employee ID: ${id}`);
    // Add logic to update attendance
  };

  // Add a new employee dynamically
  const addEmployee = () => {
    const newEmployee: Employee = {
      id: '', // Initially empty, the user will fill this in
      name: `Employee ${employees.length + 1}`,
      shifts: days.reduce((acc, day) => ({ ...acc, [day]: '' }), {}),
    };
    setEmployees([...employees, newEmployee]);
  };

  // Update shift information for a specific employee
  const updateShift = (id: string, day: string, shift: string) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id
          ? { ...employee, shifts: { ...employee.shifts, [day]: shift } }
          : employee
      )
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Attendance Page with Face Recognition</h1>
      <button style={styles.button} onClick={addEmployee}>
        Add Employee
      </button>
      <button style={styles.button} onClick={startFaceRecognition}>
        Start Face Recognition
      </button>
      <video ref={videoRef} style={styles.video} />

      <div style={styles.grid}>
        <div style={styles.employeeColumn}>
          <strong>Employees</strong>
          {employees.map((employee) => (
            <div key={employee.id} style={styles.employeeRow}>
              <input
                type="text"
                placeholder="Employee ID"
                value={employee.id}
                onChange={(e) => updateShift(employee.id, 'id', e.target.value)}
                style={styles.input}
              />
              {employee.name}
            </div>
          ))}
        </div>
        <div style={styles.calendar}>
          <div style={styles.daysRow}>
            {days.map((day) => (
              <div key={day} style={styles.dayCell}>
                <strong>{day}</strong>
              </div>
            ))}
          </div>
          {employees.map((employee) => (
            <div key={employee.id} style={styles.shiftsRow}>
              {days.map((day) => (
                <div key={day} style={styles.shiftCell}>
                  <input
                    type="text"
                    placeholder="Shift"
                    value={employee.shifts[day]}
                    onChange={(e) => updateShift(employee.id, day, e.target.value)}
                    style={styles.input}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  button: {
    display: 'block',
    margin: '10px auto',
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  video: {
    display: 'block',
    margin: '10px auto',
    border: '2px solid #007BFF',
    width: '600px',
    height: '400px',
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '20px',
  },
  employeeColumn: {
    width: '20%',
    borderRight: '1px solid #ddd',
    padding: '10px',
  },
  calendar: {
    width: '80%',
  },
  daysRow: {
    display: 'flex',
    backgroundColor: '#f4f4f4',
  },
  dayCell: {
    flex: 1,
    textAlign: 'center',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  shiftsRow: {
    display: 'flex',
  },
  employeeRow: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  shiftCell: {
    flex: 1,
    borderBottom: '1px solid #ddd',
    borderRight: '1px solid #ddd',
    padding: '5px',
  },
  input: {
    width: '100%',
    padding: '5px',
    boxSizing: 'border-box',
  },
};

export default AttendancePage;
