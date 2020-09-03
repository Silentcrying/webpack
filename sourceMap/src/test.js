const itemExistInList = (item, list) => {
    let exist = false
    list.forEach((val) => {
      if (val === item) {
        exist = true
      }
    })
    return exist
  }
  export const getDateStatus = (val) => {
    let month
    let dobuleWeek
    let week
    let day
    let sleep
    let loss
    let noway
    let status = ''
    val.forEach((item) => {
      if (item === '月活') {
        month = '月活'
      } else if (item === '2周活') {
        dobuleWeek = '2周活'
      } else if (item === '周活') {
        week = '周活'
      } else if (item === '流失') {
        loss = '流失'
      } else if (item === '沉睡') {
        sleep = '沉睡'
      } else if (item === '日活') {
        day = '日活'
      } else {
        noway = ''
      }
    })
    const activeStatus = [month, dobuleWeek, week, day, sleep, loss, noway]
    const filterArry = activeStatus.filter((item) => {
      let datalist
      if (item !== '' || item !== undefined) {
        datalist = item
      }
      return datalist
    })
    if (itemExistInList('月活', filterArry)) {
      status = '月活'
    } else if (itemExistInList('2周活', filterArry)) {
      status = '2周活'
    } else if (itemExistInList('周活', filterArry)) {
      status = '周活'
    } else if (itemExistInList('日活', filterArry)) {
      status = '日活'
    } else if (itemExistInList('沉睡', filterArry)) {
      status = '沉睡'
    } else if (itemExistInList('流失', filterArry)) {
      status = '流失'
    } else {
      status = ''
    }
    // const filterStr = filterArry.join('')
    // if (filterStr.indexOf('月') !== -1) {
    //   status = '月活'
    // } else if (filterStr.indexOf('2') !== -1) {
    //   status = '2周活'
    // } else if (filterStr.indexOf('周') !== -1) {
    //   status = '周活'
    // } else if (filterStr.indexOf('日') !== -1) {
    //   status = '日活'
    // } else if (filterStr.indexOf('沉') !== -1) {
    //   status = '沉睡'
    // } else {
    //   status = '流失'
    // }
    return status
  }