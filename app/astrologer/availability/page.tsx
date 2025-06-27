"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slot {
  date: string;
  start: string;
  end: string;
  repeat: string;
}

const repeatOptions = ["None", "Daily", "Weekly"];

const AvailabilityPage = () => {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [form, setForm] = useState<Slot>({ date: "", start: "", end: "", repeat: "None" });
  const [showForm, setShowForm] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSlot = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.date || !form.start || !form.end) return;
    setSlots((prev) => [...prev, form]);
    setForm({ date: "", start: "", end: "", repeat: "None" });
  };

  const handleRemoveSlot = (idx: number) => {
    setSlots((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto bg-gray-50 dark:bg-gray-900 p-5 sm:p-8 rounded-xl shadow"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h1 className="text-2xl font-bold mb-4">Availability Schedule</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300">Set your available slots for consultations here.</p>
      <AnimatePresence>
        {showForm && (
          <motion.form
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            onSubmit={handleAddSlot}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <label className="block font-semibold text-sm mb-1">Date</label>
              <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full px-4 py-2 rounded border" required />
            </div>
            <div>
              <label className="block font-semibold text-sm mb-1">Start Time</label>
              <input type="time" name="start" value={form.start} onChange={handleChange} className="w-full px-4 py-2 rounded border" required />
            </div>
            <div>
              <label className="block font-semibold text-sm mb-1">End Time</label>
              <input type="time" name="end" value={form.end} onChange={handleChange} className="w-full px-4 py-2 rounded border" required />
            </div>
            <div>
              <label className="block font-semibold text-sm mb-1">Repeat</label>
              <select name="repeat" value={form.repeat} onChange={handleChange} className="w-full px-4 py-2 rounded border">
                {repeatOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="col-span-2 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="py-2 px-6 bg-purple-700 text-white font-bold rounded-lg mt-2 shadow"
              >
                Add Slot
              </motion.button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
      <div>
        <h2 className="text-lg font-semibold mb-2">Your Slots</h2>
        <div className="space-y-3">
          <AnimatePresence>
            {slots.length === 0 && (
              <motion.div
                className="text-gray-400 text-center py-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                No slots added yet.
              </motion.div>
            )}
            {slots.map((slot, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col sm:flex-row items-center justify-between bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 shadow-sm gap-2"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm">
                  <span><span className="font-semibold">Date:</span> {slot.date}</span>
                  <span><span className="font-semibold">Start:</span> {slot.start}</span>
                  <span><span className="font-semibold">End:</span> {slot.end}</span>
                  <span><span className="font-semibold">Repeat:</span> {slot.repeat}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: '#ef4444', color: '#fff' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1 rounded bg-red-100 text-red-600 font-semibold text-xs transition-colors"
                  onClick={() => handleRemoveSlot(idx)}
                >
                  Remove
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default AvailabilityPage;
