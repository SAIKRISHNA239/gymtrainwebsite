import jsPDF from "jspdf";

/**
 * BrochureButton
 * - Creates a clean 1-page brochure with wrapped text & sections.
 */
export default function BrochureButton({
  name = "Gym Trainer",
  plan = "Pro",
  email = "contact@example.com",
}) {
  const onClick = () => {
    const doc = new jsPDF({
      unit: "pt",
      format: "a4",
    });

    // --- Layout Constants ---
    const margin = 40;
    let y = margin;

    // --- Header Bar ---
    doc.setFillColor(255, 59, 48); // Red bar theme
    doc.rect(0, 0, doc.internal.pageSize.width, 50, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor("#ffffff");
    doc.text("GYM TRAINER – BROCHURE", margin, 32);

    y += 40;

    // Reset text color
    doc.setTextColor("#000000");

    // --- Section: Title ---
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Your Trainer Overview", margin, y);
    y += 20;

    // --- Trainer Details ---
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    doc.text(`Trainer: ${name}`, margin, y);
    y += 18;

    doc.text(`Recommended Plan: ${plan}`, margin, y);
    y += 18;

    doc.text(`Contact: ${email}`, margin, y);
    y += 30;

    // --- Section: About Plan ---
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Plan Benefits", margin, y);
    y += 18;

    doc.setFont("helvetica", "normal");
    const benefits = [
      "Personal training + online coaching",
      "Custom meal plans tailored to your lifestyle",
      "Weekly accountability & progress tracking",
      "Video form checks and technique corrections",
      "Sustainable fat loss and strength progression",
      "200+ clients trained • 95% success rate",
    ];

    benefits.forEach((b) => {
      doc.circle(margin + 3, y - 3, 2, "F");
      doc.text(b, margin + 12, y);
      y += 16;
    });

    y += 10;

    // --- Section: Program Summary ---
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Program Summary", margin, y);
    y += 18;

    doc.setFont("helvetica", "normal");

    const summaryText =
      "This training program is built to deliver visible results in 4–8 weeks. It adapts to your schedule, fitness level, equipment access, and preferences. You'll receive continuous support, adjustments, and guidance to keep your transformation on track.";

    const wrapped = doc.splitTextToSize(summaryText, 520);
    doc.text(wrapped, margin, y);
    y += wrapped.length * 16 + 20;

    // --- Footer ---
    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);
    doc.text("Generated via Gym Trainer Platform", margin, 820);

    // download
    doc.save("gym-trainer-brochure.pdf");
  };

  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
    >
      Download Brochure (PDF)
    </button>
  );
}
