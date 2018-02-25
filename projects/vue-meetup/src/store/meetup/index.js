import * as firebase from 'firebase'

export default {
    state: {
        loadedMeetups: [
            {imageurl: 'https://www.city-journal.org/sites/cj/files/New-York.jpg', id: '23235235', title: 'New York', date: new Date(), location: 'New York', description: 'simple1'},
            {imageurl: 'http://www.pitribe.com/pitribe.ashx?act=image&id=176.1911866389', id: '232335235235235', title: 'In biggest Hole', date: new Date(), location: 'Hole', description: 'simple2'},
            {imageurl: 'http://images.kuoni.co.uk/73/dubai-39699597-1508946889-ImageGalleryLightboxLarge.jpg', id: 'dubai', title: 'Dubai', date: new Date(), location: 'Dubai', description: 'simple3'}
        ],
    },
    mutations: {
        setLoadedMeetups (state, payload) {
            state.loadedMeetups = payload
        },
        createMeetup (state, payload) {
            state.loadedMeetups.push(payload)
        },
        updateMeetupData (state, payload) {
            const meetup = state.loadedMeetups.find(meetup => {
                return meetup.id === payload.id
            })
            if (payload.title) {
                meetup.title = payload.title
            }
            if (payload.description) {
                meetup.description = payload.description
            }
            if (payload.date) {
                meetup.date = payload.date
            }
        },
    },
    actions: {
        loadMeetups ({commit}, payload) {
            commit('setLoading', true)
            firebase.database().ref('meetups').once('value')
                .then((data) => {
                    const meetups = []
                    const obj = data.val()
                    for (let key in obj) {
                        meetups.push({
                            id: key,
                            title: obj[key].title,
                            description: obj[key].description,
                            location: obj[key].location,
                            imageurl: obj[key].imageurl,
                            date: obj[key].date,
                            creatorId: obj[key].creatorId
                        })
                    }
                    commit('setLoading', false)
                    commit('setLoadedMeetups', meetups)
                })
                .catch((error) => {
                    commit('setLoading', false)
                    console.log(error)
                })
        },
        createMeetup ({commit, getters}, payload) {
            const meetup = {
                title: payload.title,
                location: payload.location,
                description: payload.description,
                date: payload.date.toISOString(),
                creatorId: getters.user.id
            }
            let imageUrl
            let key
            firebase.database().ref('meetups').push(meetup)
                .then((data) => {
                    key = data.key
                    return key
                })
                .then(key => {
                    const fileName = payload.image.name
                    const ext = fileName.slice(fileName.lastIndexOf('.'))
                    return firebase.storage().ref('meetups/' + key + '.' + ext).put(payload.image)
                })
                .then(fileData => {
                    imageUrl = fileData.metadata.downloadURLs[0]
                    return firebase.database().ref('meetups').child(key).update({imageurl: imageUrl})
                })
                .then(() => {
                    commit('createMeetup', {
                        ...meetup,
                        imageurl: imageUrl,
                        id: key
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
            // Reach out to firebase and store it
        },
        updateMeetupData ({commit}, payload) {
            commit('setLoading', true)
            const updateObj = {}
            if (payload.title) {
                updateObj.title = payload.title
            }
            if (payload.description) {
                updateObj.description = payload.description
            }
            if (payload.date) {
                updateObj.date = payload.date
            }
            firebase.database().ref('meetups').child(payload.id).update(updateObj)
                .then(() => {
                    commit('setLoading', false)
                    commit('updateMeetupData', payload)
                })
                .catch(error => {
                    console.log(error)
                    commit('setLoading', false)
                })
        },
    },
    getters: {
        loadedMeetups (state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        featuredMeetups (state, getters) {
            return getters.loadedMeetups.slice(0, 5)
        },
        loadedMeetup (state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        },
    }
}