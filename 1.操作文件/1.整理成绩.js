const fs = require('fs')
fs.readFile('../素材/成绩.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log(`读取文件失败${arr.message}`)
    }
    console.log(`\n读取文件成功${dataStr}`)
    const arrOld = dataStr.split(' ')
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', '：'))
    })
    const newStr = arrNew.join('\r\n')
    console.log(arrNew)
    console.log(newStr)
    fs.writeFile('../素材/整理成绩.txt', newStr, 'utf-8', function (err) {
        if (err) {
            return console.log(`写入文件失败${err.message}`)
        }
        console.log('写入文件成功')
    })
})
