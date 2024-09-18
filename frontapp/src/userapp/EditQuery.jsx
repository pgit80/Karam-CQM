import React, { useState, useEffect } from "react";

const EditQuery = ({ queryId, initialData, onCancel, onSave }) => {
  const [department, setDepartment] = useState(initialData.department);
  const [subject, setSubject] = useState(initialData.subject);
  const [description, setDescription] = useState(initialData.description);

  const handleSave = async () => {
    try {
      const response = await fetch(
        `https://karam-cqm.onrender.com/updatequery/${queryId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ department, subject, description }),
        }
      );

      if (response.ok) {
        onSave(); // Notify parent component to refresh the list
      }
    } catch (error) {
      console.error("Failed to update query:", error);
    }
  };

  return (
    <div className="bg-transparent text-light p-4 rounded-5 my-auto">
      <h5 className="text-center">Edit Query</h5>
      <div className="mb-3">
        <label>Department</label>
        <input
          type="text"
          className="form-control bg-transparent text-light"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Subject</label>
        <input
          type="text"
          className="form-control bg-transparent text-light"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Description</label>
        <textarea
          className="form-control bg-transparent text-light"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="text-center">
        <button className="btn btn-success me-2" onClick={handleSave}>
          Save
        </button>
        <button className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditQuery;
