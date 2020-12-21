const EXPERIENCE_REPO = require('./../repository/experienceRepository')

const getAll = () => {
return { status: 1, 'List': EXPERIENCE_REPO }
}

const findById = (id) => {
    const experience = EXPERIENCE_REPO.find(item => item.id === id)
    if (experience == undefined) throw ('experience not found')
    return { status: 1, experience }
}

const getRanking = () => {
const experienceSorted = EXPERIENCE_REPO.sort(a,b) => {
    if (a.score < b.score) return 1
    if (a.score > b.score) return -1
    return 0
})
const ranking = experienceSorted.slice(0,5)
return { status 1, ranking }
}


const makeRate = (id, rate, idSuser) => {

}

module.exports = {
    getAll,
    findById,
    getRanking,
    makeRate
}