const formatTime = (timestamp) => {
  const date = new Date(timestamp);

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Tháng trong JavaScript bắt đầu từ 0
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${hours}:${minutes} ${ampm} | ${month}/${day}/${year}`;
};

export default formatTime;
