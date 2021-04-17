const fs = require('fs')
const data = require('../data.json')

module.exports.index = function(req, res){
    return res.render("index", {files: data.file})
}

module.exports.post = function(req, res){
    const {image} = req.body

    data.file.push({
        id: Number(data.file.length == 0 ? 1 : data.file[data.file.length - 1].id + 1),
        image: String(image)
    })

    // return res.send(base)

    fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
        if (err){
            return res.send('Write file error')
        }
    })
    
    return res.redirect("/")
}