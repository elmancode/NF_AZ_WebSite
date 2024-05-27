export const sponsorMemberShipFormValidation = (data) => {
  if (!data.fullName || data.fullName.trim().length < 4) {
    window.scrollTo({ top: 150, left: 0, behavior: "smooth" });

    return {
      error: "Adınızı daxil edin",
      index: 0,
    };
  }

  if (!data.email) {
    window.scrollTo({ top: 450, left: 0, behavior: "smooth" });

    return { error: "Email ünvanı keçərsizdir.", index: 1 };
  }

  if (!data.phoneNumber || !/^\d{8,15}$/.test(data.phoneNumber.toString())) {
    window.scrollTo({ top: 500, left: 0, behavior: "smooth" });

    return {
      error: "Telefon nömrəsi keçərsizdir. 8-15 rəqəm arasında olmalıdır.",
      index: 2,
    };
  }

  if (!data.city || data.city.length < 4) {
    return { error: "Ölkə və şəhər 4 simvoldan kiçikdir.", index: 3 };
  }

  if (!data.juridicalPerson || data.juridicalPerson.length < 2) {
    return { error: "Hüquqi şəxs 2 simvoldan kiçikdir.", index: 4 };
  }

  return null;
};
