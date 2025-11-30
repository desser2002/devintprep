"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAllTechnologies } from "@/services/technologyService";
import { getTopicsByTechnology } from "@/services/topicService";
import { addQuestion } from "@/services/questionService";
import { Technology, Topic } from "@/types/category";
import CustomSelect, { SelectOption } from "@/components/CustomSelect";

export default function AddQuestionPage() {
  const router = useRouter();
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [selectedTechnologyId, setSelectedTechnologyId] = useState<string>("");

  const [formData, setFormData] = useState({
    title: "",
    topicId: "",
    isCodingChallenge: false,
  });

  const [errors, setErrors] = useState({
    title: "",
    topicId: "",
  });

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Load technologies on component mount
  useEffect(() => {
    async function loadTechnologies() {
      const techs = await getAllTechnologies();
      setTechnologies(techs);
    }
    loadTechnologies();
  }, []);

  // Load topics when technology is selected
  useEffect(() => {
    async function loadTopics() {
      if (selectedTechnologyId) {
        const topicsList = await getTopicsByTechnology(selectedTechnologyId);
        setTopics(topicsList);
      } else {
        setTopics([]);
      }
    }
    loadTopics();
  }, [selectedTechnologyId]);

  const handleTechnologyChange = (techId: string) => {
    setSelectedTechnologyId(techId);
    setFormData({ ...formData, topicId: "" }); // Reset selected topic
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error on input
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = (): boolean => {
    const newErrors = {
      title: "",
      topicId: "",
    };

    if (!formData.title.trim()) {
      newErrors.title = "Question title is required";
    } else if (formData.title.trim().length < 10) {
      newErrors.title = "Title must be at least 10 characters long";
    }

    if (!formData.topicId) {
      newErrors.topicId = "Please select a topic";
    }

    setErrors(newErrors);
    return !newErrors.title && !newErrors.topicId;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      await addQuestion({
        title: formData.title,
        topicId: formData.topicId,
        isCodingChallenge: formData.isCodingChallenge,
      });

      setSuccessMessage("Question added successfully!");

      // Reset form
      setFormData({
        title: "",
        topicId: "",
        isCodingChallenge: false,
      });
      setSelectedTechnologyId("");

      // Redirect to home page after 1.5 seconds
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (error) {
      console.error("Error adding question:", error);
      setErrors({
        ...errors,
        title: "Failed to add question. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Add New Question
          </h1>

          {successMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Question Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Question Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 ${
                  errors.title ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="e.g., What is useEffect in React?"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-500">{errors.title}</p>
              )}
            </div>

            {/* Technology Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Technology <span className="text-red-500">*</span>
              </label>
              <CustomSelect
                options={technologies.map((tech) => ({
                  id: tech.id,
                  label: tech.name,
                  iconUrl: tech.iconUrl,
                }))}
                selectedId={selectedTechnologyId}
                onChange={handleTechnologyChange}
                placeholder="-- Select Technology --"
              />
            </div>

            {/* Topic Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Topic <span className="text-red-500">*</span>
              </label>
              <CustomSelect
                options={topics.map((topic) => ({
                  id: topic.id,
                  label: topic.title,
                }))}
                selectedId={formData.topicId}
                onChange={(topicId) =>
                  setFormData({ ...formData, topicId })
                }
                placeholder={
                  selectedTechnologyId
                    ? "-- Select Topic --"
                    : "-- Select Technology First --"
                }
                disabled={!selectedTechnologyId}
                error={!!errors.topicId}
              />
              {errors.topicId && (
                <p className="mt-1 text-sm text-red-500">{errors.topicId}</p>
              )}
            </div>

            {/* Question Type */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="isCodingChallenge"
                name="isCodingChallenge"
                checked={formData.isCodingChallenge}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="isCodingChallenge"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                This is a coding challenge
              </label>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Adding..." : "Add Question"}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                disabled={isSubmitting}
                className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors font-medium disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
