export const state = () => ({
    title: '',
    skill: '',
    URL: '',
    icon: '',
    twitter: '',
    release: '',
    onoff: '',
    category: '',
    bisinesmodel: '',
    pratform: '',
    docment: '',
    pv: '',
    revenu: '',
})
 
export const mutations = {
    maincontnents(value,state) {
        state.title = value.title,
        state.skill = value.skill,
        state.URL = value.URL,
        state.icon = value.icon,
        state.twitter = value.twitter,
        state.release = value.release,
        state.onoff = value.onoff,
        state.category = value.category,
        state.bisinesmodel = value.bisinesmodel,
        state.pratform = value.pratform
        
    },
    contentsbody(value,state) {
        state.docment = value
    },
    contentsmoney(value,state) {
        state.pv = value.pv,
        state.revenu = value.revenu
    }
}