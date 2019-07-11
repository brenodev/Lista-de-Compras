export const Types = {
  START_UPDATE: 'Form/START_UPDATE',
  FINISH_UPDATE: 'Form/FINISH_UPDATE'
}

export const Creators = {
  startUpdate: (list, product) => ({
    type: Types.START_UPDATE,
    product,
    list
  }),

  finishUpdate: product => ({
    type: Types.FINISH_UPDATE
  })
}