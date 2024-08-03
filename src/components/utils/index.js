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

export const transformSimpleField = (label, values) => ({
  [label]: values.map((value) => value),
});
