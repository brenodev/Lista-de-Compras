export const Types = {
  START_UPDATE: 'Form/START_UPDATE',
  FINISH_UPDATE: 'Form/FINISH_UPDATE'
}

export const Creators = {
  startUpdate: product => ({
    type: Types.START_UPDATE,
    product
  }),

  finishUpdate: product => ({
    type: Types.FINISH_UPDATE
  })
}