export const memberShipFormValidation = (data) => {
  if (!data.fullName || data.fullName.trim().length < 4) {
    window.scrollTo({ top: 150, left: 0, behavior: "smooth" });

    return {
      error: "Adınızı daxil edin",
      index: 0,
    };
  }

  if (!data.dateOfBirth || !/^\d{4}-\d{2}-\d{2}$/.test(data.dateOfBirth)) {
    window.scrollTo({ top: 300, left: 0, behavior: "smooth" });

    return {
      error: "Doğum tarixi formatı yanlışdır. YYYY-AA-GG formatında olmalıdır.",
      index: 1,
    };
  }

  if (!data.email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
    window.scrollTo({ top: 450, left: 0, behavior: "smooth" });

    return { error: "Email ünvanı keçərsizdir.", index: 2 };
  }

  if (!data.phoneNumber || !/^\d{8,15}$/.test(data.phoneNumber.toString())) {
    window.scrollTo({ top: 500, left: 0, behavior: "smooth" });

    return {
      error: "Telefon nömrəsi keçərsizdir. 8-15 rəqəm arasında olmalıdır.",
      index: 3,
    };
  }

  if (!data.address || data.address.length < 10) {
    window.scrollTo({ top: 650, left: 0, behavior: "smooth" });

    return { error: "Ev ünvanı 10 simvoldan kiçikdir.", index: 4 };
  }

  if (!data.occupation || data.occupation.length < 2) {
    window.scrollTo({ top: 750, left: 0, behavior: "smooth" });

    return { error: "İş sahəsi 2 simvoldan kiçikdir.", index: 5 };
  }

  if (
    !data.tShirtSize ||
    !["S", "M", "L", "XL", "XXL"].includes(data.tShirtSize)
  ) {
    window.scrollTo({ top: 1200, left: 0, behavior: "smooth" });

    return {
      error: "T-shirt ölçüsü keçərsizdir. S, M, L, XL, XXL olmalıdır.",
      index: 6,
    };
  }

  if (!data.favoriteColor || data.favoriteColor.length < 2) {
    window.scrollTo({ top: 1400, left: 0, behavior: "smooth" });

    return { error: "Sevimli rəng ən azı 2 simvol olmalıdır.", index: 7 };
  }

  if (!data.memberType || data.memberType.length < 2) {
    return { error: "Üzvlük növü seçilməyib.", index: 11 };
  }

  if (!data.backOfLicence) {
    return { error: "Vəsiqənin arxa hissəsi keçərsizdir.", index: 8 };
  }

  if (!data.frontOfLicence) {
    return { error: "Vəsiqənin ön hissəsi keçərsizdir.", index: 9 };
  }

  if (!data.emailSubscription) {
    console.log(data.emailSubscription);
    return { error: "Email abunəliyi seçilməyib", index: 10 };
  }

  return null;
};
