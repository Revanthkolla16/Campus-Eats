import React from "react";

const steps = [
  {
    id: 1,
    text: "Login with your student email/ID, browse the cafeteria menu, and add items to your cart.",
  },
  {
    id: 2,
    text: "Select a delivery slot and your hostel’s pickup point, then place the order with the ₹5 fee included.",
  },
  {
    id: 3,
    text: "Monitor your order’s progress in real-time as the cafeteria prepares and dispatches it.",
  },
  {
    id: 4,
    text: "Collect your meal at the designated pickup area below your hostel during your chosen slot.",
  },
];

const Instructions = () => (
  <section className="w-full flex flex-col items-center py-20 bg-white/80">
    <h2 className="text-4xl font-extrabold text-black mb-12 tracking-tight text-center">How It Works</h2>
    <div className="w-full max-w-5xl flex flex-col md:flex-row md:justify-center md:items-start">
      <ol className="relative w-full md:w-3/4 flex flex-col gap-10 md:gap-12 md:mx-auto">
        {/* Vertical line for stepper on desktop */}
        <div className="hidden md:block absolute left-5 top-8 bottom-8 w-1 bg-orange-100 z-0" />
        {steps.map((step) => (
          <li
            key={step.id}
            className="relative flex md:items-center items-start gap-6 bg-[#FFF9F7] rounded-2xl shadow-lg p-8 md:pl-20 border-l-4 border-orange-400 md:min-h-[120px] w-full"
            style={{ zIndex: 1 }}
          >
            {/* Step circle */}
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white font-bold text-2xl shadow absolute md:static left-[-36px] top-8 md:left-0 md:top-0">
              {step.id}
            </span>
            <span className="text-xl text-gray-700 leading-relaxed">{step.text}</span>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Instructions; 