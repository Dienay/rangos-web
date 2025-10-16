import { useState, useEffect } from "react";

export const isOpenNow = (openingHours) => {
  if (!openingHours) return false;

  const now = new Date();
  const currentDay = now.toLocaleDateString("en-US", { weekday: "long" });
  const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes();

  const daySchedule = openingHours.find((day) => day.day === currentDay);

  if (!daySchedule || !daySchedule.periods) return false;

  return daySchedule.periods.some(({ open, close }) => {
    const [openHour, openMinute] = open.split(":").map(Number);
    const [closeHour, closeMinute] = close.split(":").map(Number);

    const openMinutes = openHour * 60 + openMinute;
    const closeMinutes = closeHour * 60 + closeMinute;

    if (openMinutes > 0 && openMinutes) {
      return (
        currentTimeInMinutes >= openMinutes &&
        currentTimeInMinutes <= closeMinutes
      );
    } else {
      return (
        currentTimeInMinutes >= openMinutes &&
        currentTimeInMinutes <= closeMinutes
      );
    }
  });
};

export const useIsOpenNow = (openingHours) => {
  const [isOpen, setIsOpen] = useState(() => isOpenNow(openingHours));

  useEffect(() => {
    setIsOpen(isOpenNow(openingHours));

    const interval = setInterval(() => {
      setIsOpen(isOpenNow(openingHours));
    }, 60000);

    return () => clearInterval(interval);
  }, [openingHours]);

  return isOpen;
};
