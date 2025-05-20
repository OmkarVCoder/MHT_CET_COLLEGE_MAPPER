const colleges = [
  { name: "COEP Pune", city: "Pune", cutoff: { OPEN: 99.5, OBC: 97.0, SC: 90.0, ST: 85.0, EWS: 88.0, PwD: 80.0 }, type: "Government", fee: "₹90K" },
  { name: "VJTI Mumbai", city: "Mumbai", cutoff: { OPEN: 99.2, OBC: 96.5, SC: 89.5, ST: 84.5, EWS: 87.5, PwD: 79.5 }, type: "Government", fee: "₹85K" },
  { name: "GEC Aurangabad", city: "Aurangabad", cutoff: { OPEN: 95.0, OBC: 92.0, SC: 85.0, ST: 80.0, EWS: 83.0, PwD: 75.0 }, type: "Government", fee: "₹75K" },
  { name: "PCCOE Pune", city: "Pune", cutoff: { OPEN: 87.3, OBC: 85.0, SC: 78.0, ST: 75.0, EWS: 78.0, PwD: 70.0 }, type: "Private", fee: "₹1.2L" },
  { name: "MIT Pune", city: "Pune", cutoff: { OPEN: 83.0, OBC: 80.0, SC: 75.0, ST: 70.0, EWS: 73.0, PwD: 65.0 }, type: "Private", fee: "₹1.5L" },
  { name: "GCOE Amravati", city: "Amravati", cutoff: { OPEN: 93.8, OBC: 90.0, SC: 83.0, ST: 78.0, EWS: 80.0, PwD: 72.0 }, type: "Government", fee: "₹65K" },
  { name: "Walchand College of Engineering", city: "Sangli", cutoff: { OPEN: 94.7, OBC: 91.0, SC: 84.0, ST: 79.0, EWS: 82.0, PwD: 74.0 }, type: "Government", fee: "₹70K" },
  { name: "SPIT Mumbai", city: "Mumbai", cutoff: { OPEN: 92.5, OBC: 89.0, SC: 82.0, ST: 77.0, EWS: 79.0, PwD: 71.0 }, type: "Private", fee: "₹1.1L" },
  { name: "KJ Somaiya College", city: "Mumbai", cutoff: { OPEN: 91.2, OBC: 88.0, SC: 81.0, ST: 76.0, EWS: 78.0, PwD: 70.0 }, type: "Private", fee: "₹1.4L" },
  { name: "Fr. CRCE", city: "Mumbai", cutoff: { OPEN: 89.8, OBC: 86.0, SC: 79.0, ST: 74.0, EWS: 76.0, PwD: 68.0 }, type: "Private", fee: "₹1.3L" },
  { name: "Sinhgad COE", city: "Pune", cutoff: { OPEN: 78.6, OBC: 75.0, SC: 70.0, ST: 65.0, EWS: 68.0, PwD: 60.0 }, type: "Private", fee: "₹1.1L" },
  { name: "DY Patil COE", city: "Pune", cutoff: { OPEN: 85.1, OBC: 82.0, SC: 75.0, ST: 70.0, EWS: 73.0, PwD: 65.0 }, type: "Private", fee: "₹1.2L" },
  { name: "BVCOE Pune", city: "Pune", cutoff: { OPEN: 84.4, OBC: 81.0, SC: 74.0, ST: 69.0, EWS: 72.0, PwD: 64.0 }, type: "Private", fee: "₹1.3L" },
  { name: "RJIT Pune", city: "Pune", cutoff: { OPEN: 80.5, OBC: 77.0, SC: 70.0, ST: 65.0, EWS: 68.0, PwD: 60.0 }, type: "Private", fee: "₹1.2L" },
  { name: "VIT Pune", city: "Pune", cutoff: { OPEN: 88.3, OBC: 85.0, SC: 78.0, ST: 73.0, EWS: 76.0, PwD: 68.0 }, type: "Private", fee: "₹1.4L" },
  { name: "AIT Pune", city: "Pune", cutoff: { OPEN: 93.0, OBC: 90.0, SC: 83.0, ST: 78.0, EWS: 81.0, PwD: 73.0 }, type: "Government", fee: "₹80K" },
  { name: "RAIT Navi Mumbai", city: "Mumbai", cutoff: { OPEN: 85.9, OBC: 82.0, SC: 75.0, ST: 70.0, EWS: 73.0, PwD: 65.0 }, type: "Private", fee: "₹1.3L" },
  { name: "Vidyalankar Institute", city: "Mumbai", cutoff: { OPEN: 83.4, OBC: 80.0, SC: 73.0, ST: 68.0, EWS: 71.0, PwD: 63.0 }, type: "Private", fee: "₹1.2L" },
  { name: "GCOE Jalgaon", city: "Jalgaon", cutoff: { OPEN: 86.0, OBC: 83.0, SC: 76.0, ST: 71.0, EWS: 74.0, PwD: 66.0 }, type: "Government", fee: "₹65K" },
  { name: "JSPM RSCOE Pune", city: "Pune", cutoff: { OPEN: 79.8, OBC: 76.0, SC: 69.0, ST: 64.0, EWS: 67.0, PwD: 59.0 }, type: "Private", fee: "₹1.1L" },
  { name: "Shivajirao S. Jondhale College", city: "Thane", cutoff: { OPEN: 82.1, OBC: 79.0, SC: 72.0, ST: 67.0, EWS: 70.0, PwD: 62.0 }, type: "Private", fee: "₹1.0L" },
  { name: "PVG's COET Pune", city: "Pune", cutoff: { OPEN: 87.7, OBC: 84.0, SC: 77.0, ST: 72.0, EWS: 75.0, PwD: 67.0 }, type: "Private", fee: "₹1.3L" },
  { name: "Terna COE Navi Mumbai", city: "Navi Mumbai", cutoff: { OPEN: 80.0, OBC: 77.0, SC: 70.0, ST: 65.0, EWS: 68.0, PwD: 60.0 }, type: "Private", fee: "₹1.2L" },
  { name: "GCOE Karad", city: "Karad", cutoff: { OPEN: 88.0, OBC: 85.0, SC: 78.0, ST: 73.0, EWS: 76.0, PwD: 68.0 }, type: "Government", fee: "₹70K" },
  { name: "Datta Meghe COE", city: "Wardha", cutoff: { OPEN: 76.3, OBC: 73.0, SC: 66.0, ST: 61.0, EWS: 64.0, PwD: 56.0 }, type: "Private", fee: "₹90K" },
  { name: "Sandip University", city: "Nashik", cutoff: { OPEN: 73.0, OBC: 70.0, SC: 63.0, ST: 58.0, EWS: 61.0, PwD: 53.0 }, type: "Private", fee: "₹1.1L" },
  { name: "SRES COE Kopargaon", city: "Kopargaon", cutoff: { OPEN: 75.2, OBC: 72.0, SC: 65.0, ST: 60.0, EWS: 63.0, PwD: 55.0 }, type: "Private", fee: "₹95K" },
  { name: "SVERI COE Pandharpur", city: "Pandharpur", cutoff: { OPEN: 74.5, OBC: 71.0, SC: 64.0, ST: 59.0, EWS: 62.0, PwD: 54.0 }, type: "Private", fee: "₹85K" },
  { name: "Lokmanya Tilak COE Navi Mumbai", city: "Navi Mumbai", cutoff: { OPEN: 81.4, OBC: 78.0, SC: 71.0, ST: 66.0, EWS: 69.0, PwD: 61.0 }, type: "Private", fee: "₹1.2L" },
  { name: "Bhivarabai Sawant COE Pune", city: "Pune", cutoff: { OPEN: 78.0, OBC: 75.0, SC: 68.0, ST: 63.0, EWS: 66.0, PwD: 58.0 }, type: "Private", fee: "₹1.0L" },
  { name: "Noble Polytechnic", city: "Jalgaon", cutoff: { OPEN: 87.77, OBC: 84.35, SC: 79.7, ST: 72.27, EWS: 80.2, PwD: 71.76 }, type: "Government", fee: "₹130K" },
  { name: "Saraswati Engineering College", city: "Jalgaon", cutoff: { OPEN: 86.18, OBC: 82.15, SC: 74.94, ST: 70.92, EWS: 78.34, PwD: 70.02 }, type: "Private", fee: "₹90K" },
  { name: "Shri Tech Institute", city: "Pune", cutoff: { OPEN: 84.6, OBC: 81.69, SC: 75.59, ST: 68.87, EWS: 78.14, PwD: 68.4 }, type: "Government", fee: "₹100K" },
  { name: "Noble Technology", city: "Mumbai", cutoff: { OPEN: 83.01, OBC: 79.55, SC: 73.84, ST: 70.16, EWS: 77.6, PwD: 64.64 }, type: "Private", fee: "₹65K" },
  { name: "Techno COE", city: "Mumbai", cutoff: { OPEN: 81.42, OBC: 77.26, SC: 70.69, ST: 69.3, EWS: 74.58, PwD: 64.38 }, type: "Private", fee: "₹130K" },
  { name: "Govt. Engineering College", city: "Nagpur", cutoff: { OPEN: 79.83, OBC: 75.61, SC: 69.2, ST: 62.17, EWS: 72.88, PwD: 64.06 }, type: "Government", fee: "₹90K" },
  { name: "Mahatma Polytechnic", city: "Mumbai", cutoff: { OPEN: 78.25, OBC: 74.2, SC: 67.4, ST: 61.6, EWS: 70.58, PwD: 62.55 }, type: "Private", fee: "₹120K" },
  { name: "Shri COE", city: "Pune", cutoff: { OPEN: 76.66, OBC: 72.94, SC: 65.75, ST: 60.01, EWS: 68.62, PwD: 60.23 }, type: "Private", fee: "₹130K" },
  { name: "Techno Institute of Engg", city: "Kolhapur", cutoff: { OPEN: 75.07, OBC: 71.43, SC: 63.33, ST: 57.32, EWS: 66.76, PwD: 59.36 }, type: "Government", fee: "₹75K" },
  { name: "Mahatma College of Engineering", city: "Aurangabad", cutoff: { OPEN: 73.48, OBC: 69.7, SC: 60.6, ST: 55.56, EWS: 64.92, PwD: 56.92 }, type: "Private", fee: "₹120K" },
  { name: "Dr. Institute of Engg", city: "Nashik", cutoff: { OPEN: 71.89, OBC: 68.12, SC: 59.24, ST: 52.87, EWS: 63.13, PwD: 54.6 }, type: "Private", fee: "₹130K" },
  { name: "Lokmanya Polytechnic", city: "Pune", cutoff: { OPEN: 70.31, OBC: 66.7, SC: 57.61, ST: 52.43, EWS: 61.1, PwD: 53.58 }, type: "Private", fee: "₹130K" },
  { name: "Savitribai COE", city: "Nashik", cutoff: { OPEN: 68.72, OBC: 64.46, SC: 55.54, ST: 49.28, EWS: 59.51, PwD: 52.54 }, type: "Private", fee: "₹130K" },
  { name: "Saraswati Institute of Tech", city: "Thane", cutoff: { OPEN: 67.13, OBC: 63.12, SC: 53.92, ST: 47.8, EWS: 57.64, PwD: 50.85 }, type: "Private", fee: "₹140K" },
  { name: "Techno Engg College", city: "Solapur", cutoff: { OPEN: 65.54, OBC: 61.31, SC: 52.16, ST: 47.07, EWS: 55.99, PwD: 48.35 }, type: "Private", fee: "₹140K" },
  { name: "Noble School of Engg", city: "Nagpur", cutoff: { OPEN: 63.95, OBC: 60.26, SC: 50.65, ST: 45.43, EWS: 54.41, PwD: 47.28 }, type: "Private", fee: "₹110K" },
  { name: "Mahatma COE", city: "Thane", cutoff: { OPEN: 62.37, OBC: 58.5, SC: 48.79, ST: 42.4, EWS: 52.36, PwD: 44.49 }, type: "Private", fee: "₹130K" },
  { name: "Savitribai Institute of Tech", city: "Kolhapur", cutoff: { OPEN: 60.78, OBC: 56.88, SC: 46.96, ST: 41.02, EWS: 50.66, PwD: 42.13 }, type: "Private", fee: "₹100K" },
  { name: "Bharatiya Polytechnic", city: "Jalgaon", cutoff: { OPEN: 59.19, OBC: 55.43, SC: 45.58, ST: 39.45, EWS: 48.95, PwD: 40.27 }, type: "Private", fee: "₹75K" },
  { name: "Noble Institute of Tech", city: "Amravati", cutoff: { OPEN: 57.6, OBC: 53.82, SC: 43.91, ST: 37.63, EWS: 47.04, PwD: 39.41 }, type: "Private", fee: "₹140K" },
  { name: "Shri School of Engg", city: "Mumbai", cutoff: { OPEN: 56.01, OBC: 52.36, SC: 42.54, ST: 35.82, EWS: 45.12, PwD: 37.68 }, type: "Private", fee: "₹75K" },
  { name: "Dr. Polytechnic", city: "Solapur", cutoff: { OPEN: 54.43, OBC: 50.48, SC: 40.94, ST: 34.25, EWS: 43.51, PwD: 36.2 }, type: "Private", fee: "₹120K" },
  { name: "Shri Engineering College", city: "Aurangabad", cutoff: { OPEN: 52.84, OBC: 48.9, SC: 39.26, ST: 32.53, EWS: 41.43, PwD: 35.03 }, type: "Private", fee: "₹130K" },
  { name: "Techno Institute of Engg", city: "Nagpur", cutoff: { OPEN: 51.25, OBC: 47.64, SC: 37.83, ST: 30.89, EWS: 39.49, PwD: 33.55 }, type: "Private", fee: "₹130K" },
  { name: "Mahatma Engg College", city: "Mumbai", cutoff: { OPEN: 49.66, OBC: 45.59, SC: 36.34, ST: 29.36, EWS: 37.81, PwD: 32.16 }, type: "Private", fee: "₹130K" },
  { name: "Noble COE", city: "Thane", cutoff: { OPEN: 48.08, OBC: 43.64, SC: 34.56, ST: 27.48, EWS: 35.77, PwD: 30.33 }, type: "Private", fee: "₹130K" },
  { name: "Dr. Tech Institute", city: "Pune", cutoff: { OPEN: 46.49, OBC: 41.62, SC: 32.85, ST: 25.64, EWS: 33.89, PwD: 28.56 }, type: "Private", fee: "₹120K" },
  { name: "Savitribai Polytechnic", city: "Nashik", cutoff: { OPEN: 44.9, OBC: 39.7, SC: 31.18, ST: 23.82, EWS: 31.81, PwD: 27.44 }, type: "Private", fee: "₹140K" },
  { name: "Lokmanya COE", city: "Kolhapur", cutoff: { OPEN: 43.31, OBC: 37.86, SC: 29.75, ST: 22.18, EWS: 29.93, PwD: 25.64 }, type: "Private", fee: "₹100K" },
  { name: "Bharatiya Institute of Engg", city: "Aurangabad", cutoff: { OPEN: 41.72, OBC: 35.94, SC: 28.2, ST: 20.67, EWS: 27.92, PwD: 24.31 }, type: "Private", fee: "₹90K" },
  { name: "Shri Tech Institute", city: "Nagpur", cutoff: { OPEN: 40.14, OBC: 34.56, SC: 26.6, ST: 19.05, EWS: 26.13, PwD: 22.58 }, type: "Private", fee: "₹100K" },
  { name: "Techno Polytechnic", city: "Solapur", cutoff: { OPEN: 38.55, OBC: 32.98, SC: 25.04, ST: 17.46, EWS: 24.09, PwD: 21.37 }, type: "Private", fee: "₹75K" },
  { name: "Noble COE", city: "Jalgaon", cutoff: { OPEN: 36.96, OBC: 31.42, SC: 23.38, ST: 15.94, EWS: 22.08, PwD: 19.5 }, type: "Private", fee: "₹110K" },
  { name: "Mahatma School of Engg", city: "Amravati", cutoff: { OPEN: 35.37, OBC: 29.84, SC: 21.8, ST: 14.27, EWS: 20.21, PwD: 18.07 }, type: "Private", fee: "₹130K" },
  { name: "Savitribai Engineering College", city: "Thane", cutoff: { OPEN: 33.78, OBC: 28.23, SC: 20.27, ST: 12.72, EWS: 18.27, PwD: 16.44 }, type: "Private", fee: "₹140K" },
  { name: "Lokmanya Institute of Tech", city: "Nagpur", cutoff: { OPEN: 32.2, OBC: 26.6, SC: 18.89, ST: 11.05, EWS: 16.15, PwD: 14.53 }, type: "Private", fee: "₹130K" },
  { name: "Dr. Engg College", city: "Mumbai", cutoff: { OPEN: 30.61, OBC: 24.97, SC: 17.3, ST: 9.31, EWS: 14.29, PwD: 13.01 }, type: "Private", fee: "₹120K" },
  { name: "Shri Polytechnic", city: "Pune", cutoff: { OPEN: 29.02, OBC: 23.34, SC: 15.79, ST: 7.7, EWS: 12.49, PwD: 11.55 }, type: "Private", fee: "₹90K" },

];

function populateLocations() {
  const locationSelect = document.getElementById("location");
  const locations = new Set(colleges.map(c => c.city));
  locations.forEach(loc => {
    const option = document.createElement("option");
    option.value = loc;
    option.textContent = loc;
    locationSelect.appendChild(option);
  });
}

function findColleges() {
  const percentileInput = document.getElementById("percentile").value;
  const percentile = parseFloat(percentileInput);
  const category = document.getElementById("category").value;
  const collegeType = document.getElementById("college-type").value;
  const location = document.getElementById("location").value;

  const eligibleList = document.getElementById("eligible-list");
  const borderlineList = document.getElementById("borderline-list");
  const nonEligibleList = document.getElementById("non-eligible-list");

  const eligibleCount = document.getElementById("eligible-count");
  const borderlineCount = document.getElementById("borderline-count");
  const nonEligibleCount = document.getElementById("non-eligible-count");

  eligibleList.innerHTML = "";
  borderlineList.innerHTML = "";
  nonEligibleList.innerHTML = "";

  let eligible = 0, borderline = 0, nonEligible = 0;

  if (isNaN(percentile)) {
    eligibleCount.textContent = 0;
    borderlineCount.textContent = 0;
    nonEligibleCount.textContent = 0;
    return;
  }

  colleges.forEach(college => {
    if (collegeType !== "All" && college.type !== collegeType) return;
    if (location !== "All" && college.city !== location) return;

    const cutoff = college.cutoff[category];
    const diff = percentile - cutoff;

    const card = document.createElement("div");
    card.className = "college-card";

    // Category badge
    const categoryBadge = document.createElement("span");
    categoryBadge.className = "category-badge";
    categoryBadge.textContent = category;
    card.appendChild(categoryBadge);

    // College info
    const info = document.createElement("div");
    info.className = "college-info";

    const nameCity = document.createElement("strong");
    nameCity.textContent = `${college.name} (${college.city})`;
    info.appendChild(nameCity);

    const cutoffTypeFee = document.createElement("p");
    cutoffTypeFee.textContent = `Cutoff: ${cutoff}% | ${college.type} | Fee: ${college.fee}`;
    info.appendChild(cutoffTypeFee);

    card.appendChild(info);

    if (diff >= 0) {
      eligible++;
      const status = document.createElement("p");
      status.className = "eligible-status";
      status.textContent = "✅ Eligible";
      card.appendChild(status);
      eligibleList.appendChild(card);
    } else if (diff >= -1.0) {
      borderline++;
      const status = document.createElement("p");
      status.className = "borderline-status";
      status.textContent = "⚠️ Borderline";
      card.appendChild(status);
      borderlineList.appendChild(card);
    } else {
      nonEligible++;
      const status = document.createElement("p");
      status.className = "non-eligible-status";
      status.textContent = "❌ Non-eligible";
      card.appendChild(status);
      nonEligibleList.appendChild(card);
    }
  });

  eligibleCount.textContent = eligible;
  borderlineCount.textContent = borderline;
  nonEligibleCount.textContent = nonEligible;
}

document.getElementById("percentile").addEventListener("input", findColleges);
document.getElementById("category").addEventListener("change", findColleges);
document.getElementById("college-type").addEventListener("change", findColleges);
document.getElementById("location").addEventListener("change", findColleges);

window.onload = () => {
  populateLocations();
  findColleges();
};
