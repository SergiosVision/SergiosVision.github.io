<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3 class="mb-3">
                <h2 class="red--text lighten-1--text">Create a new meetup</h2>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <form @submit.prevent="onCreateMeetup">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field v-model="title" name="title" label="Title" id="title" required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field v-model="location" name="location" label="Location" id="location" required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <!--<v-text-field v-model="imageurl" name="imageurl" label="Image Url" id="image-url" required></v-text-field>-->
                            <v-btn @click="onPickFile" dark raised class="red lighten-1">Upload Image</v-btn>
                            <input type="file" style="display: none;" ref="fileInput" accept="image/*"
                            @change="onFilePicked">
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <img :src="imageurl" alt="" height="300px">
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field v-model="description" name="description" label="Description" multi-line id="description" required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <h4>Choose a Date and Time</h4>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-date-picker header-color="red lighten-1" color="red lighten-1" v-model="date"></v-date-picker>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-time-picker header-color="red lighten-1" color="red lighten-1" format="24hr" v-model="time"></v-time-picker>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn dark type="submit" :disabled="!formIsValid" class="red lighten-1">Create Meetup</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
    import Moment from '../../../node_modules/moment'
    export default {
        data() {
            return {
                title: '',
                location: '',
                imageurl: '',
                description: '',
                date: Moment().format('YYYY-MM-DD'),
                time: Moment().format('h:mm'),
                image: null
            }
        },
        computed: {
            formIsValid () {
                return this.title !== ''
                    && this.location !== ''
                    && this.imageurl !== ''
                    && this.description !== ''
            },
            submittableDateTime () {
                const date = new Date(this.date);
                if (typeof this.time === 'string') {
                    let hours = this.time.match(/^(\d+)/)[1]
                    hours = hours.split(',')[0]
                    const minutes = this.time.match(/:(\d+)/)[1]
                    date.setHours(hours)
                    date.setMinutes(minutes)
                } else {
                    date.setHours(this.time.getHours())
                    date.setMinutes(this.time.getMinutes())
                }
                return date
            }
        },
        methods: {
            onCreateMeetup () {
                if (!this.formIsValid) {
                    return
                }

                if (!this.image) {
                    return
                }

                const meetupData = {
                    title: this.title,
                    location: this.location,
                    image: this.image,
                    description: this.description,
                    date: this.submittableDateTime
                }
                this.$store.dispatch('createMeetup', meetupData)
                this.$router.push('/meetups/')
            },
            onPickFile () {
                this.$refs.fileInput.click()
            },
            onFilePicked (event) {
                const files = event.target.files
                let fileName = files[0].name

                if (fileName.lastIndexOf('.') <= 0) {
                    return alert('Please add a valid file!')
                }
                const fileReader = new FileReader()
                fileReader.addEventListener('load', () => {
                    this.imageurl = fileReader.result
                })
                fileReader.readAsDataURL(files[0])
                this.image = files[0]
            }
        }
    }
</script>