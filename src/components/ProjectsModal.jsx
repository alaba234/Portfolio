// src/components/ProjectsModal.jsx
import React from 'react';
import { FaTimes } from 'react-icons/fa';

const ProjectsModal = ({ content, onClose }) => {
    // This is a placeholder component for a project details modal.
    // The actual content and styling would go here.
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 p-8 rounded-lg max-w-2xl w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-gray-400 transition-colors"
                >
                    <FaTimes size={24} />
                </button>
                <h2 className="text-3xl font-bold text-white mb-4">Project Details</h2>
                <p className="text-gray-300">
                    This is a placeholder for the project modal content.
                </p>
            </div>
        </div>
    );
};

export default ProjectsModal;