<template>
    <v-dialog width="350px" presistent v-model="editDialog">
        <v-btn dark class="red lighten-1" floating accent slot="activator">
            Edit Date
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title>Edit Meetup Date</v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-date-picker v-model="editableDate" style="width: 100%;" actions>
                            <template scope="{save, cancel}">
                                <v-btn dark class="red lighten-1" flat @click.native="onSaveChanges">Save</v-btn>
                                <v-btn dark class="red lighten-1" flat @click.native="editDialog = false">Close</v-btn>
                            </template>
                        </v-date-picker>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
    import Moment from '../../../../node_modules/moment'
    export default {
        props: ['meetup'],
        data () {
            return {
                editDialog: false,
                editableDate: null
            }
        },
        methods: {
            onSaveChanges () {
                const newDate = new Date(this.meetup.date)
                console.log(newDate)
                const newDay = new Date(this.editableDate).getUTCDate()
                const newMonth = new Date(this.editableDate).getUTCMonth()
                const newYear = new Date(this.editableDate).getUTCFullYear()
                newDate.setUTCDate(newDay)
                newDate.getUTCMonth(newMonth)
                newDate.getUTCFullYear(newYear)
                this.$store.dispatch('updateMeetupData', {
                    id: this.meetup.id,
                    date: newDate
                })
            }
        },
        created () {
            this.editableDate = Moment(this.meetup.date).format('YYYY-MM-DD')
        }
    }
</script>