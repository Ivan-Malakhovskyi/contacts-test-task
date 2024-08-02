export const transformField = (label, value) => ({
  [label]: [
    {
      label,
      modifier: "",
      value,
      is_primary: false,
    },
  ],
});
