export const elementTopAnimation = {
  hiden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
export const elementLeftAnimation = {
  hiden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export const elementRightAnimation = {
  hiden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export const elementBottomAnimation = {
  hiden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export const elementAnimation = {
  hiden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { easy: 'easyOut', delay: custom * 0.2 },
  }),
};
