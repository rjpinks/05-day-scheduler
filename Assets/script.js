$(function () {
  const allBlocks = $('#block-container').find('.time-block')
  const currentHour = dayjs().hour()

  for (let index = 0; index < allBlocks.length; index++) {
    const blockId = $(allBlocks[index]).prop('id')
    const blockTime = parseInt(blockId.slice(5))
    const blockClass = $(allBlocks[index]).prop('class')

    if (blockTime < currentHour) {
      $(allBlocks[index]).removeClass(blockClass)
      $(allBlocks[index]).addClass('row time-block past')
    } else if (blockTime === currentHour) {
      $(allBlocks[index]).removeClass(blockClass)
      $(allBlocks[index]).addClass('row time-block present')
    } else if (blockTime > currentHour) {
      $(allBlocks[index]).removeClass(blockClass)
      $(allBlocks[index]).addClass('row time-block future')
    }
}})

$(function () {
  $('#currentDay').text(dayjs().format('dddd, MMMM D'))
})